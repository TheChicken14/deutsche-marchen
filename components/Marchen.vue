<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 text">
        <h1>{{ marchen.name }}</h1>
        <p v-if="marchen.text.text">{{ marchen.text.text }}</p>
        <p v-else>
          Aut ut placeat rerum rerum ducimus modi sequi. Et et quae qui. Ipsam
          voluptatem culpa omnis. Est rerum libero quam omnis veniam enim.
          Debitis rerum repellendus commodi accusamus ducimus doloremque.
          Dolorem sit facilis ut voluptatem. Eos perspiciatis et autem. Animi in
          rem similique libero autem. At ut magnam quo ut ab laudantium nemo
          unde. Dolor similique nostrum at. Aliquam temporibus dicta quas dicta
          ut eaque magni. Autem in voluptates expedita porro. Quasi sunt eaque
          accusantium sed quia incidunt. Error eum exercitationem tempora
          eligendi. Unde aut vitae perferendis nulla blanditiis. Omnis quam et
          aliquid qui. Eligendi asperiores aut iusto beatae architecto. Numquam
          minima tempore minima sed. Beatae et animi ab repudiandae magnam
          assumenda et. Et minus nesciunt labore nihil placeat occaecati ut.
          Occaecati voluptates perspiciatis asperiores aut laborum nisi cumque.
          Iure commodi nobis doloremque aliquam sit. Alias in nam dicta dolor
          inventore est. Illo et amet autem doloribus hic. Aut ut placeat rerum
          rerum ducimus modi sequi. Et et quae qui. Ipsam voluptatem culpa
          omnis. Est rerum libero quam omnis veniam enim. Debitis rerum
          repellendus commodi accusamus ducimus doloremque. Dolorem sit facilis
          ut voluptatem. Eos perspiciatis et autem. Animi in rem similique
          libero autem. At ut magnam quo ut ab laudantium nemo unde. Dolor
          similique nostrum at. Aliquam temporibus dicta quas dicta ut eaque
          magni. Autem in voluptates expedita porro. Quasi sunt eaque
          accusantium sed quia incidunt. Error eum exercitationem tempora
          eligendi. Unde aut vitae perferendis nulla blanditiis. Omnis quam et
          aliquid qui. Eligendi asperiores aut iusto beatae architecto. Numquam
          minima tempore minima sed. Beatae et animi ab repudiandae magnam
          assumenda et. Et minus nesciunt labore nihil placeat occaecati ut.
          Occaecati voluptates perspiciatis asperiores aut laborum nisi cumque.
          Iure commodi nobis doloremque aliquam sit. Alias in nam dicta dolor
          inventore est. Illo et amet autem doloribus hic. Aut ut placeat rerum
          rerum ducimus modi sequi. Et et quae qui. Ipsam voluptatem culpa
          omnis. Est rerum libero quam omnis veniam enim. Debitis rerum
          repellendus commodi accusamus ducimus doloremque. Dolorem sit facilis
          ut voluptatem. Eos perspiciatis et autem. Animi in rem similique
          libero autem. At ut magnam quo ut ab laudantium nemo unde. Dolor
          similique nostrum at. Aliquam temporibus dicta quas dicta ut eaque
          magni. Autem in voluptates expedita porro. Quasi sunt eaque
          accusantium sed quia incidunt. Error eum exercitationem tempora
          eligendi. Unde aut vitae perferendis nulla blanditiis. Omnis quam et
          aliquid qui. Eligendi asperiores aut iusto beatae architecto. Numquam
          minima tempore minima sed. Beatae et animi ab repudiandae magnam
          assumenda et. Et minus nesciunt labore nihil placeat occaecati ut.
          Occaecati voluptates perspiciatis asperiores aut laborum nisi cumque.
          Iure commodi nobis doloremque aliquam sit. Alias in nam dicta dolor
          inventore est. Illo et amet autem doloribus hic.
        </p>
      </div>
      <div class="col-md-4 sidebar">
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
      marchen: {},
      found: {}
    };
  },
  props: {
    marchens: Array
  },
  mounted() {
    if (this.marchens) {
      this.found = this.marchens.find(e => e.id == this.$route.params.id);
      this.marchen = this.found
        ? this.found
        : { name: "Nicht gefunden!", id: 0, text: {} };
    } else {
      axios.get("/marchen.json").then(({ data }) => {
        console.log("ididit");
        this.found = data.find(e => e.id == this.$route.params.id);
        this.marchen = this.found
          ? this.found
          : { name: "Nicht gefunden!", id: 0, text: {} };
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (this.marchens) {
      this.found = this.marchens.find(e => e.id == this.$route.params.id);
      this.marchen = this.found
        ? this.found
        : { name: "Nicht gefunden!", id: 0, text: {} };
    } else {
      axios.get("/marchen.json").then(({ data }) => {
        this.found = data.find(e => e.id == this.$route.params.id);
        this.marchen = this.found
          ? this.found
          : { name: "Nicht gefunden!", id: 0, text: {} };
      });
    }

    next();
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .sidebar {
    margin-top: 3rem;
    border-top: 5px solid rgb(49, 49, 49);
  }
  .image {
    height: 18rem;
  }
}
@media (min-width: 768px) {
  .sidebar {
    padding-top: 1rem;
    border-left: 5px solid black;
  }
  .image {
    height: 20rem;
  }
}

.row {
  background-color: white;
  border-radius: 10px;
}
p {
  margin: 2rem;
  margin-bottom: 3rem;
}
h1 {
  margin-top: 2rem;
  text-align: center;
}
.image {
  margin: auto;
  display: block;
}
</style>
