<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  padding: 20px;
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 2147483647;
  background-color: white;
  box-shadow: 0px 0px 5px #0000009e;
}
</style>
