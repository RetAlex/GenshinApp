<template>
    <div class="route-list-wrap col-lg-4 col-md-12 pl-0">
        <button class="route-list-btn" @click="menuOpened = !menuOpened"><i class="fa fa-list-ul"></i></button>
        <div class="route-items" :class="menuOpened ? 'active' : ''">
            <button class="route-list-close" @click="menuOpened = !menuOpened"><i class="fa fa-close"></i></button>
            <div v-for="route in routes" :key="route.name">
                <div class="route-item" v-if="route.region === region">
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
                    </div>
                    <div class="route-footer">
                        <a class="route-button" v-bind:class="{ hidden: !route.show }" @click="route.show = !route.show">
                            {{ !route.show ? 'Show on map' : 'Hide on map' }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoutesList",
        props: ['routes', 'mobIcons', 'itemIcons', 'region'],
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
                menuOpened: false
            }
        },
        methods: {
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
            console.log(this.routes)
        }
    }
</script>

<style scoped>
    .route-list-btn {
        display: none;
    }

    .route-list-close {
        display: none;
    }

    @media (max-width: 992px) {
        .route-items {
            top: 0;
            position: absolute;
            right: -200%;
            padding-right: 0;
            transition: right 300ms ease-in-out;
            z-index: 2000;
            width: 100%;
        }

        .route-items.active {
            right: 0;
        }

        .route-list-btn {
            display: block;
            position: absolute;
            right: 0;
            top: 0.5rem;
            border: none;
            background: #fff;
            padding: 5px 30px 5px 20px;
            font-size: 20px;
            color: #1e1e1e;
            border-radius: 5px;
            z-index: 2000;
        }

        .route-list-close {
            display: block;
            position: absolute;
            border: none;
            background: none;
            opacity: 0.5;
            padding: 5px 30px;
        }

        .route-list-wrap {
            position: unset !important;
        }
    }

    @media (max-width: 765px) {
        .route-items {
            width: calc(100% - 1rem);
        }
    }
</style>
