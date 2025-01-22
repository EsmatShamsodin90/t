<template>
  <div id="app">
    <router-view /> <!-- صفحات مختلف در اینجا رندر می‌شوند -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: black;
  color: white;
}
</style>
