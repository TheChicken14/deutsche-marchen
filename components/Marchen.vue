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
              <img
                v-if="article.image && article.text"
                v-bind:src="article.image"
                class="articleimg"
              />
              <img v-else v-bind:src="article.image" class="articleimg image" />
              <div v-if="article.list">
                <ol v-if="article.list.type == 'ordered'">
                  <h3>{{ article.list.title }}</h3>
                  <li
                    v-for="item in article.list.items"
                    v-bind:key="item"
                    class="ordered"
                  >
                    {{ item }}
                  </li>
                </ol>
                <ul v-if="article.list.type == 'unordered'">
                  <h3>{{ article.list.title }}</h3>
                  <li v-for="item in article.list.items" v-bind:key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div v-if="Array.isArray(article.text)">
                <p
                  v-for="lines in article.text"
                  v-bind:key="lines"
                  v-html="lines"
                ></p>
              </div>
              <p v-else v-html="article.text"></p>
              <hr />
            </div>
          </div>
          <!--<div v-else>
          <p>
            kein Text!
          </p>
          </div>-->
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
  max-width: 100%;
  margin-bottom: 1rem;
}
.ordered {
  margin-bottom: 0.5rem;
}
</style>
