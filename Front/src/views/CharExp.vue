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
                      <li><button class="inactive">WL0</button></li>
                      <li><button class="inactive">WL1</button></li>
                      <li><button class="inactive">WL2</button></li>
                      <li><button class="inactive">WL3</button></li>
                      <li><button class="inactive">WL4</button></li>
                      <li><button class="inactive">WL5</button></li>
                      <li><button class="active">WL6</button></li>
                      <li><button class="active">WL7</button></li>
                    </ul>
                </div>
              </div>
              <div class="row" v-for="mobType in mobTypes" :key="mobType">
                <div>
                  <div class="head row">
                    <h1>{{ mobType }}</h1>
                  </div>
                  <div class="enemies row">
                    <div class="monster-card" v-for="mob in mobs[mobType]" :key="mob.id">
                      <img class="monster-image" :src="mob.image" :alt="mob.name">
                      <div>{{mob.name}}</div>
                      <div class="monster-card-control">
                        <input class="monster-amount-input" type="number" placeholder="0"/>
                        <button class="monster-handbook-button">Fill</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row result">
                <div>
                  <div class="process">
                    <button>Calculate!</button>
                  </div>
                  <div class="show">
                    <div>Your total experience: 0 xp</div>
                    <div>Your total mora: 0 mora</div>
                  </div>
                </div>
              </div>
            </div>
    </section>
</template>

<script>
    export default {
      name: "CharExp",
      data: function () {
          return {
            mobs: {},
            mobTypes: []
          }
      },
      async created(){
        await this.getMobs()
      },
      methods: {
          async getMobs(){
            const res = await fetch("http://localhost:8080/exp-calc/mobs");
            let unfilteredMobs = await res.json();
            for(let i=0; i<unfilteredMobs.length; i++){
              if(!this.mobs[unfilteredMobs[i].type]) this.mobs[unfilteredMobs[i].type]=[];
              this.mobs[unfilteredMobs[i].type].push(unfilteredMobs[i]);
            }
            this.mobTypes = Object.keys(this.mobs)
          }
      }
    }
</script>

<style>
  .result{
    margin-top: 30px;
  }
  ul li{
    display: inline;
  }
  .monster-image{
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
  .monster-amount-input{
    width: 60px;
    margin-right: 5px;
  }
  .monster-handbook-button {
    width: 35px;
  }
  .monster-card {
    margin-right: 10px;
  }
    /*.advent-rank-wrap {*/
    /*    width: 100%;*/
    /*}*/

    /*.advent-rank-wrap ul {*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    flex-wrap: wrap;*/
    /*}*/

    /*.advent-rank-wrap ul li{*/
    /*    color: #95c74a;*/
    /*    text-align: center;*/
    /*    font-weight: bold;*/
    /*    font-size: 20px;*/
    /*    padding: 5px 25px;*/
    /*    border-radius: 20px;*/
    /*    border: 2px #95c74a solid;*/
    /*    cursor: pointer;*/
    /*    margin-right: 10px;*/
    /*    margin-top: 15px;*/
    /*    transition: all 0.3s ease;*/
    /*}*/

    /*.advent-rank-wrap ul li.active{*/
    /*    color: white;*/
    /*    background-color: #95c74a;*/
    /*    padding: 5px 35px;*/
    /*}*/

    /*.monster-card {*/
    /*    display: flex;*/
    /*    background: #fff;*/
    /*    padding: 20px;*/
    /*    border-radius: 20px;*/
    /*    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);*/
    /*    margin-bottom: 30px;*/
    /*    position: relative;*/
    /*    -webkit-transition: all 0.3s ease 0s;*/
    /*    -moz-transition: all 0.3s ease 0s;*/
    /*    -o-transition: all 0.3s ease 0s;*/
    /*    transition: all 0.3s ease 0s;*/
    /*    text-align: center;*/
    /*}*/

    /*.monster-card:hover {*/
    /*    margin-top: -10px;*/
    /*}*/

    /*.monster-card:before {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    z-index: -1;*/
    /*    background: #fff;*/
    /*    width: 100%;*/
    /*    opacity: .15;*/
    /*    height: 100%;*/
    /*    bottom: -10px;*/
    /*    left: 0px;*/
    /*    right: -20px;*/
    /*    margin: auto;*/
    /*    border-radius: 20px;*/
    /*}*/

    /*.monster-card .monster-card-img {*/
    /*    flex: 1;*/
    /*    margin-right: 15px;*/
    /*    display: block;*/
    /*    background-image: url('../assets/images/monster.png');*/
    /*    background-size: contain;*/
    /*    height: 90px;*/
    /*    width: 90px;*/
    /*    border-radius: 50%;*/
    /*}*/

    /*.monster-card .monster-card-control {*/
    /*    flex: 3;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: space-between;*/
    /*}*/

    /*.monster-card .monster-card-control button {*/
    /*    text-transform: uppercase;*/
    /*    letter-spacing: 2px;*/
    /*    font-size: 12px;*/
    /*    background: rgba(91, 170, 246, 0);*/
    /*    border: 1px rgb(91, 170, 246) solid;*/
    /*    border-radius: 20px;*/
    /*    padding: 3px 15px;*/
    /*    color: rgb(91, 170, 246);*/
    /*    transition: all 0.3s ease;*/
    /*}*/

    /*.monster-card .monster-card-control button:hover {*/
    /*    background: rgba(91, 170, 246, 1);*/
    /*    color: #fff;*/
    /*}*/

    /*.monster-card .monster-card-control input {*/
    /*    color: #777;*/
    /*    font-size: 14px;*/
    /*    letter-spacing: 2px;*/
    /*    text-transform: uppercase;*/
    /*    border: 1px solid #eee;*/
    /*    width: 100%;*/
    /*    height: 50px;*/
    /*    outline: none;*/
    /*    padding-left: 20px;*/
    /*    padding-right: 20px;*/
    /*    border-radius: 25px;*/
    /*    -webkit-appearance: none;*/
    /*    -moz-appearance: none;*/
    /*    appearance: none;*/
    /*}*/

    /*.monster-card span {*/
    /*    display: block;*/
    /*    font-weight: 400;*/
    /*    font-size: 14px;*/
    /*    color: #777;*/
    /*    letter-spacing: .75px;*/
    /*}*/

    /*.monster-card strong {*/
    /*    display: block;*/
    /*    font-weight: 400;*/
    /*    font-size: 17px;*/
    /*    color: #1e1e1e;*/
    /*    letter-spacing: 0.25px;*/
    /*    margin-bottom: 5px;*/
    /*    margin-top: 20px;*/
    /*}*/

    /*@media (max-width: 992px) {*/
    /*    .advent-rank-wrap ul li{*/
    /*        font-size: 16px;*/
    /*    }*/
    /*}*/
</style>
