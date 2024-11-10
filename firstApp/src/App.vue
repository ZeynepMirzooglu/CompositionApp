
<template>
<div>
  <app-header/>
  <div class="container">
<Lifecycle v-if="showComponent"/>
  </div>
  <Footer/>
</div>
</template>
<script setup>
import { ref} from 'vue';
import Footer from '@/components/Fixed/Footer.vue';
import Lifecycle from './components/Cycle/Lifecycle.vue';

const showComponent = ref(true);

setTimeout(()=>{showComponent.value = false;},4000);
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  min-height: 100vh;
  padding: 30px;
}
button{
  padding: 10px 10px;
    border: none;
    border-radius: 30px;
    background: green;
    color: white;
    margin: 20px;
}
ul{
  list-style-type: none;
}
</style>
