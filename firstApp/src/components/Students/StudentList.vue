<template>
    <div>
    <h2>Öğrenciler</h2>
    <ul>
        <li v-for="student in students" :key="student.id">
          <span>{{student.name}} :</span> <span>{{student.score}}</span>
        </li>
    </ul>
    <button @click="updateScore">İlk Öğrencinin Puanını Değiştir</button>
</div>
</template>
<script setup>
import { inject } from 'vue';

const {students,updateScore} = inject('students');
</script>
<style scoped>
ul{
    list-style-type: none;
}
</style>