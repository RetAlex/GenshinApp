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
                    <p>Welcome on `Farming routes`. This feature allows you to see currently submitted monster farming
                        routes on the map along with the loot they give you. Currently this feature doesn't support
                        custom routes but we are working on it!</p>
                </div>
            </div>
        </div>
        <div class="row map-controls">
            <b-dropdown v-model="active" aria-role="list">
                <template #trigger>
                    <b-button :label="capitalize(active)" type="is-primary" icon-right="menu-down"/>
                </template>
                <b-dropdown-item v-for="region in regions" :key="region" :value="region" aria-role="listitem">
                    {{capitalize(region)}}
                </b-dropdown-item>
            </b-dropdown>
            <b-field>
                <b-switch v-model="teleportsVisible" type="is-info">Show Teleports</b-switch>
            </b-field>
        </div>
        <div v-for="region in regions" :key="region">
            <div v-if="region === active">
                <div class="row map-container">
                    <div class="col-lg-8 col-md-12 pr-0">
                        <div class="map-wrap">
                            <l-map :ref="region" :options="{name: region}" :min-zoom="minZoom" :max-zoom="maxZoom"
                                   :max-bounds="maxBounds" :crs="crs"
                                   @click="addMarker">
                                <l-tile-layer :url="getMapUrl(region)"/>
                                <l-marker :visible="teleportsVisible" v-for="teleport in teleports[region]"
                                          :key="teleport.name"
                                          :lat-lng="teleport" :icon="icons[teleport.type]"></l-marker>
                                <l-layer-group v-for="route in cachedRoutes[region]" :key="route.name" :visible="route.show">
                                    <l-marker v-for="point in route.points" :key="point.name"
                                              :lat-lng="point" :icon="mobIcons[point.mobId].point"></l-marker>
                                    <l-polyline v-if="route.line" :lat-lngs="route.line.latlngs" :color="route.line.color"
                                                :weight="route.line.weight"
                                                :className="'path'"></l-polyline>
                                </l-layer-group>
                            </l-map>
                        </div>
                    </div>
                    <routes-list :cached-routes="cachedRoutes[region]" :mobIcons="mobIcons" :itemIcons="itemIcons"></routes-list>
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
    import RoutesList from "@/components/RoutesList";

    export default {
        name: "RouteMap",
        components: {
            RoutesList,
            LMap,
            LTileLayer,
            LPolyline,
            LLayerGroup
        },
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
                regions: ['mondstadt', 'liyue', 'inazuma', 'enkanomiya'],
                active: 'inazuma',
                bounds: latLngBounds([[0, 0], [-1024, 1024]]),
                maxBounds: latLngBounds([[0, 0], [-1024, 1024]]),
                minZoom: 0,
                maxZoom: 3,
                crs: CRS.Simple,
                icons: teleportIcons,
                teleports: teleports,
                teleportsVisible: true,
                mobIcons: {},
                itemIcons: {},
                cachedRoutes: {}
            };
        },
        methods: {
            addMarker(event) {
                this.copy(`lat: ${event.latlng.lat}, lng: ${event.latlng.lng}`);
                //this.markers.push(event.latlng);
            },
            copy(text) {
                let input = document.createElement('textarea');
                input.innerHTML = text;
                document.body.appendChild(input);
                input.select();
                const result = document.execCommand('copy');
                document.body.removeChild(input);
                return result;
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
                const dataRoutes = await res.json();
                let ret = {};
                dataRoutes.forEach(route => {
                    if (!ret[route.region]) ret[route.region] = [];
                    ret[route.region].push(route);
                    this.$set(this.cachedRoutes, route.region, ret[route.region]);
                })
            },
            getMapUrl(region) {
                return `${this.apiLink}/tms/1.0.0/teyvat@png/${region}/{z}/{x}/{y}.png`
            },
            capitalize(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        },
        async created() {
            // this.$refs.map.mapObject.setView([70, 120], 1);
            await this.getMobs();
            await this.getItems();
            await this.getRoutes();
        }
    }
</script>

<style>
    #map {
        padding: 3rem 0.5rem;
    }

    #map .row {
        margin-right: 0;
        margin-left: 0;
    }

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

    #map .row.map-container {
        position: relative;
        margin-left: -1.5rem;
        margin-right: -1.5rem;
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

    .route-items-wrap {
        background: #FFFFFF;
        height: 80vh;
    }

    .route-items {
        overflow-y: scroll;
        height: 80vh;
    }

    .route-item {
        background: #FFFFFF;
        /*box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.1);*/
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

    .tab-content {
        padding: 0 !important;
    }

    .dropdown-menu {
        z-index: 2000;
    }

    .dropdown-trigger .button {
        background: rgba(91, 170, 246, 1) !important;;
    }

    .dropdown-trigger .button span {
        font-weight: bold !important;
    }

    .map-controls {
        display: flex;
        align-items: center;
    }

    .map-controls label.switch {
        margin-bottom: 0;
    }

    .map-controls .switch input[type="checkbox"]:checked + .check.is-info {
        background: rgba(91, 170, 246, 1) !important;;
    }

    .map-controls .dropdown {
        margin-right: 10px;
        z-index: 1001;
    }

    a.dropdown-item.is-active, .dropdown .dropdown-menu .has-link a.is-active, button.dropdown-item.is-active {
        background-color: rgba(253, 205, 229, 1) !important;
        color: #1e1e1e;
    }

    @media (max-width: 1023px) {
        .dropdown.is-mobile-modal > .dropdown-menu {
            z-index: 5000 !important;
        }

        .dropdown .background {
            z-index: 4000;
        }
    }

</style>
