<template>
  <div id="app">
    <ComponentTest/>
  </div>
</template>

<script>
import ConMatViet from './components/ConMatViet'
import ChiaSeNhac from './components/ChiaSeNhac'

var componentLoad = ConMatViet;

if(window.location.hostname === "chiasenhac.vn"){
  componentLoad = ChiaSeNhac;
}

export default {
  name: 'App',
  components: {
    ComponentTest: componentLoad,
  }
}
</script>

<style>
#app {
  padding: 20px;
  width: 400px;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 2147483647;
  background-color: white;
  box-shadow: 0px 0px 5px #0000009e;
  overflow-x:auto;
  overflow-y:auto;
  
}
</style>
