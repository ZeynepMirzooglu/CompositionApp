<template>
    <form @submit="submitForm">
        <div class="row">
              <h1>İletişim</h1>
              <hr/>
         <div class="mb-3">
            <label>Ad</label>
            <input type="text" class="form-control" v-model="formData.name"/>
         </div>
         <div class="mb-3">
            <label>Soyad</label>
            <input type="text" class="form-control" v-model="formData.lastname"/>
         </div>
         <div class="mb-3">
            <h4>Cinsiyet</h4>
            <div class="form-check">
             <input type="radio" v-model="formData.gender" value="woman" class="form-check-input" />
             <label>Kadın</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" v-model="formData.gender" value="man" />
                <label>Erkek</label>
               </div> 
          </div>
          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control" v-model="formData.email"/>
         </div>
         <div class="mb-3">
            <label>Konu</label>
            <input type="text" class="form-control" v-model="formData.subject"/>
         </div>
         <div class="mb-3">
            <h4>Bize Hangi amaçla Ulaşmak istiyorsunuz?</h4>
            <div class="form-check">
             <input type="checkbox" class="form-check-input" v-model="formData.goals"  value="onlinetrainings"/>
             <label class="form-check-label">Online Eğitim</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input"  v-model="formData.goals"  value="livetrainings"/>
                <label class="form-check-label">Canlı Eğitim</label>
               </div>
          </div>
          <div class="mb-3">
            <label>Mesajınız:</label>
            <textarea class="form-control" rows="3" v-model="formData.message"></textarea>
          </div>
          <div class="mb-3">
           <button class="btn btn-primary">Gönder</button>
          </div>
          <div v-if="errors.length">
            <h3>İlgili alanları doldurunuz!</h3>
            <ul>
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </div>
        </div>
    </form>
</template>
<script setup>
import { reactive } from 'vue';


const formData=reactive({
name:'',
lastname:'',
gender:'',
email:'',
subject:'',
goals:[],
message:'',
});
const errors= reactive([]);
const submitForm =(e)=>{
    e.preventDefault();
    errors.splice(0);
    console.log(formData,"formData");
    if(!formData.name){
       errors.push('Lütfen isminizi giriniz!');
    }
    if(!formData.lastname){
        errors.push('Lütfen soyismini giriniz!');
    }
    if(!errors.length){
        console.log("FormData",formData);
    }
};
</script>