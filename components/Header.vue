<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <p>
      Willkommen! Klieke <router-link to="/marchen">hier</router-link> vor eine
      Liste von die Märchens.
    </p>
  </div>
</template>

<script>
module.exports = {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
div {
  border-radius: 10px;
  padding: 10px 10px;
  padding-bottom: 8rem;
  background-color: #424242;
  color: white;
  text-align: center;
}
</style>
