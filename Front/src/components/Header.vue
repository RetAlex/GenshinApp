<template>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <a href="#" class="logo">
                            <img src="../assets/images/logo.svg" alt="Genshin"/>
                        </a>
                        <ul class="nav" :style="{display: mobileMenu ? 'block' : 'none'}">
                            <li><a><router-link to="/">Calculator</router-link></a></li>
                            <li><a><router-link to="/routes">Farming Routes</router-link></a></li>
                            <li><a><router-link to="/changelog">Changelog</router-link></a></li>
                            <li><a><router-link to="/roadmap">Roadmap</router-link></a></li>
                            <li><a><router-link to="/about-us">About Us</router-link></a></li>
                        </ul>
                        <a class='menu-trigger' :class="{ 'active' : mobileMenu }" @click.prevent="toggle">
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            mobileMenu: false
        }),
        methods: {
            toggle() {
                this.mobileMenu = !this.mobileMenu
            }
        },
        mounted() {
            if (!localStorage.wl) localStorage.wl = 7;
        }
    }
</script>

<style scoped>
    .header-area {
        position: relative;
        z-index: 1000;
        top: 30px;
        left: 0px;
        right: 0px;
        height: 100px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .header-area .main-nav {
        box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
        border-radius: 40px;
        min-height: 80px;
        background: #fff;
    }

    .header-area .main-nav .logo {
        float: left;
        margin-top: 37px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        margin-left: 30px;
    }

    .header-area .main-nav .logo img {
        height: auto;
        width: 80px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    .header-area .main-nav .nav {
        float: right;
        margin-top: 27px;
        margin-left: 0px;
        margin-right: 30px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        position: relative;
        z-index: 999;
    }

    .header-area .main-nav .nav li {
        padding-left: 20px;
        padding-right: 20px;
    }

    .header-area .main-nav .nav li:last-child {
        padding-right: 0px;
    }

    .header-area .main-nav .nav li a {
        display: block;
        font-weight: 500;
        font-size: 13px;
        color: #fff;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        height: 40px;
        line-height: 40px;
        border: transparent;
        letter-spacing: 1px;
    }

    .header-area .main-nav .nav li a:hover {
        color: #5baaf6;
    }

    .header-area .main-nav .menu-trigger {
        cursor: pointer;
        display: block;
        position: absolute;
        top: 23px;
        width: 32px;
        height: 40px;
        text-indent: -9999em;
        z-index: 99;
        right: 40px;
        display: none;
    }

    .header-area .main-nav .menu-trigger span,
    .header-area .main-nav .menu-trigger span:before,
    .header-area .main-nav .menu-trigger span:after {
        -moz-transition: all 0.4s;
        -o-transition: all 0.4s;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        background-color: #3B566E;
        display: block;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 0;
    }

    .header-area .main-nav .menu-trigger span:before,
    .header-area .main-nav .menu-trigger span:after {
        -moz-transition: all 0.4s;
        -o-transition: all 0.4s;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        background-color: #3B566E;
        display: block;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 0;
        width: 75%;
    }

    .header-area .main-nav .menu-trigger span:before,
    .header-area .main-nav .menu-trigger span:after {
        content: "";
    }

    .header-area .main-nav .menu-trigger span {
        top: 16px;
    }

    .header-area .main-nav .menu-trigger span:before {
        -moz-transform-origin: 33% 100%;
        -ms-transform-origin: 33% 100%;
        -webkit-transform-origin: 33% 100%;
        transform-origin: 33% 100%;
        top: -10px;
        z-index: 10;
    }

    .header-area .main-nav .menu-trigger span:after {
        -moz-transform-origin: 33% 0;
        -ms-transform-origin: 33% 0;
        -webkit-transform-origin: 33% 0;
        transform-origin: 33% 0;
        top: 10px;
    }

    .header-area .main-nav .menu-trigger.active span,
    .header-area .main-nav .menu-trigger.active span:before,
    .header-area .main-nav .menu-trigger.active span:after {
        background-color: transparent;
        width: 100%;
    }

    .header-area .main-nav .menu-trigger.active span:before {
        -moz-transform: translateY(6px) translateX(1px) rotate(45deg);
        -ms-transform: translateY(6px) translateX(1px) rotate(45deg);
        -webkit-transform: translateY(6px) translateX(1px) rotate(45deg);
        transform: translateY(6px) translateX(1px) rotate(45deg);
        background-color: #3B566E;
    }

    .header-area .main-nav .menu-trigger.active span:after {
        -moz-transform: translateY(-6px) translateX(1px) rotate(-45deg);
        -ms-transform: translateY(-6px) translateX(1px) rotate(-45deg);
        -webkit-transform: translateY(-6px) translateX(1px) rotate(-45deg);
        transform: translateY(-6px) translateX(1px) rotate(-45deg);
        background-color: #3B566E;
    }

    .header-area.header-sticky {
        min-height: 80px;
    }

    .header-area.header-sticky .logo {
        margin-top: 25px;
    }

    .header-area.header-sticky .nav {
        margin-top: 20px !important;
    }

    .header-area.header-sticky .nav li a {
        color: #1e1e1e;
    }

    .header-area.header-sticky .nav li a.active {
        color: #5baaf6;
    }

    @media (max-width: 1200px) {
        .header-area .main-nav .nav li {
            padding-left: 12px;
            padding-right: 12px;
        }
        .header-area .main-nav:before {
            display: none;
        }
    }

    @media (max-width: 991px) {
        .header-area {
            padding: 0px 15px;
            height: 80px;
            box-shadow: none;
            text-align: center;
        }
        .header-area .container {
            padding: 0px;
        }
        .header-area .logo {
            margin-top: 27px !important;
            margin-left: 30px;
        }
        .header-area .menu-trigger {
            display: block !important;
        }
        .header-area .main-nav {
            overflow: hidden;
        }
        .header-area .main-nav .nav {
            float: none;
            width: 100%;
            margin-top: 80px !important;
            display: none;
            -webkit-transition: all 0s ease 0s;
            -moz-transition: all 0s ease 0s;
            -o-transition: all 0s ease 0s;
            transition: all 0s ease 0s;
            margin-left: 0px;
        }
        .header-area .main-nav .nav li:first-child {
            border-top: 1px solid #eee;
        }
        .header-area .main-nav .nav li {
            width: 100%;
            background: #fff;
            border-bottom: 1px solid #eee;
            padding-left: 0px !important;
            padding-right: 0px !important;
        }
        .header-area .main-nav .nav li a {
            height: 50px !important;
            line-height: 50px !important;
            padding: 0px !important;
            border: none !important;
            background: #fff !important;
            color: #3B566E !important;
        }
        .header-area .main-nav .nav li a:hover {
            background: #eee !important;
        }
    }

    @media (min-width: 992px) {
        .header-area .main-nav .nav {
            display: flex !important;
        }
    }
</style>
