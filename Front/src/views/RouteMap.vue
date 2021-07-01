<template>
    <section class="section" id="map">
        <div class="row">
            <div class="col-lg-12">
                <div class="center-heading">
                    <h2 class="section-title">Farming Routes</h2>
                </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
                <div class="center-text">
                    <p>Welcome on `Farming routes`. This feature allows you to see currently submitted monster farming routes on the map along with the loot they give you. Currently this feature doesn't support custom routes but we are working on it!</p>
                </div>
            </div>
        </div>
        <div class="row map-controls">
            <b-field>
                <b-switch v-model="teleportsVisible" type="is-info">Show Teleports</b-switch>
            </b-field>
        </div>
        <div class="row map-container">
            <div class="col-md-9 pr-0">
                <div class="map-wrap">
                    <l-map ref="map" :min-zoom="minZoom" :max-zoom="maxZoom" :max-bounds="maxBounds" :crs="crs"
                           @click="addMarker">
                        <l-tile-layer :url="url"/>
                        <l-marker :visible="teleportsVisible" v-for="teleport in teleports" :key="teleport.name"
                                  :lat-lng="teleport" :icon="icons[teleport.type]"></l-marker>
                        <l-layer-group v-for="route in routes" :key="route.name" :visible="route.show">
                            <l-marker v-for="point in route.points" :key="point.name"
                                      :lat-lng="point" :icon="mobIcons[point.mobId].point"></l-marker>
                            <l-polyline :lat-lngs="route.line.latlngs" :color="route.line.color" :weight="route.line.weight"
                                        :className="'path'"></l-polyline>
                        </l-layer-group>
                    </l-map>
                </div>
            </div>
            <div class="route-items col-md-3 pl-0">
                <div class="route-item" v-for="route in routes" :key="route.name">
                    <div class="route-header">
                        <h3 class="route-title">{{route.name}}</h3>
                    </div>
                    <div class="route-body">
                        <div class="monsters-wrapper">
                            <span class="monster" v-for="mob in route.mobs" :key="mob.id">
                                <img :src="mobIcons[mob.id].image" class="monster-image">
                                <span class="monster-amount">{{mob.amount}}</span>
                            </span>
                        </div>
                        <b-collapse class="list" :open="false" @open="getRouteDrop(route)" position="is-bottom" animation="slide" aria-id="contentIdForA11y1">
                            <template #trigger="props">
                                <a aria-controls="contentIdForA11y1">
                                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                                    {{ !props.open ? 'Show estimated drop' : 'Hide estimated drop' }}
                                </a>
                            </template>
                            <div class="drop-info-wrapper">
                                <b-loading :is-full-page="false" :active="!route.drop"></b-loading>
                                <div class="drop-info row" v-if="route.drop">
                                    <div class="drop-info-item col-md-6">
                                        <img class="drop-icon" src="../assets/images/icons/mora.png"/>
                                        <span>x{{route.drop.totalMora}}</span>
                                    </div>
                                    <div class="drop-info-item col-md-6">
                                        <img class="drop-icon" src="../assets/images/icons/char_exp.png"/>
                                        <span>x{{route.drop.totalExperience}}</span>
                                    </div>
                                </div>

                                <div class="drop-info" v-if="route.drop">
                                    <div v-for="item in route.drop.items" :key="item.itemId" class="drop-info-item">
                                        <div v-if="item && item.amount > 0">
                                            <span :class="'rarity-' + itemIcons[item.itemId]['rarity']">
                                                <img class="drop-icon" :alt="itemIcons[item.itemId]['name']" :src="itemIcons[item.itemId]['image']"/>
                                            </span>
                                            <span>x{{item.amount}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-collapse>
                    </div>
                    <div class="route-footer">
                        <a class="route-button" v-bind:class="{ hidden: !route.show }" @click="route.show = !route.show">
                            {{ !route.show ? 'Show on map' : 'Hide on map' }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {CRS, latLngBounds} from "leaflet";
    import {LMap, LTileLayer, LPolyline, LLayerGroup} from 'vue2-leaflet';
    import {teleportIcons, teleports} from "@/assets/constants/teleport-data";
    import L from "leaflet";

    export default {
        name: "RouteMap",
        components: {
            LMap,
            LTileLayer,
            LPolyline,
            LLayerGroup
        },
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
                url: "http://genshin-application-ci.herokuapp.com/tms/1.0.0/teyvat@png/{z}/{x}/{y}.png",
                bounds: latLngBounds([[0, 0], [-1024, 1024]]),
                maxBounds: latLngBounds([[0, 0], [-1024, 1024]]),
                minZoom: 0,
                maxZoom: 2,
                crs: CRS.Simple,
                icons: teleportIcons,
                teleports: teleports,
                teleportsVisible: true,
                routes: [],
                mobIcons: {},
                itemIcons: {}
            };
        },
        methods: {
            addMarker(event) {
                console.log(event.latlng)
                //this.markers.push(event.latlng);
            },
            async getMobs() {
                const res = await fetch(this.apiLink + "/exp-calc/mobs");
                let mobs = await res.json();
                for (let key in mobs) {
                    let item = mobs[key];
                    this.mobIcons[item.id] = {
                        image: this.apiLink + item.image,
                        point: L.icon({
                            iconUrl: this.apiLink + item.image,
                            iconSize: [26, 26],
                            iconAnchor: [13, 13],
                            className: 'point-icon'
                        })
                    };
                }
            },
            async getItems() {
                const res = await fetch(this.apiLink + "/exp-calc/items");
                let items = await res.json();
                for (let key in items) {
                    let item = items[key];
                    item.image = this.apiLink + item.image;
                    this.$set(this.itemIcons, item.id, item);
                }
            },
            async getRoutes() {
                const res = await fetch(this.apiLink + "/game/routes/mainRoutes.json");
                this.routes = await res.json();
            },
            async getRouteDrop(route) {
                if (route.drop) return;
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({mobs: route.mobs, worldLevel: localStorage.wl})
                };
                const res = await fetch(this.apiLink + "/exp-calc/calculate", requestOptions);
                this.$set(route, 'drop', await res.json());
                console.log(route)
            }
        },
        mounted() {
            this.$refs.map.mapObject.setView([70, 120], 1);
        },
        async created() {
            await this.getMobs();
            await this.getItems();
            await this.getRoutes();
        }
    }
