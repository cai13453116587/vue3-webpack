<template>
  <div>
    <h2>page1</h2>
    <input type="text">
    <span>{{count}}</span>
  </div>
</template>
<script>
import store from "../store"
import {toRefs} from "vue"
export default {
  name:'page1',
  setup(){
    
    let data = store.getState();
    return {
      ...toRefs(data)
    }
  }
}
</script>
<style>

</style>


