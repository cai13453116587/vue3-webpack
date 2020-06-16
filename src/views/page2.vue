<template>
  <div>
    <h2>page2</h2>
    {{count}}
  </div>
</template>
<script>
import store from "../store"
import {toRefs} from "vue"
export default {
  name:'page2',
  setup(){
    let data = store.getState();
    return {
      ...toRefs(data)
    }
  }
}
</script>