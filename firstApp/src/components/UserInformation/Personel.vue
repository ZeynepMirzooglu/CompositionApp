<template>
    <div class="personContainer">
    <h2>Personel Bilgileri</h2>
    <ul>
        <li>
            <span>Adınız:</span> {{user}}
        </li>
        <li>
            <span>Soyadınız: </span>{{lastName}}
        </li>
        <li>
            <span>Yaş: </span>{{userAge}}
        </li>
      
    </ul>
    <button @click="updateLastName"> Güncelle</button>
</div>
</template>
<script setup>
const emit =defineEmits(['updateLastname'])
 const props = defineProps(
    {
        user:{
            type:String,
            required:true,
            default: 'ASLAN'
        },
        lastName:String, 
        userAge:{
           type: Number,
        required:true,
          validator(value){
            if(value > 30){
                return true;
            }else{
                return false;
            }
          }
        }
        });
 const updateLastName =()=>{
  //  props.lastName = 'Arslanoğlu';
  emit('updateLastname','Arslanoğlu');
 }

</script>
<style scoped>
ul{
    list-style-type: none;
}
ul li {
    padding: 20px 0px;
    font-size: 18px;
}
span{
    font-weight: bold;
}
.personContainer{
    border: 1px solid lightblue;
    padding: 30px;
    border-radius: 30px;
}
</style>