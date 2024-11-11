import axios from 'axios';
import { onMounted,reactive } from 'vue';
import {useToast} from 'vue-toast-notification';



const getUsers =()=>{
  
    const data = reactive({
        users:[],
        loading:true
    });
    const $toast = useToast();
    
    const loadUsers= async()=> {
        try {
            const response = await axios.get('http://localhost:3000/users');
            data.users = response.data;
            data.loading=false;
            //$toast.success('You did it!');
            console.log(response);
        } catch (error) {
            //console.error(error);
            $toast.error('Dataya ulaşılamadı!');
            data.loading = false;
           
        }
        
    }
    return{data,loadUsers}
}
export default getUsers;