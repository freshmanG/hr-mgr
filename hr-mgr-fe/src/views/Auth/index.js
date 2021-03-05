
import { defineComponent ,reactive,ref} from 'vue';

import { UserOutlined,UnlockOutlined,QrcodeOutlined } from '@ant-design/icons-vue';
import {auth}   from '@/service';   


export default defineComponent({
    components: {
        UserOutlined,
        UnlockOutlined,
        QrcodeOutlined,
    },
    setup() {
        // const account = ref('');
        const regForm = reactive({
           account:'',
           password:'',
        });
        const register = () => {
            // console.log(regForm);
            auth.register(regForm.account,regForm.password);
        }

        return {
            regForm,
            register,
        };
    },
});