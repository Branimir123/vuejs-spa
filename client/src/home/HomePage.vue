<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Sub-heading</h3>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
$sub_heading_color: #aaaaaa;

h3 {
  color: $sub_heading_color;
  margin: 40px 0 0;
}
</style>
