<template>
  <div
    id="app"
    class="has-navbar-fixed-top"
  >
    <navbar :fullname="fullname"></navbar>

    <welcome
      :fullname="fullname"
      :title="title"
    ></welcome>

    <about :abouts="abouts"></about>

    <work-experience :experiences="experiences"></work-experience>

    <realise-project :projects="projects"></realise-project>

    <div class="hr">
      <div class="container">
        <hr>
      </div>
    </div>

    <testimonial :testimonials="testimonials"></testimonial>

    <div class="hr">
      <div class="container">
        <hr>
      </div>
    </div>

    <contact></contact>

    <footerbar></footerbar>
  </div>
</template>

<script>
import Navbar from '@/partials/Navbar'
import Welcome from '@/partials/Welcome'
import About from '@/partials/About'
import WorkExperience from '@/partials/WorkExperience'
import RealiseProject from '@/partials/RealiseProject'
import Testimonial from '@/partials/Testimonial'
import Contact from '@/partials/Contact'
import Footerbar from '@/partials/Footerbar'
import sourceData from './data.json';

export default {
  name: 'app',
  components: {
    Navbar,
    Welcome,
    About,
    WorkExperience,
    RealiseProject,
    Contact,
    Testimonial,
    Footerbar
  },
  data () {
    return sourceData;
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('data', this.data);
  }
}
</script>

<style lang="scss">
@import "@/sass/main.scss";
</style>
