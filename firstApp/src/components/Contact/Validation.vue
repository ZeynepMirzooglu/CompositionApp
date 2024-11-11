<template>
  <div>
    <Form :validation-schema="formSchema">
        <div class="mb-3">
    <label>Ad</label>
    <!-- <Field :rules=[isRequired,validateName] class="form-control" name="name" placeholder="Adınızı Giriniz"/> -->
    <Field class="form-control" name="name" placeholder="Adınızı Giriniz"/>
    <ErrorMessage  name="name" as="div" v-slot="{message}">
        <div class="alert alert-danger">
              {{ message }}
        </div>
    </ErrorMessage>
    </div>
    <button class="btn btn-primary">Kaydet</button>
    </Form>
</div>
</template>
<script setup>
import { Form,Field,ErrorMessage } from 'vee-validate';
import * as yup from 'yup'
// const isRequired = (value)=>{
//     if(!value){
//         return 'Bu alan zorunludur!'
//     }
//     return true;
// }
// const validateName = (value)=>{
//     if(value === 'Ali'){
//         return 'Bu değer girilemez!'
//     }
//     return true;
// }
const formSchema = yup.object({
name:yup.string().required('Bu alan zorunludur!').min(6,'Lütfen mininum 6 karakter giriniz.')
})
</script>