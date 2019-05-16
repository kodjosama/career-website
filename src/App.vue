<template>
  <div
    id="app"
    class="has-navbar-fixed-top"
  >
    <navbar></navbar>

    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Jostino</h1>

              <h2 class="subtitle is-size-5-desktop">Designer, Front-end Developer</h2>

              <img
                class="avatar"
                src="http://mattfarley.ca/img/mf-avatar.svg"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <about></about>

    <work-experience></work-experience>

    <realise-project></realise-project>

    <div class="hr">
      <div class="container">
        <hr>
      </div>
    </div>

    <testimonial></testimonial>

    <div class="hr">
      <div class="container">
        <hr>
      </div>
    </div>

    <contact></contact>

    <!-- <section class="section about is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Hi, I’m Jostino. Nice to meet you.</h1>

            <h2 class="subtitle is-size-5-desktop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat a, doloribus dignissimos corporis culpa placeat deleniti nulla laudantium excepturi explicabo fugit cupiditate, unde consectetur asperiores, voluptates sint nesciunt maiores facilis!</h2>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="section skills is-white has-border-top">
      <div class="container">
        <h1 class="title is-spaced">
          Skills
        </h1>

        <div class="columns is-centered">
          <skill-category
            v-for="skillCategory in skillCategories"
            :key="skillCategory.id"
            v-bind="skillCategory"
          ></skill-category>
        </div>
      </div>
    </section> -->

    <!-- <section class="section skills">
      <div class="container is-narrow">
        <h1 class="title is-spaced">Skills</h1>

        <div class="box">
          <div class="content has-text-centered">
            <div class="columns is-centered">
              <skill-category
                v-for="skillCategory in skillCategories"
                :key="skillCategory.id"
                v-bind="skillCategory"
              ></skill-category>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <footerbar></footerbar>
  </div>
</template>

<script>
import Navbar from '@/partials/Navbar'
import About from '@/partials/About'
import WorkExperience from '@/partials/WorkExperience'
import RealiseProject from '@/partials/RealiseProject'
import Testimonial from '@/partials/Testimonial'
import Contact from '@/partials/Contact'
import Footerbar from '@/partials/Footerbar'

export default {
  name: 'app',
  components: { Navbar, About, WorkExperience, RealiseProject, Contact, Testimonial, Footerbar },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "@/sass/main.scss";
</style>
