<template>
  <section id="contact" class="section is-white">
    <div class="container">
      <div class="content has-text-centered">
        <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Contact</h1>

        <h2 class="subtitle is-size-5-desktop">
          Do you have an idea or simply want to chat?
          I'd love to hear from you.
        </h2>
        <br>
      </div>

      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <form
            accept-charset="UTF-8"
            method="POST"
          >
            <div class="columns is-multiline is-centered">
              <div class="column is-half">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control is-expanded">
                    <input
                      class="input is-large"
                      name="name"
                      type="text"
                      required=""
                    >
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="field">
                  <label class="label">Email</label>

                  <div class="control is-expanded">
                    <input
                      class="input is-large"
                      name="email"
                      type="email"
                      required=""
                    >
                  </div>
                </div>
              </div>

              <div class="column is-full">
                <div class="field">
                  <label class="label">Message</label>

                  <div class="control is-expanded">
                    <textarea
                      class="textarea is-large"
                      name="message"
                      rows="5"
                      required=""
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="column is-one-third">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-medium is-rounded">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

