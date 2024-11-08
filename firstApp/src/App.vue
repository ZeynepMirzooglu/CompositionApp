
<template>
<div>
  <app-header/>
  <div class="container">
    <!-- <Students /> -->
    <!-- <Personel :user ="person.name"   :lastName ="person.lastName" :userAge="person.age" @updateLastname="updateLastName"/>
    <button @click="updateName">Bilgileri Güncelle</button> -->
  <!-- <StudentsScore>
    <template v-slot:name>
      <ul>
        <li v-for="student in students" :key="student.id">
          <span>{{student.name}} :</span> <span>{{student.score}}</span>
        </li>
    </ul>
    </template>
    <template v-slot:example>
        <h2>Example</h2>
    </template>
    <template v-slot>
      <h3>V-slot kullanımı</h3>
  </template>
  </StudentsScore> -->
  <button @click="activeComp = StudentOne">Öğrenci 1 Page</button>
  <button @click="activeComp = StudentTwo">Öğrenci 2 Page</button>
  <!-- <StudentOne v-if="activeComp === StudentOne"/>
  <StudentTwo v-if="activeComp === StudentTwo"/> -->
  <component :is="activeComp"></component>
  </div>
  <Footer/>
</div>
</template>
<script setup>
import { ref,reactive ,provide, shallowRef} from 'vue';
import Footer from '@/components/Fixed/Footer.vue';
import StudentOne from './components/StudentsMath/StudentOne.vue';
import StudentTwo from './components/StudentsMath/StudentTwo.vue';
//import Personel from './components/UserInformation/Personel.vue';
//import StudentsScore from './components/Students/StudentsScore.vue';
//const name= ref('Aslan Kaplan');

// const person = reactive({
//   name:'Zeynep',
//   lastName:'Mirzooğlu',
//   age:34,

// })
// const students = reactive([{
//   id:1,
//   name:'Zeynep',
//   lastName:'Mirzooğlu',
//   score:85,
// },
// {
//   id:2,
//   name:'Gani',
//   lastName:'Mirzooğlu',
//   score:50,
// },
// {
//   id:3,
//   name:'Muhammed',
//   lastName:'Mirzooğlu',
//   score:95,
// }])
// const updateName=()=>{
//     person.name ='Aslan'
//  }
//  const updateLastName=(lastName)=>{
// person.lastName = lastName;
//  }
//  const updateScore=()=>{
//   students[0].score= 100;
// }
const activeComp= shallowRef(StudentOne);
 //provide('students',{students,updateScore})

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
