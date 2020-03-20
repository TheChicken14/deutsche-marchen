<template>
  <div class="header fadeIn">
    <h1>{{ title }}</h1>
    <p>
      Willkommen! Klieken Sie
      <router-link to="/marchen">hier</router-link> vor eine Liste von die
      Märchens.
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
.header {
  margin: auto;
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 4rem;
  padding-bottom: 4rem;
  width: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 179, 255, 1) 0%,
    rgba(0, 93, 255, 1) 100%
  );
  color: white;
  text-align: center;
}
a {
  color: black;
}
</style>
