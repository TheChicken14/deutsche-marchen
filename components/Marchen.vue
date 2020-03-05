<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 left">
        <div class="name">
          <h1>{{ marchen.name }}</h1>
          <h4>{{ marchen.kinder }}</h4>
        </div>
        <div class="text">
          <p v-if="marchen.text.text">{{ marchen.text.text }}</p>
          <p v-else>
            Aut ut placeat rerum rerum ducimus modi sequi. Et et quae qui. Ipsam
            voluptatem culpa omnis. Est rerum libero quam omnis veniam enim.
            Debitis rerum repellendus commodi accusamus ducimus doloremque.
            Dolorem sit facilis ut voluptatem. Eos perspiciatis et autem. Animi
            in rem similique libero autem. At ut magnam quo ut ab laudantium
            nemo unde. Dolor similique nostrum at. Aliquam temporibus dicta quas
            dicta ut eaque magni. Autem in voluptates expedita porro. Quasi sunt
            eaque accusantium sed quia incidunt. Error eum exercitationem
            tempora eligendi. Unde aut vitae perferendis nulla blanditiis. Omnis
            quam et aliquid qui. Eligendi asperiores aut iusto beatae
            architecto. Numquam minima tempore minima sed. Beatae et animi ab
            repudiandae magnam assumenda et. Et minus nesciunt labore nihil
            placeat occaecati ut. Occaecati voluptates perspiciatis asperiores
            aut laborum nisi cumque. Iure commodi nobis doloremque aliquam sit.
            Alias in nam dicta dolor inventore est. Illo et amet autem doloribus
            hic. Aut ut placeat rerum rerum ducimus modi sequi. Et et quae qui.
            Ipsam voluptatem culpa omnis. Est rerum libero quam omnis veniam
            enim. Debitis rerum repellendus commodi accusamus ducimus
            doloremque. Dolorem sit facilis ut voluptatem. Eos perspiciatis et
            autem. Animi in rem similique libero autem. At ut magnam quo ut ab
            laudantium nemo unde. Dolor similique nostrum at. Aliquam temporibus
            dicta quas dicta ut eaque magni. Autem in voluptates expedita porro.
            Quasi sunt eaque accusantium sed quia incidunt. Error eum
            exercitationem tempora eligendi. Unde aut vitae perferendis nulla
            blanditiis. Omnis quam et aliquid qui. Eligendi asperiores aut iusto
            beatae architecto. Numquam minima tempore minima sed. Beatae et
            animi ab repudiandae magnam assumenda et. Et minus nesciunt labore
            nihil placeat occaecati ut. Occaecati voluptates perspiciatis
            asperiores aut laborum nisi cumque. Iure commodi nobis doloremque
            aliquam sit. Alias in nam dicta dolor inventore est. Illo et amet
            autem doloribus hic. Aut ut placeat rerum rerum ducimus modi sequi.
            Et et quae qui. Ipsam voluptatem culpa omnis. Est rerum libero quam
            omnis veniam enim. Debitis rerum repellendus commodi accusamus
            ducimus doloremque. Dolorem sit facilis ut voluptatem. Eos
            perspiciatis et autem. Animi in rem similique libero autem. At ut
            magnam quo ut ab laudantium nemo unde. Dolor similique nostrum at.
            Aliquam temporibus dicta quas dicta ut eaque magni. Autem in
            voluptates expedita porro. Quasi sunt eaque accusantium sed quia
            incidunt. Error eum exercitationem tempora eligendi. Unde aut vitae
            perferendis nulla blanditiis. Omnis quam et aliquid qui. Eligendi
            asperiores aut iusto beatae architecto. Numquam minima tempore
            minima sed. Beatae et animi ab repudiandae magnam assumenda et. Et
            minus nesciunt labore nihil placeat occaecati ut. Occaecati
            voluptates perspiciatis asperiores aut laborum nisi cumque. Iure
            commodi nobis doloremque aliquam sit. Alias in nam dicta dolor
            inventore est. Illo et amet autem doloribus hic.
          </p>
        </div>
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
      found = this.marchens.find(e => e.id == this.$route.params.id);
      this.marchen = found
        ? found
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
      setTimeout(() => {
        this.found = this.marchens.find(e => e.id == this.$route.params.id);
        this.marchen = this.found
          ? this.found
          : { name: "Nicht gefunden!", id: 0, text: {} };
      }, 100);
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
  }
  .image {
    height: 18rem;
  }
}
@media (min-width: 768px) {
  .sidebar {
    padding-top: 1rem;
  }
  .image {
    height: 20rem;
  }
}

.sidebar {
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;
}

.text {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
}
/*p {
  margin: 2rem;
  margin-bottom: 3rem;
}*/
.name {
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;
  padding: 0.5rem;
  text-align: center;
}
.image {
  margin: auto;
  display: block;
}
</style>
