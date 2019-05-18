<template>
  <section
    id="work-experience"
    class="hero is-light"
  >
    <div class="hero-body">
      <div class="container">
        <div class="content has-text-centered">
          <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Work Experiences</h1>
        </div>
        <br>

        <div class="timeline is-centered">
          <div
            v-for="(experience, i) in experiences"
            :key="i"
            class="timeline-item"
          >
            <div :class="experience.marker"></div>

            <div class="timeline-content">
              <p class="heading">{{experience.duration}}</p>

              <p
                class="title is-6"
                v-html="experience.post"
              ></p>

              <p v-html="experience.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    experiences: Array
  }
}
</script>

