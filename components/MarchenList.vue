<template>
  <div class="container">
    <h1>Diese sind die Märchen von H2D</h1>
    <ul>
      <li v-for="marchen in marchen" v-bind:key="marchen.name">
        <router-link v-bind:to="'/marchen/' + marchen.id">{{
          marchen.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  mounted() {
    axios.get("/marchen.json").then(({ data }) => (this.marchen = data));
  },
  data: function() {
    return {
      marchen: {}
    };
  }
};
</script>
