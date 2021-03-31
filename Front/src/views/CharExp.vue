<template>
    <section class="section colored" id="about-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Character Experience Calculator</h2>
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-10">
                    <div class="center-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="advent-rank-wrap">
                    <ul>
                        <li v-for="index in 7" :key="index">
                            <a :class="index===currentWL?'active':''" @click="changeWL(index)">WL{{index}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row" v-for="mobType in mobTypes" :key="mobType">
                <div>
                    <div class="head row">
                        <h2 class="enemies-title">{{ mobType }}</h2>
                    </div>
                    <div class="enemies row">
                        <div class="col-lg-4 col-md-6 col-sm-12" v-for="mob in mobs[mobType]" :key="mob.id">
                            <div class="monster-card">
                                <img class="monster-image" :src="apiLink + mob.image"
                                     :alt="mob.name">
                                <div class="monster-card-control">
                                    <div class="monster-name">{{mob.name}}</div>
                                    <input class="monster-amount-input" v-model="mobAmounts['mob'+mob.id]" type="number"
                                           placeholder="0" min="0"/>
                                    <button class="monster-handbook-button" @click="fillFromHandbook(mob.id)">Fill
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row result">
                <div class="process">
                    <button class="main-button" v-on:click="doCalc()"><span>Calculate!</span></button>
                </div>
                <section class="counter">
                    <div class="content">
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <div class="count-item decoration-bottom">
                                    <strong>{{results.experience}}</strong>
                                    <span>XP</span>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div class="count-item decoration-top">
                                    <div v-if="Object.keys(rewardItems).length === 0">
                                        <strong>0</strong>
                                        <span>Items</span>
                                    </div>
                                    <div v-if="Object.keys(rewardItems).length > 0">
                                        <div class="reward-items">
                                            <div v-for="item in rewardItems" :key="item.id">
                                                <div class="reward-item" v-if="item && item.amount > 0">
                                                    <b-tooltip :class="'rarity-' + item.rarity" :label="item.name" position="is-bottom">
                                                        <img class="reward-item-image" :src="apiLink + item.image"
                                                             :alt="item.name"/>
                                                    </b-tooltip>
                                                    <div class="reward-item-count">x{{item.amount}}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="item-name">Items</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div class="count-item decoration-top">
                                    <strong>{{results.mora}}</strong>
                                    <span>Mora</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "CharExp",
        data: function () {
            return {
                currentWL: 7,
                experienceTable: {},
                dropsTable: {},
                unfilteredMobs: [],
                mobsById: {},
                mobs: {},
                mobTypes: [],
                mobAmounts: {},
                results: {experience: 0, mora: 0},
                rewardItems: {},
                apiLink: process.env.VUE_APP_API
            }
        },
        async created() {
            await this.getMobs()
        },
        methods: {
            fillFromHandbook(mobId) {
                this.mobAmounts["mob" + mobId] = this.mobsById["mob" + mobId].handbookAmount;
                this.doCalc();
            },
            async getMobs() {
                const res = await fetch(this.apiLink + "/exp-calc/mobs");
                this.unfilteredMobs = await res.json();
                for (let i = 0; i < this.unfilteredMobs.length; i++) {
                    if (!this.mobs[this.unfilteredMobs[i].typeLong]) this.mobs[this.unfilteredMobs[i].typeLong] = [];
                    let currentMob = this.unfilteredMobs[i];
                    this.mobs[currentMob.typeLong].push(currentMob);
                    this.mobsById["mob" + currentMob.id] = currentMob;
                }
                this.mobTypes = Object.keys(this.mobs)
            },
            async doCalc() {
                let WL = this.currentWL;
                let currentExpInfo = null;
                if (!(currentExpInfo = this.experienceTable["WL" + this.currentWL])) {
                    let res = await fetch(this.apiLink + "/exp-calc/calculator?wl=" + WL);
                    currentExpInfo = await res.json();
                    this.experienceTable["WL" + WL] = currentExpInfo
                }
                let enemiesTotal = {};
                for (let i = 0; i < this.unfilteredMobs.length; i++) {
                    let mobId = this.unfilteredMobs[i].id;
                    let mobType = this.unfilteredMobs[i].type;
                    if (!enemiesTotal[mobType]) enemiesTotal[mobType] = 0;
                    enemiesTotal[mobType] += Number.parseInt(this.mobAmounts["mob" + mobId]) || 0;
                }

                this.results.experience = 0;
                this.results.mora = 0;
                for (let mobType in enemiesTotal) {
                    this.results.experience += enemiesTotal[mobType] * currentExpInfo.enemies[mobType].expectedXp;
                    this.results.mora += enemiesTotal[mobType] * currentExpInfo.enemies[mobType].expectedMora;
                }
                this.calcMobDrops(WL);
            },
            async calcMobDrops(wl) {
                let drops = {};
                let currentDropsInfo = null;
                if (!(currentDropsInfo = this.dropsTable["WL" + wl])) {
                    let res = await fetch(this.apiLink + "/exp-calc/drops?wl=" + wl);
                    currentDropsInfo = await res.json();
                    this.dropsTable["WL" + wl] = currentDropsInfo;
                }

                if (!this.rewardItems || Object.keys(this.rewardItems).length === 0) {
                    let res = await fetch(this.apiLink + "/exp-calc/items");
                    let items = await res.json();
                    for (let key in items) {
                        let item = items[key];
                        this.rewardItems["item" + item.id] = item;
                    }
                }
                drops = this.rewardItems;

                this.resetDropAmounts(drops);

                for (let i = 0; i < this.unfilteredMobs.length; i++) {
                    let mobId = this.unfilteredMobs[i].id;
                    let droppedItems = currentDropsInfo["mob" + mobId].items;
                    for (let key in droppedItems) {
                        let droppedItem = droppedItems[key];
                        let amountToBeAdded = Number.parseInt(this.mobAmounts["mob" + mobId]) || 0;
                        drops["item" + droppedItem.id].amount += droppedItem.chance * amountToBeAdded;
                    }
                }

                Vue.set(this.rewardItems, 0, drops);
            },
            resetDropAmounts(drops) {
                for (let key in drops) {
                    drops[key].amount = 0;
                }
            },
            changeWL(wl) {
                this.currentWL = wl;
            }
        }
    }
