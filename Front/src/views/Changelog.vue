<template>
    <section class="section" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Changelog</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>This page contains all the latest updates of an application. The updates are posted as soon as they are available for users.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12" v-for="change in changeLog" :key="change">
                    <div class="change-item">
                        <div class="change-content">
                            <ul>
                                <li v-for="changeDescription in change.changes" :key="changeDescription"><p>- {{ changeDescription }}</p></li>
                            </ul>
                            <div class="user-image">
                                <img src="../assets/images/version.svg" alt="">
                            </div>
                            <div class="change-info">
                                <h3 class="user-name"><a :href="change.link" target="_blank">{{ change.version }}</a></h3>
                                <a>{{ change.date }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Changelog",
        data(){
          return {
            changeLog: [
              {version: "Version 1.2 (Current)", changes: ["Added the new DROPS feature for exp calculator!", "Now you can calculate the approximate amount of materials gain from the mob farming along with mora and EXP", "Minor bug fixes and UI improvements", "Added loot table for all the hostiles in WL 7, other WLs are coming shortly."], date: '31 March 2021', link: 'https://github.com/RetAlex/GenshinApp/pull/26'},
              {version: "Version 1.1", changes: ["Changed the DNS name of the website to make the access esier.", "Changed cloud provider to increase uptime and stability.", "Added WL1-6 experience and mora data and optimized calculations in experience calculator.", "Modified the design and responsiveness of most web pages."], date: '4 Feb 2021', link: 'https://github.com/RetAlex/GenshinApp/pull/21'},
              {version: "Version 1.0", changes: ["The site was created.", "Initial version of XP farm calculator was added.", "CI/CD process configured for faster and better development cycles.", "Informational pages were filled with current info."], date: '4 Jan 2021', link: 'https://github.com/RetAlex/GenshinApp/pull/11'}
            ]
          }
        }
    }
</script>

<style scoped>
    .change-item {
        background: #fff;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.10);
        border-radius: 20px;
        position: relative;
        margin-bottom: 30px;
        padding-bottom: 25px;
    }

    .change-item:hover .change-content .change-info {
        margin-left: 30px;
    }

    .change-item i {
        display: block;
        margin-left: 25px;
        margin-top: 25px;
        font-size: 30px;
        color: #4E47DE;
        text-align: center;
    }

    .change-item .user-image {
        width: 60px;
        height: 60px;
        overflow: hidden;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        margin-left: 25px;
        float: left;
    }

    .change-item .change-content {
        text-align: left;
        overflow: hidden;
    }

    .change-item .change-content .change-info {
        float: left;
        margin-left: 20px;
        margin-top: 2px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .change-item .change-content .change-info h3 a{
        color: #1e1e1e;
        transition: all 0.3s ease 0s;
    }

    .change-item .change-content .change-info h3 a:hover{
        color: #5baaf6;
    }

    .change-item .change-content .change-info .user-name {
        display: block;
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 0.25px;
        margin-bottom: 5px;
    }

    .change-item .change-content .change-info span {
        display: block;
        font-weight: 400;
        font-size: 15px;
        color: #5baaf6;
        letter-spacing: 0.25px;
    }

    .change-item .change-content p {
        margin-top: 25px;
        padding-left: 25px;
        padding-right: 25px;
        margin-bottom: 25px;
        font-weight: 400;
        font-size: 15px;
        color: #777;
        letter-spacing: 0.6px;
        line-height: 26px;
    }
</style>
