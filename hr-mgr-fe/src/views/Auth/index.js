
import { defineComponent ,reactive,ref} from 'vue';
import { UserOutlined,UnlockOutlined,QrcodeOutlined } from '@ant-design/icons-vue';
import {auth}   from '@/service';   
import { result } from '@/helpers/utlis';
import { message } from 'ant-design-vue';

export default defineComponent({
    components: {
        UserOutlined,
        UnlockOutlined,
        QrcodeOutlined,
    },
    setup() {
        // 注册用的表单逻辑
        // const account = ref('');
        const regForm = reactive({
            account:'',
            password: '',
            inviteCode:'',
        });
        // 注册逻辑
        const register = async() => {
            // console.log(regForm);
            if (regForm.account === '') {
                message.info('请输入账号');
                return;     
            };
            if (regForm.password === '') {
                message.info('请输入密码');
                return;
            }
            if (regForm.inviteCode === '') {
                message.info('请输入邀请码');
                return;
            }
            // auth.register(regForm.account,regForm.password);
            const res = await auth.register(
                regForm.account,
                regForm.password,
                regForm.inviteCode
             );
            
            result(res)
                .success((data) => {
                    message.success(data.msg);
                });
            // 引入result之前
            // if (data.code) {
            //     message.success(data.msg);
            //     return;
            // };
            // message.error(data.msg);    
        }
        // 登录用的表单逻辑
        const loginForm = reactive({
            account:'',
            password:'',
        });
        // 登入逻辑
        const login =async () => {
            if (loginForm.account === '') {
                message.info('请输入账号');
                return;     
            };
            if (loginForm.password === '') {
                message.info('请输入密码');
                return;
            }
 
            const res = await auth.login(loginForm.account, loginForm.password);
            result(res)
                .success((data) => {
                    message.success(data.msg);
                });
            // if (data.code) {
            //     message.success(data.msg);
            //     return;
            // };
            // message.error(data.msg);    
        }
        return {
            // 注册相关功能
            regForm,
            register,
            // 登录相关功能
            login,
            loginForm,
        };
    },
});