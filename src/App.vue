<template>
  <div>
    <h1>vue3</h1>
    <button @click="inc">点击{{count}} {{num}}</button>
    <router-link to="/">首页</router-link>
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import {ref,toRefs  } from "vue"
import store from "./store"

export default {
  setup(){
    let data = store.getState();
    const num = ref(0)
    const inc = () =>{
      num.value ++
      store.updateCnt()
    }
    return {
      num,
      inc,
      ...toRefs(data)
    }
  }
}
</script>

