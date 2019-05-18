<template>
  <nav
    class="navbar is-fixed-top is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-uppercase has-text-weight-bold">
          <img
            src="//images.ctfassets.net/suxlw3hovxfd/1lLAKQfJPeaYyEMSYugkq4/272f8c08ba4e1636e6c01f25676a3b92/favicon.png"
            alt="favicon"
            width="30"
            height="30"
          >
          <b>JK</b>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu-hero"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar-menu-hero"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <a
            href="#about"
            class="navbar-item"
          >
            A propos
          </a>

          <a
            href="#work-experience"
            class="navbar-item"
          >
            Experiences
          </a>

          <a
            href="#realise-project"
            class="navbar-item"
          >
            Projets
          </a>

          <a
            href="#testimonial"
            class="navbar-item"
          >
            Temoignages
          </a>

          <a
            href="#contact"
            class="navbar-item"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    fullname: String
  }
}
</script>