</script>

<style>
    .point-icon {
        border-radius: 50%;
        border: 2px white solid;
    }

    .collapse:not(.show) {
        display: block;
    }

    .b-tooltip.is-primary .tooltip-content {
        z-index: 10000;
        padding: 3px 5px;
        font-size: 9px;
        background: #5baaf6;
    }

    .map-wrap {
        height: 80vh;
        width: 100%;
    }

    .map-container {
        margin-left: -39px;
        margin-right: -39px;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.1);
    }

    .map-controls {
        margin-bottom: 15px;
        font-size: 15px;
        color: #777;
        letter-spacing: 1px;
    }

    .leaflet-container {
        background: #f2f2fe !important;
    }

    .route-items {
        background: #FFFFFF;
        overflow-y: scroll;
        height: 80vh;
        padding-right: 15px;
    }

    .route-item {
        background: #FFFFFF;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.1);
        padding: 20px 0 0 0;
    }

    .route-item.active .route-header {
        position: relative;
    }

    .route-item.active .route-header .route-title {
        color: #1e1e1e;
    }

    .route-item.active .route-body .monsters-wrapper {
        background-color: #ff589e;
    }

    .route-item .route-header {
        text-align: center;
        display: block;
        position: relative;
    }

    .route-item .route-header .route-title {
        font-weight: 500;
        font-size: 17px;
        letter-spacing: 0.25px;
        color: #1e1e1e;
        width: 180px;
        height: 40px;
        line-height: 40px;
        left: 0px;
        right: 0px;
        margin: auto;
    }

    .route-item .route-body {
        margin-bottom: 20px;
    }

    .route-item .route-body .monster-image {
        width: 30px;
        height: 30px;
        margin-left: 5px;
    }

    .route-item .route-body .monsters-wrapper {
        text-align: center;
        width: 80%;
        margin: auto;
        margin-top: 5px;
    }

    .route-item .route-body .monsters-wrapper .monster {
        position: relative;
    }

    .route-item .route-body .monsters-wrapper .monster-amount {
        color: white;
        background: rgb(91, 170, 246);
        border-radius: 50%;
        font-size: 10px;
        font-weight: bold;
        width: 15px;
        display: flex;
        height: 15px;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -5px;
        right: -5px;
    }

    .route-item .route-body .list a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
        font-weight: 400;
        font-size: 13px;
        color: #7a7a7a;
        letter-spacing: 0.25px;
        text-decoration: none;
        transition: color .3s ease;
    }

    .route-item .route-body .list a:hover {
        color: #5baaf6;
    }

    .route-item .route-body .list .drop-info-wrapper {
        position: relative;
        min-height: 100px;
    }

    .route-item .route-body .list .drop-info {
        font-size: 13px;
        padding: 10px 20px;
        position: relative;
    }

    .route-item .route-body .list .drop-info:nth-child(2) {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
    }

    .route-item .route-body .list .drop-info .drop-info-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .route-item .route-body .list .drop-info .drop-info-item .drop-icon {
        width: 22px;
        margin: 2px 5px;
        border-radius: 50%;
    }

    .route-item .route-body .list {
        text-align: center;
    }

    .route-item .route-footer {
        text-align: center;
    }

    .route-item .route-footer .route-button {
        color: #FFFFFF;
        background-color: rgba(91, 170, 246, 1);
        width: 100%;
        display: block;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        padding: 5px;
        font-size: 12px;
        transition: all .3s ease;
    }

    .route-item .route-footer .route-button.hidden {
        color: #888888;
        background-color: rgba(253, 205, 229, 1);
    }

</style>
