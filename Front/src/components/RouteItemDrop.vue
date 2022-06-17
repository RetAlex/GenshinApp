<template>
    <b-collapse class="list" :open="false" @open="getRouteDrop(route)" position="is-bottom"
                animation="slide" aria-id="contentIdForA11y1">
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
                                                <img class="drop-icon" :alt="itemIcons[item.itemId]['name']"
                                                     :src="itemIcons[item.itemId]['image']"/>
                                            </span>
                        <span>x{{item.amount}}</span>
                    </div>
                </div>
            </div>
        </div>
    </b-collapse>
</template>

<script>
    export default {
        name: "RouteItemDrop",
        props: ['route', 'itemIcons'],
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
            }
        },
        methods: {
            async getRouteDrop(route) {
                if (route.drop) return;
                const requestOptions = {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({mobs: route.mobs, worldLevel: localStorage.wl})
                };
                const res = await fetch(this.apiLink + "/exp-calc/calculate", requestOptions);
                this.$set(route, 'drop', await res.json());
                this.$forceUpdate();
            }
        }
    }
</script>

<style scoped>
    .drop-info-wrapper {
        position: relative;
        min-height: 100px;
    }

    .drop-info {
        font-size: 13px;
        padding: 10px 20px;
        position: relative;
    }

    .drop-info:nth-child(2) {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
    }

    .drop-info .drop-info-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .drop-info .drop-info-item .drop-icon {
        width: 22px;
        margin: 2px 5px;
        border-radius: 50%;
    }

    .camp-info .drop-info {
        padding: 0;
    }

    .camp-info .drop-info-wrapper {
        min-height: 0;
        padding-bottom: 10px;
    }
</style>
