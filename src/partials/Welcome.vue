<template>
  <section class="hero is-medium is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column">
            <h2 class="subtitle">Hi</h2>
            <h1 class="title is-1">I'm {{fullname}}</h1>
            <h2 class="subtitle is-2">A {{title}}</h2>

            <img
              class="avatar"
              :src="avatar || 'http://mattfarley.ca/img/mf-avatar.svg'"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    fullname: String,
    title: String,
    avatar: String,
  }
}
</script>

