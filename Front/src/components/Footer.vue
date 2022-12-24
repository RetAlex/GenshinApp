<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <ul class="social">
                        <li><a @click="isFeedbackModalActive = true"><i class="fa fa-envelope"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p class="copyright">>Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.</p>
                </div>
                <b-modal v-model="isFeedbackModalActive" has-modal-card trap-focus aria-role="dialog" aria-label="Feedback" aria-modal>
                    <template #default="props">
                        <feedback @close="props.close"></feedback>
                    </template>
                </b-modal>
            </div>
        </div>
    </footer>
</template>

<script>
    import Feedback from "@/components/Feedback";
    export default {
        name: "Footer",
        components: {Feedback},
        data() {
            return {
                isFeedbackModalActive: false
            }
        }
    }
</script>

<style scoped>
    footer {
        background-image: linear-gradient(127deg, rgba(253, 205, 229, 1) 0%, rgba(91, 170, 246, 1) 100%);
        padding-top: 30px;
        margin-top: auto;
    }

    footer .social {
        overflow: hidden;
        margin-top: 10px;
        text-align: center;
    }

    footer .social li {
        margin: 0px 10px;
        display: inline-block;
    }

    footer .social li a {
        color: rgba(91, 170, 246, 1);
        text-align: center;
        background-color: #fff;
        width: 36px;
        height: 36px;
        line-height: 36px;
        border-radius: 50%;
        display: inline-block;
        font-size: 16px;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    footer .social li a:hover {
        background-color: rgba(91, 170, 246, 1);
        color: #fff;
    }

    footer .copyright {
        text-align: center;
        border-top: 1px solid rgba(250,250,250,0.2);
        margin-top: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-weight: 400;
        font-size: 12px;
        color: #fff;
        letter-spacing: 0.88px;
        text-transform: uppercase;
    }

    footer .copyright span {
        display: block;
    }

    @media (max-width: 991px) {
        footer .text {
            margin-bottom: 30px;
        }
        footer h5 {
            margin-bottom: 15px;
        }
        footer .footer-nav {
            margin-bottom: 30px;
        }
    }
</style>
