<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="center-heading">
                    <h2 class="section-title">Roadmap</h2>
                </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
                <div class="center-text">
                    <p>Here you can find out what will be in the next versions of the application</p>
                </div>
            </div>
        </div>
        <div class="timeline">
            <div class="timeline-container done" v-for="milestone of roadmap" :key="milestone.version">
                <div class="timeline-icon">
                    <i class="fa fa-undo"></i>
                </div>
                <div class="timeline-body">
                    <h4 class="timeline-title"><span class="badge">{{milestone.version}}</span></h4>
                    <p>{{milestone.desc}}</p>
                    <p class="timeline-subtitle">In development</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Roadmap",
        data() {
            return {
                roadmap: [
                    {"version": "1.6", "desc": "Custom route feature development"},
                    {"version": "1.7", "desc": "Route export feature (in URL)"},
                    {"version": "1.8", "desc": "Route export feature (in files)"},
                    {"version": "1.9", "desc": "Google drive integration to persist custom routes"},
                    {"version": "2.0", "desc": "Catching up with all the updates (map, mobs, routes, drop tables etc)"}
                ]
            }
        }
    }
</script>

<style scoped>

    .container {
        max-width: 650px;
        margin: 50px auto;
    }

    p {
        font-weight: 300;
        line-height: 1.5;
        font-size: 14px;
        opacity: 0.8;
    }

    .timeline {
        position: relative;
        padding-left: 4rem;
        margin: 0 0 0 30px;
        color: #1e1e1e;
    }
    .timeline:before {
        content: "";
        position: absolute;
        left: 0;
        top: 4px;
        width: 4px;
        height: 100%;
        background: #fff;
    }
    .timeline .timeline-container {
        position: relative;
        margin-bottom: 2.5rem;
    }
    .timeline .timeline-container .timeline-icon {
        position: absolute;
        left: -88px;
        top: 4px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        font-size: 2rem;
        color: #fff;
        background: #4f537b;
    }
    .timeline .timeline-container .timeline-icon i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .timeline .timeline-container .timeline-icon img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .timeline .timeline-container .timeline-body {
        background: #fff;
        border-radius: 15px;
        padding: 20px 20px 15px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    }
    .timeline .timeline-container .timeline-body:before {
        content: "";
        background: inherit;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        left: -10px;
        transform: rotate(45deg);
        border-radius: 0 0 0 2px;
    }
    .timeline .timeline-container .timeline-body .timeline-title {
        margin-bottom: 1.4rem;
        color: #fff;
    }
    .timeline .timeline-container .timeline-body .timeline-title .badge {
        background: #4f537b;
        padding: 4px 8px;
        border-radius: 3px;
        font-size: 12px;
        font-weight: bold;
    }
    .timeline .timeline-container .timeline-body .timeline-subtitle {
        font-weight: 300;
        font-style: italic;
        opacity: 0.4;
        margin-top: 16px;
        font-size: 11px;
    }
    .timeline .timeline-container.done .badge,
    .timeline .timeline-container.done .timeline-icon {
        background: rgba(91, 170, 246, 1) !important;
    }
    .timeline .timeline-container.doing .badge,
    .timeline .timeline-container.doing .timeline-icon {
        background: rgba(253, 205, 229, 1) !important;
    }

    .author {
        font-family: inherit;
        padding: 3em;
        text-align: center;
        width: 100%;
        color: white;
    }
    .author a:link,
    .author a:visited {
        color: white;
    }
    .author a:link:hover,
    .author a:visited:hover {
        text-decoration: none;
    }
    .author .btn:link,
    .author .btn:visited {
        margin-top: 1em;
        text-decoration: none;
        display: inline-block;
        font-family: inherit;
        font-weight: 100;
        color: white;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: black;
        padding: 1.5em 2rem;
        border-radius: 1em;
        transition: 0.5s all;
    }
    .author .btn:link:hover, .author .btn:link:focus, .author .btn:link:active,
    .author .btn:visited:hover,
    .author .btn:visited:focus,
    .author .btn:visited:active {
        background-color: #1a1a1a;
    }
</style>
