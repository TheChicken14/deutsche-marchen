<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ marchen.name }}</h1>
        <p v-if="marchen.text.text">{{ marchen.text.text }}</p>
        <p v-else>Text nicht gefunden!</p>
      </div>
      <div class="col-md-4">
        <img v-if="marchen.image" class="image" v-bind:src="marchen.image" />
        <img v-else class="image" src="/assets/images/404img.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      marchen: {}
    };
  },
  mounted() {
    axios.get("/marchen.json").then(({ data }) => {
      found = data.find(e => e.id == this.$route.params.id);
      this.marchen = found
        ? found
        : { name: "Nicht gefunden!", id: 0, text: {} };
    });
  },
  beforeRouteUpdate(to, from, next) {
    axios.get("/marchen.json").then(({ data }) => {
      found = data.find(e => e.id == this.$route.params.id);
      console.log(found);
      this.marchen = found
        ? found
        : { name: "Nicht gefunden!", id: 0, text: {} };
    });
    next();
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .col-md-4 {
    margin-top: 3rem;
    border-top: 5px solid rgb(49, 49, 49);
  }
}
@media (min-width: 768px) {
  .col-md-4 {
    padding-top: 1rem;
    border-left: 5px solid black;
  }
}
.image {
  height: 25rem;
}
</style>
