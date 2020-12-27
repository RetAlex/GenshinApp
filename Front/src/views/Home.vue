<template>
    <div class="welcome-area" id="welcome">
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1>Genshin application</h1>
                      <p>Check out the new features available for any user completely for free. List of features will be updated as soon as new features are added so be sure to keep in touch with the latest updates in our <a><router-link to="/changelog">changelog</router-link></a> </p>
                        <router-link class="main-button-slider" to="/calc"><span>Character Expirience Calculator</span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .welcome-area {
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f2f2fe;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 100vh;
    }

    .welcome-area .header-text {
        position: absolute;
        top: 50%;
        transform: translateY(-55%);
        text-align: center;
        width: 100%;
    }

    .welcome-area .header-text h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 54px;
        letter-spacing: 1.4px;
        margin-bottom: 20px;
        color: #1e1e1e;
    }

    .welcome-area .header-text p {
        font-weight: 400;
        font-size: 15px;
        color: #777;
        line-height: 28px;
        letter-spacing: 0.25px;
        margin-bottom: 60px;
        position: relative;
    }

    @media (max-width: 991px) {
        .welcome-area .header-text {
            top: 65% !important;
            transform: perspective(1px) translateY(-60%) !important;
            text-align: center;
        }
        .welcome-area .header-text h1 {
            text-align: center;
            color: #363636;
            margin-bottom: 15px;
        }
        .welcome-area .header-text h1 span {
            color: #363636;
        }
        .welcome-area .header-text p {
            text-align: center;
            color: #363636;
            margin-bottom: 60px;
        }
    }

    @media (max-width: 820px) {
        .welcome-area .header-text {
            top: 65% !important;
            transform: perspective(1px) translateY(-60%) !important;
        }
        .welcome-area .header-text h1 {
            font-size: 22px;
            line-height: 30px;
            margin-bottom: 15px;
        }
        .welcome-area .header-text p {
            margin-bottom: 60px;
        }
    }

    @media (max-width: 765px) {
        .welcome-area {
            margin-bottom: 100px;
        }
        .welcome-area .header-text {
            top: 50% !important;
            transform: perspective(1px) translateY(-50%) !important;
            text-align: center;
        }
        .welcome-area .header-text .buttons {
            display: none;
        }
        .welcome-area .header-text h1 {
            font-weight: 600;
            font-size: 24px !important;
            line-height: 30px !important;
            margin-bottom: 30px !important;
        }
        .welcome-area .header-text h1 span {
            color: #fff;
        }
        .welcome-area .header-text p {
            text-align: center;
            color: #fff;
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 60px;
        }
    }
</style>
