<template>
  <section
    id="contact"
    class="section is-white"
  >
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

                  <div class="control has-icons-left is-expanded">
                    <span class="icon is-small is-left">
                      <font-awesome-icon :icon="['fas', 'user']" />
                    </span>

                    <input
                      class="input"
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

                  <div class="control has-icons-left is-expanded">
                    <span class="icon is-small is-left">
                      <font-awesome-icon :icon="['far', 'envelope']" />
                    </span>

                    <input
                      class="input"
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
                      class="textarea"
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
                    <button class="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <br>

        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-two-thirds has-text-centered">
          <h5 class="is-size-5">Or</h5> <br>

          <h1 class="title">Let's get social</h1>

          <div class="social-icons">
            <p class="field">
              <a
                href="#"
                class="button is-medium is-black"
              >
                <span class="icon is-small">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </span>
              </a>

              <a
                href="#"
                class="button is-medium is-black"
              >
                <span class="icon is-small">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </span>
              </a>

              <a
                href="#"
                class="button is-medium is-black"
              >
                <span class="icon is-small">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
#contact .social-icons a.button {
  border-radius: 100%;
  margin: 0 0.8rem;
  height: 47px;
  width: 47px;
}

#contact .social-icons a.button:hover {
  background: #fff;
  color: #8c43ff;
  border: 2px solid #8c43ff;
}

#contact .social-icons a.button .icon.is-small {
  height: 1.4em;
  width: 1.4em;
}
</style>


