<template>
  <div>
    <!--Header-->
    <div class="header bg-gradient-info pt-8 pb-7">
      <b-container>
        <div class="header-body">
          <b-row align-v="center">
            <b-col lg="6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">
                  Manage social media, automatically.
                </h1>
                <h2 class="display-4 text-white font-weight-light">
                  Phone Verification, 4G LTE proxies and automation tools.
                </h2>
                <p class="text-white mt-4"></p>
                <div class="mt-5">
                  <router-link to="/dashboard" class="btn btn-neutral my-2"
                    >Explore Services</router-link
                  >
                  <router-link to="/register" class="btn btn-primary my-2">
                    <i class="fad fa-rocket"></i> Get Started
                  </router-link>
                </div>
              </div>
            </b-col>
            <b-col lg="6">
              <b-row class="pt-5">
                <img alt="Loading" src="img/brand/animat-chat-color.gif" />
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
            n
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <section class="py-6 pb-9 bg-default">
      <b-row class="justify-content-center text-center">
        <b-col md="6">
          <h2 class="display-3 text-white">
            Social Media Managment <a class="text-info">Solution</a>
          </h2>
          <p class="lead text-white">
            Chief Socials provides social media management services such as SMS
            Phone Verification, 4G LTE Mobile Proxies and Social Media
            automation tools.
          </p>
        </b-col>
      </b-row>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="12">
            <b-row>
              <b-col lg="4">
                <b-card no-body class="card-lift--hover shadow border-0">
                  <b-card-body class="py-5">
                    <div
                      class="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4"
                    >
                      <i class="fad fa-comment-check"></i>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">
                      Phone Verification (SMS PVA)
                    </h4>
                    <p class="description mt-3">
                      Large pools containing 1000s of numbers ready to receive
                      SMS verification codes for TikTok, Instagram, Nike and
                      more.
                    </p>
                    <div>
                      <b-badge pill variant="primary">10+ countries</b-badge>
                      <b-badge pill variant="primary">1000+ services</b-badge>
                      <b-badge pill variant="primary">great pricing</b-badge>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col lg="4">
                <b-card no-body class="card-lift--hover shadow border-0">
                  <b-card-body class="py-5">
                    <div
                      class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4"
                    >
                      <i class="fad fa-router"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">
                      Mobile Proxies
                    </h4>
                    <p class="description mt-3">
                      4G proxy connections assigned from a mobile carrier to a
                      real-user with carrier and ASN targeting.
                    </p>
                    <div>
                      <b-badge pill variant="success">150mbs</b-badge>
                      <b-badge pill variant="success">Shoe Websites</b-badge>
                      <b-badge pill variant="success">unblock websites</b-badge>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col lg="4">
                <b-card no-body class="card-lift--hover shadow border-0">
                  <b-card-body class="py-5">
                    <div
                      class="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4"
                    >
                      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                    </div>
                    <h4 class="h3 text-warning text-uppercase">
                      Automation Tools
                    </h4>
                    <p class="description mt-3">
                      Tools designed to automate your management of social media
                      accounts. Automation tools for TikTok and Instagram!
                    </p>
                    <div>
                      <b-badge pill variant="warning">TikTok</b-badge>
                      <b-badge pill variant="warning">Instagram</b-badge>
                      <b-badge pill variant="warning">Nike</b-badge>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6" class="order-md-2">
            <b-img src="img/brand/text_alerts.svg" fluid />
          </b-col>
          <b-col md="6" class="order-md-1">
            <div class="pr-md-5">
              <h1>Phone Verification</h1>
              <p>
                Chief Socials is the leading provider for SMS Phone
                Verification. We have 1000s of mobile numbers ready to be used
                for account authenticaiton and 2FA services
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <b-badge pill variant="success" class="badge-circle mr-3">
                        <i class="fal fa-phone-plus"></i>
                      </b-badge>
                    </div>
                    <div>
                      <h4 class="mb-0">All Social Media Websites</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <b-badge pill variant="success" class="badge-circle mr-3">
                        <i class="fal fa-sack-dollar"></i>
                      </b-badge>
                    </div>
                    <div>
                      <h4 class="mb-0">From €0.03 per verification</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <b-badge pill variant="success" class="badge-circle mr-3">
                        <i class="fal fa-globe-americas"></i>
                      </b-badge>
                    </div>
                    <div>
                      <h4 class="mb-0">
                        Numbers from USA, UK, China, Russia, China and more
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6">
            <b-img src="img/brand/animat-cloudsync-color.gif" fluid />
          </b-col>
          <b-col md="6">
            <div class="pr-md-5">
              <h1>Mobile Proxies</h1>
              <p>
                Eradicate account blocks and bottlenecks in social media
                management by utilising our 4G/LTE mobile proxies. Access shoe
                sites (Nike) and other sites that easily block normal proxies
              </p>
              <router-link
                to="/pages/user"
                class="font-weight-bold text-warning mt-5"
                >Learn more</router-link
              >
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6" class="order-md-2">
            <b-img src="img/brand/animat-network-color.gif" fluid />
          </b-col>
          <b-col md="6" class="col-md-6">
            <div class="pr-md-5">
              <h1>Automation Tools</h1>
              <p>
                Automatically manage Instagram and TikTok accounts using our
                automation tools! We also have tools to test proxies, format
                accounts, fetch emails and more.
              </p>
              <router-link to="/widgets" class="font-weight-bold text-info mt-5"
                >Learn more
              </router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-7 section-nucleo-icons bg-white overflow-hidden">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="8" class="text-center">
            <h2 class="display-3">Nucleo Icons</h2>
            <p class="lead">
              The official package contains over 21.000 icons which are looking
              great in combination with Argon Design System. Make sure you check
              all of them and use those that you like the most.
            </p>
            <div class="btn-wrapper">
              <a
                href="https://www.creative-tim.com/learning-lab/bootstrap-vue/icons/argon-dashboard"
                class="btn btn-primary"
                >View demo icons</a
              >
              <a
                href="https://nucleoapp.com/?ref=1712"
                target="_blank"
                class="btn btn-default mt-3 mt-md-0"
                >View all icons</a
              >
            </div>
          </b-col>
        </b-row>
        <div class="blur--hover">
          <a
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/icons/argon-dashboard"
          >
            <div class="icons-container blur-item mt-5">
              <!-- Center -->
              <i class="icon ni ni-diamond"></i>
              <!-- Right 1 -->
              <i class="icon icon-sm ni ni-album-2"></i>
              <i class="icon icon-sm ni ni-app"></i>
              <i class="icon icon-sm ni ni-atom"></i>
              <!-- Right 2 -->
              <i class="icon ni ni-bag-17"></i>
              <i class="icon ni ni-bell-55"></i>
              <i class="icon ni ni-credit-card"></i>
              <!-- Left 1 -->
              <i class="icon icon-sm ni ni-briefcase-24"></i>
              <i class="icon icon-sm ni ni-building"></i>
              <i class="icon icon-sm ni ni-button-play"></i>
              <!-- Left 2 -->
              <i class="icon ni ni-calendar-grid-58"></i>
              <i class="icon ni ni-camera-compact"></i>
              <i class="icon ni ni-chart-bar-32"></i>
            </div>
            <span class="blur-hidden h5 text-success"
              >Eplore all the 21.000+ Nucleo Icons</span
            >
          </a>
        </div>
      </b-container>
    </section>
    <section class="py-7">
      <b-container>
        <b-row class="row-grid justify-content-center">
          <b-col lg="8" class="text-center">
            <h2 class="display-3">
              Do you love this awesome
              <span class="text-success">Dashboard for BootstrapVue ?</span>
            </h2>
            <p class="lead">
              Cause if you do, it can be yours now. Hit the button below to
              navigate to get the free version or purchase a license for your
              next project. Build a new web app or give an old BootstrapVue
              project a new look!
            </p>
            <div class="btn-wrapper">
              <base-button
                type="neutral"
                disabled
                href="javascript:void(0)"
                aria-pressed="true"
                target="_blank"
                ><span class="btn-inner--text"
                  >Get FREE version</span
                ></base-button
              >
              <a
                href="https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro?ref=bvadp-index-page"
                class="btn btn-success btn-icon mb-3 mb-sm-0"
              >
                <span class="btn-inner--icon"
                  ><i class="ni ni-basket"></i
                ></span>
                <span class="btn-inner--text">Purchase now</span>
                <b-badge
                  size="md"
                  pill
                  variant="danger"
                  class="badge-floating border-white"
                  >$89</b-badge
                >
              </a>
            </div>
            <div class="text-center">
              <h4 class="display-4 mb-5 mt-5">
                Available on these technologies
              </h4>
              <b-row class="justify-content-center">
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="Bootstrap 4 - Most popular front-end component library"
                  >
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=bvadp-index-page"
                      target="_blank"
                    >
                      <b-img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                        fluid
                        rounded="circle"
                        class="shadow shadow-lg--hover"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="BootstrapVue - Most popular front-end component library for Vue.js"
                  >
                    <a
                      href="https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro?ref=vadp-index-page"
                      target="_blank"
                    >
                      <b-img
                        src="https://test.creative-tim.com/assets/icon-bootstrap-vue-f224def7158bbb9ed0e8436fd745d8cf6002ff00f3f65184282c4258958e598c.jpg"
                        fluid
                        rounded="circle"
                        class="shadow shadow-lg--hover"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="Vue.js - The progressive javascript framework"
                  >
                    <a
                      href="https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=bvadp-index-page"
                      target="_blank"
                    >
                      <b-img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                        fluid
                        rounded="circle"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="Sketch - Digital design toolkit"
                  >
                    <a
                      href="https://www.sketchapp.com/"
                      rel="noffolow"
                      target="_blank"
                    >
                      <b-img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                        fluid
                        rounded="circle"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="[Coming Soon] Adobe Photoshop - Software for digital images manipulation"
                  >
                    <a
                      href="https://www.adobe.com/products/photoshop.html"
                      rel="noffolow"
                      target="_blank"
                    >
                      <b-img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                        fluid
                        rounded="circle"
                        class="opacity-3"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="Angular - One framework. Mobile "
                  >
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=bvadp-index-page"
                      target="_blank"
                    >
                      <b-img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                        fluid
                        rounded="circle"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip
                    placement="top"
                    content="React - A JavaScript library for building user interfaces"
                  >
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=bvadp-index-page"
                      target="_blank"
                    >
                      <b-img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        fluid
                        rounded="circle"
                      />
                    </a>
                  </el-tooltip>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import { Tooltip } from "element-ui";
export default {
  name: "home-page",
  components: {
    [Tooltip.name]: Tooltip
  }
};
</script>
