<template>
  <form
    name="contact"
    id="myForm"
    action="/#/danke"
    method="POST"
    data-netlify="true"
  >
    <p>
      <label
        >deine Gruppe (Namen): <input type="text" name="name" required
      /></label>
    </p>
    <p>
      <label>deine E-mail: <input type="email" name="email" required/></label>
    </p>
    <p>
      <label
        >dein Märchen:
        <select name="Märchen">
          <option
            v-for="marchen in marchenlist"
            v-bind:key="marchen.id"
            v-bind:value="marchen.name"
            >{{ marchen.name }}</option
          >
        </select>
      </label>
    </p>
    <p>
      <label>Text: <textarea name="message" required></textarea></label>
    </p>
    <p>
      <label>Bestanden: <input type="file" name="files" multiple /> </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</template>

<script>
module.exports = {
  props: {
    marchenlist: Array
  }
};
</script>
