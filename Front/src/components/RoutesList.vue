<template>
    <div class="route-list-wrap col-lg-4 col-md-12 pl-0">
        <button class="route-list-btn" @click="menuOpened = !menuOpened"><i class="fa fa-list-ul"></i></button>
        <div class="route-items-wrap" :class="menuOpened ? 'active' : ''">
            <b-collapse :open="false" @open="toggleFilters()" animation="slide" aria-id="contentIdForA11y1">
                <template #trigger><button class="filter-btn">Choose Filter</button></template>
                <div class="filter-wrap">
                    <b-dropdown @change="applyFilter()" class="col-lg-6" v-model="filter.characters" multiple aria-role="list">
                        <template #trigger>
                            <b-button type="is-primary" icon-right="menu-down">{{filter.characters.length ? 'For: ' + namesToString(filter.characters) : 'Characters'}}</b-button>
                        </template>

                        <b-dropdown-item v-for="char in filterOptions.characters" :key="char.id" :value="char" aria-role="listitem">
                            <div class="char-item">
                                <span class="char-item-img" :style="{'background-image': 'url(' + apiLink + '/game/images/characters/' + char.id + '.png'}"></span>
                                <span>{{char.name}}</span>
                            </div>
                        </b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown @change="applyFilter()" class="col-lg-6" v-model="filter.weapons" multiple aria-role="list">
                        <template #trigger>
                            <b-button type="is-primary" icon-right="menu-down">{{filter.weapons.length ? 'For: ' + namesToString(filter.weapons) : 'Weapons'}}</b-button>
                        </template>

                        <b-collapse v-for="type in Object.keys(filterOptions.weapons)" :key="type" :open="false" animation="slide" aria-id="contentIdForA11y1">
                            <template #trigger><div class="weapon-type-title">{{type}}</div></template>
                            <div class="weapons-wrap">
                                <b-dropdown-item v-for="weapon in filterOptions.weapons[type]" :key="weapon.id" :value="weapon" aria-role="listitem">
                                    <div :class="'weapon-item rarity-' + weapon.rarity">
                                        <span class="weapon-item-img">
                                            <span :style="{'background-image': 'url(' + apiLink + '/game/images/weapons/' + weapon.id + '.png'}"></span></span>
                                        <span>{{weapon.name}}</span>
                                    </div>
                                </b-dropdown-item>
                            </div>
                        </b-collapse>
                    </b-dropdown>
                </div>
            </b-collapse>
            <button class="route-list-close" @click="menuOpened = !menuOpened"><i class="fa fa-close"></i></button>
            <div v-if="routes && routes.length" class="route-items">
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
                        <route-item-drop :route="route" :item-icons="itemIcons"></route-item-drop>
                    </div>
                    <div class="route-footer">
                        <a class="route-button" v-bind:class="{ hidden: !route.show }"
                           @click="toggleOnMap(route)">
                            {{ !route.show ? 'Show on map' : 'Hide on map' }}</a>
                    </div>
                </div>
            </div>
            <div v-else class="center-text"><p>No routes found</p></div>
        </div>
    </div>
</template>

<script>
    import RouteItemDrop from "@/components/RouteItemDrop";

    export default {
        name: "RoutesList",
        components: {RouteItemDrop},
        props: ['mobIcons', 'itemIcons', 'cachedRoutes'],
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
                routes: this.cachedRoutes,
                menuOpened: false,
                filterOptions: {weapons: [], characters: []},
                filter: {weapons: [], characters: []}
            }
        },
        methods: {
            toggleOnMap(route) {
                route.show = !route.show;
                this.$forceUpdate();
            },
            async toggleFilters() {
                if (!this.filterOptions.weapons.length && !this.filterOptions.characters.length) {
                    await this.getFilterCharOptions();
                    await this.getFilterWeaponOptions();
                }
            },
            async getFilterCharOptions() {
                const res = await fetch(this.apiLink + "/game/info/characters.json");
                this.$set(this.filterOptions, 'characters', await res.json());
            },
            async getFilterWeaponOptions() {
                const res = await fetch(this.apiLink + "/game/info/weaponss.json");
                this.$set(this.filterOptions, 'weapons', await res.json());
            },
            applyFilter() {
                if (this.filter.characters.length || this.filter.weapons.length) {
                    this.routes = this.cachedRoutes.filter(value => value.items.some(r => this.prepareFilterData().includes(r)));
                } else {
                    this.routes = this.cachedRoutes;
                }
            },
            prepareFilterData() {
                let items = [];
                const filterData = JSON.parse(JSON.stringify(this.filter));
                for (let key in filterData) {
                    filterData[key].forEach(el => this.pushItems(items, el.items))
                }
                return items;
            },
            pushItems(itemsList, newItems) {
                newItems.forEach(el => {if (!itemsList.includes(el)) itemsList.push(el)});
            },
            namesToString(list) {
                let names = [];
                list.forEach(el => names.push(el.name))
                return names;
            }
        },
        mounted() {
            setTimeout(() => {
                this.routes = this.cachedRoutes;
            }, 2000);
        }
    }
