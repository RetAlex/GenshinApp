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
                        <p>We are a group of volunteers who are working on different utility team for Genshin
                            impact. Web application is open-sourced and anyone can contribute to make the site even
                            better! Source code is available here: <a href="https://github.com/RetAlex/GenshinApp">https://github.com/RetAlex/GenshinApp</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="team-small-item">
                                <div class="icon">
                                    <i><img src="../assets/images/team/cat.svg" alt=""></i>
                                </div>
                                <h5 class="team-title">RetAlex</h5>
                                <h6 class="team-subtitle">Main Contact Point</h6>
                                <ul>
                                    <li><a href="https://github.com/RetAlex" target="_blank"><i class="fa fa-github"></i><span>RetAlex</span></a>
                                    </li>
                                    <li><a href="https://discord.com/users/656622764534530058" target="_blank"><i
                                            class="fab fa-discord"></i><span>Oleskii#5426</span></a></li>
                                    <li>[In-game UID: 706886715]</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div class="team-small-item">
                                <div class="icon">
                                    <i><img src="../assets/images/team/unicorn.svg" alt=""></i>
                                </div>
                                <h5 class="team-title">Julia Podpruhina</h5>
                                <h6 class="team-subtitle">Contributor</h6>
                                <ul>
                                    <li><a href="https://github.com/juliapodpruhina" target="_blank"><i class="fa fa-github"></i><span>Julia Podpruhina</span></a>
                                    </li>
                                    <li><a href="https://discord.com/users/776519843373514784" target="_blank"><i
                                            class="fab fa-discord"></i><span>etre_libre#3913</span></a></li>
                                    <li>[In-game UID: 709400234]</li>
                                </ul>
                            </div>
                        </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-12"
                           data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                        <div class="team-small-item">
                          <div class="icon">
                            <i><img src="../assets/images/team/cake.svg" alt=""></i>
                          </div>
                          <h5 class="team-title">Seypy</h5>
                          <h6 class="team-subtitle">Contributor</h6>
                          <ul>
                            <li><a><i class="fa fa-github"></i><span>No github available</span></a>
                            <li><a href="https://discord.com/users/826856383018172450" target="_blank"><i
                                class="fab fa-discord"></i><span>seypy#7849</span></a></li>
                            <li>[In-game UID: 7019755118]</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
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
        font-weight: 700;
        font-size: 18px;
        color: #1e1e1e;
        letter-spacing: 0.25px;
        line-height: 26px;
    }

    .team-subtitle {
        font-weight: 300;
        margin-bottom: 25px;
    }

    .team-small-item {
        cursor: pointer;
        display: block;
        background: #FFFFFF;
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.10);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        position: relative;
        margin-bottom: 30px;
    }

    .team-small-item:hover .icon {
        background-color: rgba(91, 170, 246, 1);
    }

    .team-small-item .icon {
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        width: 90px;
        height: 90px;
        line-height: 90px;
        margin: auto;
        position: relative;
        margin-bottom: 30px;
        background: rgba(253, 205, 229, 1);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .team-small-item .icon i {
        font-size: 18px;
        color: #fff;
    }

    .team-small-item .icon i img {
        height: 150px;
    }

    .team-small-item .team-title {
        font-weight: 500;
        font-size: 18px;
        color: #1e1e1e;
        letter-spacing: 0.7px;
        position: relative;
        z-index: 2;
    }

    .team-small-item ul {
        font-weight: 400;
        font-size: 13px;
        color: #777;
        letter-spacing: 0.5px;
        line-height: 25px;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
    }

    .team-small-item ul li i::before {
        margin-right: 10px;
        font-size: 25px;
    }

    .team-small-item ul li a {
        color: rgba(91, 170, 246, 1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .team-small-item ul li a span {
        position: relative;
    }

    .team-small-item ul li a span:before {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        position: absolute;
        bottom: 0;
        transition: all 0.3s ease;
    }

    .team-small-item ul li a span:hover::before {
        border-bottom: rgba(91, 170, 246, 1) 1px dashed;
    }
</style>
