<template>
    <div class="camp-info">
        <div class="route-body">
            <div class="monsters-wrapper">
                            <span class="monster" v-for="mob in camp.mobs" :key="mob.id">
                                <img :src="mobIcons[mob.id].image" class="monster-image">
                                <span class="monster-amount">{{mob.amount}}</span>
                            </span>
            </div>
            <route-item-drop :route="camp" :item-icons="itemIcons"></route-item-drop>
        </div>
<!--        <div class="route-footer">-->
<!--            <a class="route-button" v-bind:class="{ hidden: !camp.show }">-->
<!--                {{ !camp.show ? 'Add to the current route' : 'Delete from the current route' }}</a>-->
<!--        </div>-->
    </div>
</template>

<script>
    import RouteItemDrop from "@/components/RouteItemDrop";

    export default {
        name: "CampInfo",
        components: {RouteItemDrop},
        props: ['mobIcons', 'itemIcons', 'camp'],
    }
</script>

<style>
    .leaflet-popup-content-wrapper, .leaflet-popup-tip {
        box-shadow: none !important;
    }

    .leaflet-popup-content-wrapper {
        border-radius: 5px !important;
        margin-bottom: 5px;
        padding: 1px 0 0 0 !important;
    }

    .leaflet-popup-tip-container {
        width: 0 !important;
    }

    .leaflet-popup-content {
        /*margin: 13px 19px;*/
        margin: 0 !important;
    }

    .camp-info .route-body {
        margin: 13px 19px;
    }

    .camp-info .route-footer .route-button {
        font-size: 10px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>