</script>

<style>
    .result {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .result .process {
        margin-bottom: 25px;
    }

    .result .show {
        padding: 20px 0px;
        border-top: 1px #ccc solid;
        width: 100%;
    }

    .result .show .center-text p {
        margin-bottom: 0;
    }

    .result .show .center-text {
        margin-bottom: 15px;
    }

    ul li {
        display: inline;
    }

    .monster-image {
        height: 100px;
        width: 100px;
        margin-bottom: 5px;
        border-radius: 50%;
    }

    .monster-amount-input {
        width: 60px;
        margin-right: 5px;
    }

    .advent-rank-wrap {
        width: 100%;
    }

    .enemies-title {
        padding-left: 20px;
        letter-spacing: 1px;
        font-size: 15px;
        color: #777;
        margin-bottom: 10px;
    }

    .advent-rank-wrap ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .advent-rank-wrap ul li a {
        color: #95c74a;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        padding: 5px 25px;
        border-radius: 20px;
        border: 2px #95c74a solid;
        cursor: pointer;
        margin-right: 10px;
        margin-top: 15px;
        transition: all 0.3s ease;
    }

    .advent-rank-wrap ul li a.active {
        color: white;
        background-color: #95c74a;
        padding: 5px 35px;
    }

    .monster-card {
        /*width: 300px;*/
        display: flex;
        background: #fff;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
        margin-bottom: 30px;
        position: relative;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        text-align: center;
    }

    .monster-card:before {
        content: '';
        position: absolute;
        z-index: -1;
        background: #fff;
        width: 100%;
        opacity: .15;
        height: 100%;
        bottom: -10px;
        left: 0px;
        right: -20px;
        margin: auto;
        border-radius: 20px;
    }

    .monster-card .monster-name {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .monster-card .monster-card-control {
        flex: 3;
        display: flex;
        flex-direction: column;
        padding: 0 15px;
    }

    .monster-card .monster-card-control button {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 12px;
        background: rgba(91, 170, 246, 0);
        border: 1px rgb(91, 170, 246) solid;
        border-radius: 20px;
        padding: 3px 15px;
        color: rgb(91, 170, 246);
        transition: all 0.3s ease;
        margin-top: auto;
    }

    .monster-card .monster-card-control button:hover {
        background: rgba(91, 170, 246, 1);
        color: #fff;
    }

    .monster-card .monster-card-control input {
        color: #777;
        font-size: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        border: 1px solid #eee;
        width: 100%;
        height: 50px;
        outline: none;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 25px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin-bottom: 10px;
    }

    .monster-card span {
        display: block;
        font-weight: 400;
        font-size: 14px;
        color: #777;
        letter-spacing: .75px;
    }

    .monster-card strong {
        display: block;
        font-weight: 400;
        font-size: 17px;
        color: #1e1e1e;
        letter-spacing: 0.25px;
        margin-bottom: 5px;
        margin-top: 20px;
    }

    @media (max-width: 992px) {
        .advent-rank-wrap ul li {
            font-size: 16px;
            line-height: 2.5;
        }
    }

    .b-tooltip.is-primary .tooltip-content {
        background: #5baaf6;
    }

    .b-tooltip.is-bottom.is-primary .tooltip-content::before {
        border-bottom-color: #5baaf6;
    }

    .counter {
        overflow: hidden;
        position: relative;
        margin-left: -20%;
        margin-right: -20%;
    }

    .counter:before {
        content: '';
        position: absolute;
        width: 140%;
        height: 140%;
        opacity: .90;
        background: #fff;
        z-index: 2;
        top: -20%;
        left: -20%;
    }

    .counter .content {
        position: relative;
        z-index: 3;
        width: 100%;
    }

    .counter .content .count-item {
        min-height: 200px;
        position: relative;
        float: left;
        width: 100%;
    }

    .counter .content .count-item.decoration-bottom {
        position: relative;
    }

    /*.counter .content .count-item.decoration-bottom:after {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    width: 70%;*/
    /*    height: 32px;*/
    /*    top: 50px;*/
    /*    left: 70%;*/
    /*    background: url(../assets/images/circle-dec.png) center center no-repeat;*/
    /*    -webkit-transition: all 0.3s ease 0s;*/
    /*    -moz-transition: all 0.3s ease 0s;*/
    /*    -o-transition: all 0.3s ease 0s;*/
    /*    transition: all 0.3s ease 0s;*/
    /*}*/

    .counter .content .count-item.decoration-top {
        position: relative;
    }

    /*.counter .content .count-item.decoration-top:after {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    width: 70%;*/
    /*    height: 32px;*/
    /*    top: 50px;*/
    /*    left: 70%;*/
    /*    background: url(../assets/images/circle-dec.png) center center no-repeat;*/
    /*    -webkit-transition: all 0.3s ease 0s;*/
    /*    -moz-transition: all 0.3s ease 0s;*/
    /*    -o-transition: all 0.3s ease 0s;*/
    /*    transition: all 0.3s ease 0s;*/
    /*}*/

    .counter .content .count-item strong {
        display: block;
        text-align: center;
        font-weight: 600;
        font-size: 36px;
        letter-spacing: 0.25px;
        margin-bottom: 10px;
        color: #1e1e1e;
        margin-top: 50px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .reward-items {
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        flex-flow: wrap;
    }

    .reward-item {
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .reward-item-image {
        border-radius: 50%;
        background-size: contain;
        height: 40px;
        width: 40px;
    }

    .rarity-1 .reward-item-image {
        background-image: url("../assets/images/rarity-1.png");
    }

    .rarity-2 .reward-item-image {
        background-image: url("../assets/images/rarity-2.png");
    }

    .rarity-3 .reward-item-image {
        background-image: url("../assets/images/rarity-3.png");
    }

    .rarity-4 .reward-item-image {
        background-image: url("../assets/images/rarity-4.png");
    }

    .reward-item-count {
        margin-left: -10px;
        border: 1px #ccc solid;
        z-index: -1;
        padding: 5px 20px;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
    }

    .counter .content .count-item span {
        display: block;
        text-align: center;
        color: #777;
        font-weight: 500;
        font-size: 17px;
        letter-spacing: 0.25px;
    }

    .counter .content .count-item span.item-name {
        margin-bottom: 50px;
    }

    @media (max-width: 991px) {
        .counter {
            padding-top: 60px;
            padding-bottom: 60px;
        }

        .counter .content {
            position: relative !important;
            top: 0% !important;
            transform: perspective(1px) translateY(0%) !important;
        }

        .counter .content .count-item {
            height: auto;
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .counter .content .count-item:hover strong {
            margin-top: 0px;
        }

        .counter .content .count-item:before {
            display: none;
        }

        .counter .content .count-item:after {
            display: none;
        }

        .counter .content .count-item strong {
            margin-top: 0px;
        }
    }
</style>
