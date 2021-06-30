<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'App',
        components: {
            Footer,
            Header
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900");

    /*
    ---------------------------------------------
    reset
    ---------------------------------------------
    */
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, div
    pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q,
    s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    figure, header, nav, section, article, aside, footer, figcaption {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }

    .clearfix:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
    }

    .clearfix {
        display: inline-block;
    }

    html[xmlns] .clearfix {
        display: block;
    }

    * html .clearfix {
        height: 1%;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    header, nav, section, article, aside, footer, hgroup {
        display: block;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        background-color: #fff;
        font-size: 16px;
        -ms-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none !important;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ul {
        margin-bottom: 0px;
    }

    /*
    ---------------------------------------------
    global styles
    ---------------------------------------------
    */
    html,
    body {
        background: #f2f2fe !important;
        font-family: "Raleway", sans-serif;
    }

    ::selection {
        background: #5baaf6;
        color: #fff;
    }

    ::-moz-selection {
        background: #5baaf6;
        color: #fff;
    }

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .section {
        position: relative;
        padding-top: 100px;
        padding-bottom: 80px;
    }

    .section.colored {
        background: #f2f2fe;
    }

    .hr {
        bottom: 0px;
        width: 100%;
        height: 1px;
        margin-top: 100px;
        border-bottom: 1px solid #eee;
    }

    .left-heading.light .section-title {
        color: #ffffff;
    }

    .left-heading .section-title {
        font-weight: 500;
        font-size: 24px;
        line-height: 42px;
        color: #1e1e1e;
        letter-spacing: 0.25px;
        margin-bottom: 30px;
        position: relative;
    }

    .center-heading {
        text-align: center;
    }

    .center-heading .section-title {
        font-weight: 500;
        font-size: 28px;
        color: #1e1e1e;
        letter-spacing: 1.75px;
        line-height: 38px;
        margin-bottom: 20px;
    }

    .center-heading.colored .section-title {
        color: #ffffff;
    }

    .center-text {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        color: #777;
        line-height: 28px;
        letter-spacing: 1px;
        margin-bottom: 50px;
    }

    .center-text.colored {
        color: #fff;
    }

    .center-text p {
        font-size: 15px;
        color: #777;
        margin-bottom: 30px;
    }

    .left-text {
        font-weight: 400;
        font-size: 16px;
        color: #777;
        line-height: 28px;
        letter-spacing: 1px;
    }

    .left-text.light {
        color: #fff;
    }

    .left-text p {
        margin-bottom: 30px;
    }

    .left-text p.dark {
        color: #3B566E;
    }

    .padding-bottom-top-60 {
        padding-top: 60px !important;
        padding-bottom: 60px !important;
    }

    .padding-bottom-80 {
        padding-bottom: 80px !important;
    }

    .padding-bottom-100 {
        padding-bottom: 100px !important;
    }

    .border-bottom {
        border-bottom: 1px solid #eee !important;
    }

    .mbottom-30 {
        margin-bottom: 30px !important;
    }

    .align-self-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }

    .align-self-bottom {
        -ms-flex-item-align: flex-end !important;
        align-self: flex-end !important;
    }

    .padding-bottom-0 {
        padding-bottom: 0px !important;
    }

    .padding-top-0 {
        padding-top: 0px !important;
    }

    .padding-top-80 {
        padding-top: 80px !important;
    }

    .padding-top-70 {
        padding-top: 70px !important;
    }

    .padding-top-20 {
        padding-top: 20px !important;
    }

    .margin-bottom-0 {
        margin-bottom: 0px !important;
    }

    .margin-bottom-30 {
        margin-bottom: 30px !important;
    }

    .margin-top-30 {
        margin-top: 30px !important;
    }

    .margin-top-15 {
        margin-top: 15px !important;
    }

    .margin-bottom-45 {
        margin-bottom: 45px !important;
    }

    .margin-bottom-20 {
        margin-bottom: 20px !important;
    }

    .margin-bottom-60 {
        margin-bottom: 60px !important;
    }

    .margin-bottom-100 {
        margin-bottom: 100px !important;
    }

    @media (max-width: 991px) {
        html, body {
            overflow-x: hidden;
        }

        .mobile-top-fix {
            margin-top: 30px;
            margin-bottom: 0px;
        }

        .mobile-bottom-fix {
            margin-bottom: 30px;
        }

        .mobile-bottom-fix-big {
            margin-bottom: 60px;
        }
    }

    a.main-button-slider, button.main-button {
        position: relative;
        font-size: 20px;
        font-weight: bold;
        border-radius: 50px;
        padding: 15px 25px;
        background: rgb(253, 205, 229);
        background: -moz-linear-gradient(35deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        background: -webkit-linear-gradient(35deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        background: linear-gradient(35deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fdcde5", endColorstr="#5baaf6", GradientType=1);
        text-transform: uppercase;
        color: #363636;
        letter-spacing: 2px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        z-index: 1;
    }

    a.main-button-slider span, button.main-button span {
      position: relative;
      z-index: 10;
    }

    a.main-button-slider:before, button.main-button:before {
        content: "";
        position: absolute;
        border-radius: 50px;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        background: -moz-linear-gradient(225deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        background: -webkit-linear-gradient(225deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        background: linear-gradient(225deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        transition: 0.5s;
        opacity: 0;
    }

    a.main-button-slider:hover, button.main-button:hover {
        transform: scale(1.05);
        color: #363636;
    }

    a.main-button-slider:hover::before, button.main-button:hover::before {
        opacity: 1;
    }

    button.main-button {
        font-size: 14px;
        border: none;
    }

    a.main-button {
        font-size: 13px;
        border-radius: 20px;
        padding: 12px 20px;
        background-color: #8261ee;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 0.25px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    a.main-button:hover {
        background-color: #5baaf6;
    }

    .rarity-1 .reward-item-image,  .rarity-1 .drop-icon {
        background: rgb(133,134,138);
        background: -moz-linear-gradient(175deg, rgba(133,134,138,1) 0%, rgba(176,174,172,1) 100%);
        background: -webkit-linear-gradient(175deg, rgba(133,134,138,1) 0%, rgba(176,174,172,1) 100%);
        background: linear-gradient(175deg, rgba(133,134,138,1) 0%, rgba(176,174,172,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#85868a",endColorstr="#b0aeac",GradientType=1);
    }

    .rarity-2 .reward-item-image,  .rarity-2 .drop-icon {
        background: rgb(111,137,134);
        background: -moz-linear-gradient(175deg, rgba(111,137,134,1) 0%, rgba(126,185,157,1) 100%);
        background: -webkit-linear-gradient(175deg, rgba(111,137,134,1) 0%, rgba(126,185,157,1) 100%);
        background: linear-gradient(175deg, rgba(111,137,134,1) 0%, rgba(126,185,157,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6f8986",endColorstr="#7eb99d",GradientType=1);
    }

    .rarity-3 .reward-item-image,  .rarity-3 .drop-icon {
        background: rgb(124,138,167);
        background: -moz-linear-gradient(175deg, rgba(124,138,167,1) 0%, rgba(127,184,215,1) 100%);
        background: -webkit-linear-gradient(175deg, rgba(124,138,167,1) 0%, rgba(127,184,215,1) 100%);
        background: linear-gradient(175deg, rgba(124,138,167,1) 0%, rgba(127,184,215,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7c8aa7",endColorstr="#7fb8d7",GradientType=1);
    }

    .rarity-4 .reward-item-image,  .rarity-4 .drop-icon {
        background: rgb(123,117,161);
        background: -moz-linear-gradient(175deg, rgba(123,117,161,1) 0%, rgba(167,142,209,1) 100%);
        background: -webkit-linear-gradient(175deg, rgba(123,117,161,1) 0%, rgba(167,142,209,1) 100%);
        background: linear-gradient(175deg, rgba(123,117,161,1) 0%, rgba(167,142,209,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7b75a1",endColorstr="#a78ed1",GradientType=1);
    }

    .rarity-5 .reward-item-image,  .rarity-5 .drop-icon {
        background: rgb(168,125,87);
        background: -moz-linear-gradient(175deg, rgba(168,125,87,1) 0%, rgba(223,166,103,1) 100%);
        background: -webkit-linear-gradient(175deg, rgba(168,125,87,1) 0%, rgba(223,166,103,1) 100%);
        background: linear-gradient(175deg, rgba(168,125,87,1) 0%, rgba(223,166,103,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a87d57",endColorstr="#dfa667",GradientType=1);
    }

    .modal-background {
        background-color: rgba(256, 256, 256, 0.36) !important;
    }
</style>
