<template>
  <nav
    class="navbar is-fixed-top is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-uppercase has-text-weight-bold">
          Jostino Website
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
            id="about"
            class="navbar-item is-active"
          >
            About
          </a>

          <a
            href="#work-experience"
            class="navbar-item"
          >
            Work Experiences
          </a>

          <a
            href="#realise-project"
            class="navbar-item"
          >
            Realised Projects
          </a>

          <a
            href="#testimonial"
            class="navbar-item"
          >
            Testimonials
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
export default {}
</script>
