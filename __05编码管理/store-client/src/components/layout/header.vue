<template>
  <header class="header" v-if="visible">
    <slot class="header-title">校园超市</slot>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style></style>
