<template>
    <section class="section colored" id="contact-us">
        <div v-if="!submitted" class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h5 class="margin-bottom-30">Talk To Us</h5>
                    <div class="contact-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12">
                    <div class="contact-form">
                        <form id="contact" action="" method="get">
                            <div class="row">
                                <div class="col-lg-12">
                                    <b-field>
                                        <b-input placeholder="E-mail" v-model="feedback.contactEmail" rounded></b-input>
                                    </b-field>
                                </div>
                                <div class="col-lg-12">
                                    <b-field>
                                        <b-input rounded type="textarea" v-model="feedback.feedbackMessage" rows="6" minlength="10" placeholder="Your Message"></b-input>
                                    </b-field>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <button @click="sendFeedback()" id="form-submit" class="main-button">Send Message</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="submitted" class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Success!</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Thank you for your feedback :)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Feedback",
        data() {
            return {
                apiLink: process.env.VUE_APP_API,
                submitted: false,
                feedback: {contactEmail: '', feedbackMessage: ''}
            }
        },
        methods: {
            async sendFeedback() {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.feedback)
                };
                const res = await fetch(this.apiLink + "/sendFeedback", requestOptions);
                let success = await res.json();
                this.submitted = success.submitted;
                console.log(this.submitted)
            }
        }
    }
</script>

<style>
    #contact-us {
        box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.20);
        border-radius: 10px;
    }

    #contact-us h5 {
        font-weight: 500;
        font-size: 18px;
        color: #1e1e1e;
        letter-spacing: 0.25px;
        line-height: 26px;
    }

    .contact-text {
        font-weight: 400;
        font-size: 14px;
        color: #6F8BA4;
        letter-spacing: 0.6px;
        line-height: 26px;
    }

    .contact-text p {
        margin-bottom: 28px;
    }

    .contact-form input,
    .contact-form textarea {
        color: #777;
        font-size: 14px;
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
        margin-bottom: 30px;
    }

    .contact-form textarea {
        height: 150px;
        resize: none;
        padding: 20px;
    }

    .main-button::before {
        z-index: -1 !important;
    }

</style>
