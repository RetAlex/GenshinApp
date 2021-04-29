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
                    <p>This page contains all the latest updates of an application. The updates are posted as soon
                        as they are available for users.</p>
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
                        <l-image-overlay :url="url" :bounds="bounds"/>
                        <l-marker :visible="teleportsVisible" v-for="teleport in teleports" :key="teleport.name"
                                  :lat-lng="teleport" :icon="icons[teleport.type]"></l-marker>
                        <l-layer-group v-for="route in routes" :key="route.name" :visible="route.show">
                            <l-marker v-for="point in route.points" :key="point.name"
                                      :lat-lng="point" :icon="pointIcons[point.type]"></l-marker>
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
                        <div class="price-wrapper">
                            <img src="https://genshin-application-ci.herokuapp.com/game/images/RuinGuard.jpg"
                                 alt="Ruin Guard" class="monster-image">
                            <img src="https://genshin-application-ci.herokuapp.com/game/images/RuinGuard.jpg"
                                 alt="Ruin Guard" class="monster-image">
                        </div>
                        <b-collapse class="list" :open="false" position="is-bottom" animation="slide" aria-id="contentIdForA11y1">
                            <template #trigger="props">
                                <a aria-controls="contentIdForA11y1">
                                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                                    {{ !props.open ? 'Show estimated drop' : 'Hide estimated drop' }}
                                </a>
                            </template>
                            <div class="drop-info row">
                                <div class="drop-info-item col-md-6">
                                    <img class="drop-icon" src="../assets/images/icons/mora.png"/>
                                    <span>x{{route.drop.mora}}</span>
                                </div>
                                <div class="drop-info-item col-md-6">
                                    <img class="drop-icon" src="../assets/images/icons/char_exp.png"/>
                                    <span>x{{route.drop.exp}}</span>
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
    import {CRS} from "leaflet";
    import {LMap, LImageOverlay, LPolyline, LLayerGroup} from 'vue2-leaflet';
    import {teleportIcons, teleports} from "@/assets/constants/teleport-data";
    import {pointIcons, routes} from "@/assets/constants/routes-data";

    export default {
        name: "RouteMap",
        components: {
            LMap,
            LImageOverlay,
            LPolyline,
            LLayerGroup
        },
        data() {
            return {
                url: "http://genshin-application-ci.herokuapp.com/game/images/maps/map_1.png",
                bounds: [[-500, -500], [1000, 1000]],
                maxBounds: [[-500, -500], [1000, 1000]],
                minZoom: 0.2,
                maxZoom: 3,
                crs: CRS.Simple,
                icons: teleportIcons,
                teleports: teleports,
                pointIcons: pointIcons,
                teleportsVisible: true,
                routes: routes
            };
        },
        methods: {
            addMarker(event) {
                console.log(event.latlng)
                //this.markers.push(event.latlng);
            }
        },
        mounted() {
            this.$refs.map.mapObject.setView([70, 120], 1);
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

    .route-item.active .route-body .price-wrapper {
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

    .route-item .route-body .price-wrapper {
        text-align: center;
        width: 80%;
        margin: auto;
        margin-top: 5px;
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

    .route-item .route-body .list .drop-info {
        font-size: 13px;
        padding: 10px 20px;
    }

    .route-item .route-body .list .drop-info .drop-info-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .route-item .route-body .list .drop-info .drop-info-item .drop-icon {
        width: 22px;
        margin: 0 5px;
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
