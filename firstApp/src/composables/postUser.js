import axios from 'axios';
import { reactive,ref } from 'vue';
import {useToast} from 'vue-toast-notification';


const postUser =(user)=>{
    const loading=ref(false);
   
    const $toast = useToast();
    const submitForm =()=>{
        loading.value = true;
        axios({
            method:"POST",
            url:"http://localhost:3000/users",
            data: user
        }).then(()=>{
            $toast.success('Kullanıcı kaydedildi!');
        }).catch(()=>{
            $toast.error('Kullanıcı eklenemedi!');
        }).finally(()=>{
            loading.value = false;
        })
    }

    return{loading,submitForm}
}

export default postUser;