<template>
    <div>
    <div v-if="data.loading">
        <app-loading/>
    </div>
 <div class="row mt-3" v-if="!data.loading">
  <div class="col-md-3 mb-4" v-for="user in data.users" :key="user.id">
    <div class="card" >
        <img :src="'https://placebeard.it/300/300?' + user.id" class="card-img-top" >
        <div class="card-body"> 
          <p class="card-text">
            {{ user.name }}  {{ user.lastname }}
          </p>
        </div>
      </div>
  </div>
 </div>
</div>
</template>
<script setup>

import getUsers from '@/composables/getUsers'
const {data,loadUsers} = getUsers();
loadUsers(); 

</script>