<template>
   <div>
    <div>    {{name}}</div>

    <button @click="name = 'Aslan'">Değiştir</button>

</div>
  
</template>
<script setup>
import { onMounted,onBeforeMount,ref,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';
const name= ref("Zeynep");
onBeforeMount(() => {
  console.log("OnBeforeMount")
});
onMounted(() => {
  console.log("onMountend")
});
onBeforeUpdate(() => {
    console.log("onBeforeUpdate")
});
onUpdated(() => {
  console.log("onupdated");
});
onBeforeUnmount(() => {
    console.log("onBeforeUnMount");
});
onUnmounted(() => {
    console.log("onUnMount");
});
</script>