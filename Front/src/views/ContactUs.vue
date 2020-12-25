<template>
        <section class="section colored" id="contact-us">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="center-heading">
                            <h2 class="section-title">Talk To Us</h2>
                        </div>
                    </div>
                    <div class="offset-lg-3 col-lg-6">
                        <div class="center-text">
                            <p>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <h5 class="margin-bottom-30">Keep in touch</h5>
                        <div class="contact-text">
                            <p>Tell us about your ideas</p>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-12">
                        <div class="contact-form">
                            <form id="contact" action="" method="get">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input name="email" type="email" class="form-control" id="email" placeholder="E-Mail Address" required="">
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-button"><span>Send Message</span></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
    export default {
        name: "ContactUs"
    }
</script>

<style scoped>
    #contact-us {
        padding: 160px 0px;
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
</style>
