<template>
  <section
    id="testimonial"
    class="section is-white"
  >
    <div class="container has-text-centered">
      <div class="content">
        <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Testimonials</h1>

        <h2 class="subtitle is-size-5-desktop">People I've worked with have said some nice things...</h2>
      </div>
      <br>

      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <div class="columns is-multiline">
            <div
              v-for="(testimonial, i) in testimonials"
              :key="i"
              class="column is-half"
            >
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="testimonial.avatar || 'http://mattfarley.ca/img/avatars/pascal.png'">
                      </figure>
                    </div>

                    <div class="media-content">
                      <p
                        v-html="testimonial.name"
                        class="title is-7"
                      ></p>
                      <p
                        v-html="testimonial.post"
                        class="subtitle is-10"
                      ></p>
                    </div>
                  </div>

                  <div
                    v-html="testimonial.description"
                    class="content is-size-7"
                  ></div>
                </div>
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
    testimonials: Array
  }
}
</script>
