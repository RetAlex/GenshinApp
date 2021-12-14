<template>
    <div class="route-list-wrap col-lg-4 col-md-12 pl-0">
        <button class="route-list-btn" @click="menuOpened = !menuOpened"><i class="fa fa-list-ul"></i></button>
        <b-collapse :open="false" @open="toggleFilters()" animation="slide" aria-id="contentIdForA11y1">
            <template #trigger><button class="filter-btn">Choose Filter</button></template>
            <div class="filter-wrap">
                <b-dropdown class="col-lg-6" v-model="filter.characters" multiple aria-role="list">
                    <template #trigger>
                        <b-button type="is-primary" icon-right="menu-down">Characters</b-button>
                    </template>

                    <b-dropdown-item v-for="char in filterOptions.characters" :key="char.id" :value="char" aria-role="listitem">
                        <span>{{char.name}}</span>
                    </b-dropdown-item>
                </b-dropdown>
                <b-dropdown class="col-lg-6" v-model="filter.weapons" multiple aria-role="list">
                    <template #trigger>
                        <b-button type="is-primary" icon-right="menu-down">Weapons</b-button>
                    </template>

                    <b-collapse v-for="type in Object.keys(filterOptions.weapons)" :key="type" :open="false" animation="slide" aria-id="contentIdForA11y1">
                        <template #trigger><div class="weapon-type-title">{{type}}</div></template>
                        <div class="weapons-wrap">
                            <b-dropdown-item v-for="weapon in filterOptions.weapons[type]" :key="weapon.id" :value="weapon" aria-role="listitem">
                                <span>{{weapon.name}}</span>
                            </b-dropdown-item>
                        </div>
                    </b-collapse>
                </b-dropdown>
            </div>
        </b-collapse>
        <div class="route-items" :class="menuOpened ? 'active' : ''">
            <button class="route-list-close" @click="menuOpened = !menuOpened"><i class="fa fa-close"></i></button>
            <div v-if="routes && routes.length">
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
            <div v-else class="center-text"><p>There are no routes for this region yet</p></div>
        </div>
    </div>
</template>

<script>
    import RouteItemDrop from "@/components/RouteItemDrop";
    export default {
        name: "RoutesList",
        components: {RouteItemDrop},
        props: ['routes', 'mobIcons', 'itemIcons'],
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
                menuOpened: false,
                filterOpened: false,
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
            }
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

    .route-items .center-text {
        margin-top: 20px;
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
        padding: 10px 15px;
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
    }

    .filter-wrap .dropdown-content a.dropdown-item:hover {
        background-color: rgba(253, 205, 229, 0.3)
    }

    .filter-wrap .dropdown-menu {
        width: 100%;
        background: transparent;
        border: none;
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
