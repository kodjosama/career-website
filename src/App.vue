<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
      <div class="hero-head">
        <navbar></navbar>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Jostino</h1>

              <h2 class="subtitle is-size-4-desktop">Designer, Front-end Developer</h2>

              <img
                class="avatar"
                src="http://mattfarley.ca/img/mf-avatar.svg"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Jostino. Nice to meet you.</h1>

            <h2 class="subtitle is-size-5-desktop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat a, doloribus dignissimos corporis culpa placeat deleniti nulla laudantium excepturi explicabo fugit cupiditate, unde consectetur asperiores, voluptates sint nesciunt maiores facilis!</h2>
          </div>
        </div>
      </div>
    </section>

    <footerbar></footerbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footerbar from '@/components/Footerbar';

export default {
  name: 'app',
  components: { Navbar, Footerbar }
}
</script>

<style lang="scss">
@import "@/sass/main.scss";
</style>
