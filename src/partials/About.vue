<template>
  <section
    id="about"
    class="section is-white"
  >
    <div class="container">
      <div class="content is-long-ish has-text-centered">
        <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">About</h1>

        <h2 class="subtitle is-size-5-desktop has-text-grey">Get know me</h2>
      </div>
      <br>

      <div class="columns is-multiline">
        <div
          v-for="(about, i) in abouts"
          :key="i"
          :class="about.column || 'column'"
        >
          <h1 class="title is-size-4 is-spaced">{{about.name}}</h1>

          <p>{{about.description}}</p><br>

          <ul>
            <li
              v-for="(skill, j) in about.skills"
              :key="j"
            >
              <div v-if="!!skill.content">
                <strong>{{skill.name}}:</strong><br>
                <span>{{skill.content}}</span>
              </div>

              <div v-if="!!skill.progress">
                <strong class="is-uppercase">
                  {{skill.name}} ({{skill.progress}}%)
                </strong>

                <progress
                  class="progress is-small is-primary"
                  :value="skill.progress"
                  max="100"
                >{{skill.progress}}%</progress>
              </div>

              <br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    abouts: Array
  }
}
</script>
