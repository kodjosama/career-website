<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Handcrafted with
        <span class="icon has-text-danger">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </span>by kodjosama. Copyright
        <font-awesome-icon :icon="['far', 'copyright']" />
        {{ new Date().getFullYear() }}. <br> Made with
        <a
          target="_blank"
          class="has-test-grey-dark"
          href="https://bulma.io"
        >
          <b>Bulma</b>
        </a> and

        <a
          target="_blank"
          class="has-test-grey-dark"
          href="https://vuejs.org"
        >
          <b>Vue.js</b>
        </a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
