
<template>
<div>
  <app-header/>
  <div class="container">
    <button class="btn btn-primary" @click="activeComp = Users">Kullanıcılar</button>
    <button class="btn btn-secondary"  @click="activeComp = AddUser">Yeni Kullanıcı Ekle</button>
   <component :is="activeComp"/>
  </div>
  <Footer/>
</div>
</template>
<script setup>
import { ref,shallowRef} from 'vue';
import Footer from '@/components/Fixed/Footer.vue';
import Users from './components/User/Users.vue';
import AddUser from './components/User/AddUser.vue';


const activeComp= shallowRef(Users);

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
