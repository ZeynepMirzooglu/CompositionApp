<template>
    <div>
        <div v-if="loading">
            <app-loading/>
        </div>
        <form class="mt-4" @submit.prevent="submitForm" v-else>
            <div class="mb-3">
              <label  class="form-label">Ad</label>
              <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="mb-3">
                <label  class="form-label">Soyad</label>
                <input type="text" class="form-control" v-model="user.lastname">
              </div>
            <button type="submit" class="btn btn-primary">Kaydet</button>
          </form>
    </div>
</template>
<script setup>

import postUser from '@/composables/postUser';
import { reactive,ref } from 'vue';
const user =reactive({
        name:'',
        lastname:''
    });
const {loading,submitForm} = postUser(user);



submitForm();
</script>