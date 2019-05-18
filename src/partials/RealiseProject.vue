<template>
  <section
    id="realise-project"
    class="section is-white"
  >
    <div class="container">
      <div class="content has-text-centered">
        <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Realised Projects</h1>
      </div>
      <br>

      <div class="columns is-multiline">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="column is-one-third"
        >
          <div class="card">
            <div
              v-if="!!project.cover"
              class="card-image"
            >
              <figure class="image is-16by9">
                <img
                  :src="project.cover"
                  :alt="project.name"
                >
              </figure>
            </div>

            <div class="card-content">
              <div class="media">

                <div class="media-content">
                  <p
                    v-html="project.name"
                    class="title is-4"
                  ></p>
                </div>
              </div>

              <div
                v-html="project.description"
                class="content"
              >
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
  props: {
    projects: Array
  }
}
</script>
