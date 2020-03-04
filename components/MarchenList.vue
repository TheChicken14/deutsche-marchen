<template>
  <div class="container">
    <div class="marchen">
      <h1>Diese sind die Märchen von H2DU2</h1>
      <ul>
        <li v-for="marchen in marchen" v-bind:key="marchen.name">
          <router-link v-bind:to="'/marchen/' + marchen.id">{{
            marchen.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    marchen: Array
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  border-radius: 10px;
}
h1 {
  text-align: center;
}
.marchen {
  padding: 2rem;
}
</style>
