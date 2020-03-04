<template>
  <div>
    <h1>Danke!</h1>
    <p><router-link to="/">Zurück</router-link></p>
  </div>
</template>

<style scoped>
div {
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
