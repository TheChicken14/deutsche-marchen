<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 left">
        <div class="name">
          <h1>{{ marchen.name }}</h1>
          <h4>{{ marchen.kinder }}</h4>
        </div>
        <div class="text">
          <div v-if="marchen.text[0]">
            <div v-for="article in marchen.text" v-bind:key="article.title">
              <h2>{{ article.title }}</h2>
              <img v-bind:src="article.image" class="articleimg image" />
              <p v-html="article.text"></p>
              <hr />
            </div>
          </div>
          <p v-else>
            kein Text!
          </p>
        </div>
      </div>
      <div class="col-md-4 sidebar">
        <div v-if="marchen.image">
          <div v-for="image in marchen.image" v-bind:key="image">
            <img class="image" v-bind:src="image" />
            <hr />
          </div>
        </div>
        <img v-else class="image" src="/assets/images/404img.jpg" />
        <div v-if="marchen.puzzle">
          <h3>Puzzle</h3>
          <img class="puzzle" v-bind:src="marchen.puzzle.url" />
        </div>
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
}
@media (min-width: 768px) {
  .sidebar {
    padding-top: 1rem;
  }
}

.sidebar {
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;
  padding-bottom: 2rem;
}

.text {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  margin-top: 1rem;
}
.name {
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;
  padding: 0.5rem;
  text-align: center;
}
.text img {
  display: block;
  border-radius: 10px;
  margin-top: 1rem;
}
.image,
.puzzle {
  width: 100%;
  height: auto;
}
h3 {
  text-align: center;
}
.puzzle {
  margin: auto;
  display: block;
}
.articleimg {
  margin-bottom: 1rem;
}
</style>
