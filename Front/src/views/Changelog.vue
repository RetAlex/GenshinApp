<template>
  <section class="section" id="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="center-heading">
            <h2 class="section-title">Changelog</h2>
          </div>
        </div>
        <div class="offset-lg-3 col-lg-6">
          <div class="center-text">
            <p>This page contains all the latest updates of an application. The updates are posted as soon
              as they are available for users.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="change in changeLog" :key="change">
          <div class="change-item">
            <div class="change-content">
              <ul>
                <li v-for="changeDescription in change.changes" :key="changeDescription"><p>- {{
                    changeDescription
                  }}</p></li>
              </ul>
              <div class="user-image">
                <img src="../assets/images/version.svg" alt="">
              </div>
              <div class="change-info">
                <h3 class="user-name"><a :href="change.link" target="_blank">{{ change.version }}</a>
                </h3>
                <a>{{ change.date }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Changelog",
  data() {
    return {
      changeLog: [
        {
          version: "Version 2.6 (Current release)",
          changes: ["Added chasm map and interest points to match the recent version of the application", "Added new monsters and drops from the recent game update", "Added new filters for weapons and characters (now caught up with every single character and epic+ weapon released!)"],
          date: '15 Aoril 2022',
          link: 'https://github.com/RetAlex/GenshinApp/releases/tag/2.6'
        },
        {
          version: "Version 2.5",
          changes: ["Preparations are done for custom routes! Soon, you will be able to create your own routes and share them with friends!", "Add custom marker feature was added as a part of custom route preparations. Click any place on the map to add custom marker.", "Some bugfixes and improvements."],
          date: '14 March 2022',
          link: 'https://github.com/RetAlex/GenshinApp/releases/tag/2.5'
        },
        {
          version: "Version 2.4",
          changes: ["Enkanomiya map was added", "List of Enkanomiya routes was added and updated", "Fixed some bugs and enhancements"],
          date: '15 February 2022',
          link: 'https://github.com/RetAlex/GenshinApp/releases/tag/2.4'
        },
        {
          version: "Version 2.3",
          changes: ["'Filter by weapon/character' feature was updated with new characters and weapons", "New mob 'Bathysmal Vishap' was added to the calculator mob list", "Added new characters, mobs and weapons with appropriate images", "Fixed some bugs and enhancements"],
          date: '15 January 2022',
          link: 'https://github.com/RetAlex/GenshinApp/releases/tag/2.3'
        },
        {
          version: "Version 2.2",
          changes: ["Added new 'Filter by weapon/character' feature.", "The feature allows you to choose weapons/characters in order to filter routes only for required materials", "Added all the characters and weapons with appropriate images", "Fixed some bugs and enhancements"],
          date: '15 December 2021',
          link: 'https://github.com/RetAlex/GenshinApp/releases/tag/2.2'
        },
        {
          version: "Version 2.1",
          changes: ["Updated map with latest Inazuma regions", "Added multiple Mondstadt routes", "Created tools to assist route creation (currently only for internal use)", "Additional bugfixes & performance enhancements"],
          date: '15 November 2021',
          link: 'https://github.com/RetAlex/GenshinApp/releases/tag/2.1.1'
        },
        {
          version: "Version 2.0.1",
          changes: ["Updated map format to be easier to handle", "Modified drop values and images for Inazuma mobs", "Added new Watatsumi & Seirai islands", "Improvements to drop calculations"],
          date: '5 October 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/71'
        },
        {
          version: "Version 2.0",
          changes: ["Huge changes to the map for farming routes!", "Now you can change different regions on the map for better coherence", "Inazuma was added to the map", "Multiple farm routes for samurais were added", "Better loading time and zoom levels for the map", "Loot table were refreshed and appended with new inazuma enemies"],
          date: '1 September 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/68'
        },
        {
          version: "Version 1.5",
          changes: ["Multiple enhancements to UX/UI", "Minor changes to Liuye routes based on feedback", "Custom routes feature in progress, no alpha yet"],
          date: '1 August 2021',
          link: ''
        },
        {
          version: "Version 1.4",
          changes: ["Map performance drastically improved with better management of zoom levels", "Added 2 new routes for more Ruin guards and Treasure hoarders farming", "Added roadmap page", "Added feedback feature on `About us` page, now you can leave feedback to make the site better together!", "Small enhancements to UI/UX"],
          date: '30 June 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/51'
        },
        {
          version: "Version 1.3",
          changes: ["Farming routes is now available to all users!", "Additional UI/UX enhancements", "Mob calculator now will not display `0` items drops", "Added 2 routes for Liuye", "Tilemap usage is being investigated to enhance loading time, expect the feature in 1.4/1.5"],
          date: '31 May 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/37'
        },
        {
          version: "Version 1.3 (BETA)",
          changes: ["Added map feature with mock farm routes", "Moved experience calculation to backend for better reuse", "Bugfixes and optimisations", "Added automated tests for better QA", "Added interactive teleports and domains for Mondstadt", "Added animations for farming routes and the mock route for display purposes"],
          date: '29 Apr 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/30'
        },
        {
          version: "Version 1.2",
          changes: ["Added the new DROPS feature for exp calculator!", "Now you can calculate the approximate amount of materials gain from the mob farming along with mora and EXP", "Minor bug fixes and UI improvements", "Added loot table for all the hostiles in WL 7, other WLs are coming shortly."],
          date: '31 March 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/26'
        },
        {
          version: "Version 1.1",
          changes: ["Changed the DNS name of the website to make the access esier.", "Changed cloud provider to increase uptime and stability.", "Added WL1-6 experience and mora data and optimized calculations in experience calculator.", "Modified the design and responsiveness of most web pages."],
          date: '4 Feb 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/21'
        },
        {
          version: "Version 1.0",
          changes: ["The site was created.", "Initial version of XP farm calculator was added.", "CI/CD process configured for faster and better development cycles.", "Informational pages were filled with current info."],
          date: '4 Jan 2021',
          link: 'https://github.com/RetAlex/GenshinApp/pull/11'
        }
      ]
    }
  }
}
</script>

<style scoped>
.change-item {
  background: #fff;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.10);
  border-radius: 20px;
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 25px;
}

.change-item:hover .change-content .change-info {
  margin-left: 30px;
}

.change-item i {
  display: block;
  margin-left: 25px;
  margin-top: 25px;
  font-size: 30px;
  color: #4E47DE;
  text-align: center;
}

.change-item .user-image {
  width: 60px;
  height: 60px;
  overflow: hidden;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-left: 25px;
  float: left;
}

.change-item .change-content {
  text-align: left;
  overflow: hidden;
}

.change-item .change-content .change-info {
  float: left;
  margin-left: 20px;
  margin-top: 2px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.change-item .change-content .change-info h3 a {
  color: #1e1e1e;
  transition: all 0.3s ease 0s;
}

.change-item .change-content .change-info h3 a:hover {
  color: #5baaf6;
}

.change-item .change-content .change-info .user-name {
  display: block;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0.25px;
  margin-bottom: 5px;
}

.change-item .change-content .change-info span {
  display: block;
  font-weight: 400;
  font-size: 15px;
  color: #5baaf6;
  letter-spacing: 0.25px;
}

.change-item .change-content p {
  margin-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 15px;
  color: #777;
  letter-spacing: 0.6px;
  line-height: 26px;
}
</style>