</script>

<style>
    .route-list-btn {
        display: none;
    }

    .route-list-close {
        display: none;
    }

    .route-items-wrap .center-text {
        padding-top: 20px;
    }

    .filter-btn {
        border-top-left-radius: 5px;
        position: absolute;
        right: 20px;
        border: none;
        border-top-right-radius: 5px;
        padding: 7px 20px;
        font-size: 10px;
        top: -29px;
        background: #5baaf6;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .filter-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 25px;
        background: #fff;
        border-bottom: 1px solid #eee;
    }

    .filter-wrap .weapon-type-title {
        text-transform: uppercase;
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        letter-spacing: 2px;
        font-weight: 600;
        transition: color .3s ease;
        padding: 5px;
        border-bottom: 1px solid #e3e3e3;
        color: #777;
    }

    .filter-wrap .weapon-type-title:hover {
        color: #5baaf6;
    }

    .filter-wrap .dropdown {
        padding: 0;
    }

    .filter-wrap .dropdown-trigger {
        width: 100%;
        overflow: hidden;
    }

    .filter-wrap .dropdown-trigger .button {
        background: #f2f2fe !important;;
        color: #777 !important;
        font-size: 12px;
        width: 100%;
        justify-content: space-between;
    }

    .filter-wrap .dropdown-trigger .button span {
        font-weight: normal !important;
    }

    .filter-wrap .dropdown-content {
        max-height: 300px;
        overflow: auto;
        background: #f2f2fe !important;
    }

    .filter-wrap .dropdown-content .dropdown-item {
        color: #777 !important;
        font-size: 12px;
        padding: 5px 10px;
    }

    .filter-wrap .dropdown-content a.dropdown-item:hover {
        background-color: rgba(253, 205, 229, 0.3)
    }

    .filter-wrap .dropdown-menu {
        width: 100%;
        background: transparent;
        border: none;
    }

    .filter-wrap .char-item .char-item-img {
        width: 25px;
        height: 25px;
        margin-right: 7px;
        border-radius: 50%;
        display: inline-block;
        background-size: cover;
        background-position: bottom;
    }

    .filter-wrap .char-item, .filter-wrap .weapon-item {
        display: flex;
        align-items: center;
    }

    .filter-wrap .weapon-item .weapon-item-img {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin-right: 7px;
        display: inline-block;
    }

    .filter-wrap .weapon-item .weapon-item-img span {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: inline-block;
        background-size: cover;
        background-position: bottom;
    }

    .rarity-5 .weapon-item-img {
        background-color: blue;
    }

    @media (max-width: 992px) {
        .route-items-wrap {
            top: 0;
            position: absolute;
            right: -200%;
            padding-right: 0;
            transition: right 300ms ease-in-out;
            z-index: 2000;
            width: 100%;
        }

        .route-items-wrap.active {
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

        .filter-wrap .char-item .char-item-img {
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }

        .filter-wrap .weapon-item .weapon-item-img {
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }

        .filter-wrap .weapon-item .weapon-item-img span {
            width: 40px;
            height: 40px;
        }

        .filter-wrap .dropdown-content {
            max-height: inherit;
        }

        .filter-wrap .dropdown-content .dropdown-item {
            font-size: 16px;
        }

    }

    @media (max-width: 765px) {
        .route-items-wrap {
            width: calc(100% - 1rem);
        }
    }
</style>
