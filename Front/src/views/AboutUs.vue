<template>
        <section class="section colored" id="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="center-heading">
                            <h2 class="section-title">About us</h2>
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-10">
                        <div class="center-text">
                            <p>We are a group of volunteers who are working on different utility features for Genshin impact. Web application is open-sourced and anyone can contribute to make the site even better! Source code is available here: <a href="https://github.com/RetAlex/GenshinApp">https://github.com/RetAlex/GenshinApp</a></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                      <h4 class="section-title">Contact points</h4>
                  </div>
                  <div class="col-lg-12">
                      <div>Main contact point:
                        <ul>
                          <li><a href="https://github.com/RetAlex"><i class="fa fa-github"></i>RetAlex</a></li>
                          <li><a href="https://discord.com/users/656622764534530058"><i class="fab fa-discord"></i>Oleskii#5426</a></li>
                          <li>[In-game UID: 706886715]</li>
                        </ul>
                      </div>
                      <div>
                        Special thanks to contributors:
                        <ul>
                          <li><a href="https://github.com/juliapodpruhina"><i class="fa fa-github"></i>Julia Podpruhina</a>[In-game UID: xxx]</li>
                        </ul>
                      </div>
                  </div>
                </div>
<!--                <div class="row">-->
<!--                    <div class="col-lg-4 col-md-6 col-sm-12">-->
<!--                        <h5 class="margin-bottom-30">Keep in touch</h5>-->
<!--                        <div class="contact-text">-->
<!--                            <p>Tell us about your ideas</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-8 col-md-6 col-sm-12">-->
<!--                        <div class="contact-form">-->
<!--                            <form id="contact" action="" method="get">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-lg-6 col-md-12 col-sm-12">-->
<!--                                        <fieldset>-->
<!--                                            <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">-->
<!--                                        </fieldset>-->
<!--                                    </div>-->
<!--                                    <div class="col-lg-6 col-md-12 col-sm-12">-->
<!--                                        <fieldset>-->
<!--                                            <input name="email" type="email" class="form-control" id="email" placeholder="E-Mail Address" required="">-->
<!--                                        </fieldset>-->
<!--                                    </div>-->
<!--                                    <div class="col-lg-12">-->
<!--                                        <fieldset>-->
<!--                                            <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>-->
<!--                                        </fieldset>-->
<!--                                    </div>-->
<!--                                    <div class="col-lg-12">-->
<!--                                        <fieldset>-->
<!--                                            <button type="submit" id="form-submit" class="main-button"><span>Send Message</span></button>-->
<!--                                        </fieldset>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </form>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </section>

</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
    #about-us {
        padding: 160px 0px;
    }

    #about-us h5 {
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
