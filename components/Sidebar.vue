<template>
  <div>
    {{ elements }}
  </div>
</template>

<script>
module.exports = {
  props: {
    sidebar: Array
  },
  data: function() {
    return {
      elements: ""
    };
  }
};
this.elements = sidebar.join("<hr />");
console.log(this.elements);
</script>
