import { defineComponent, reactive } from 'vue';
import { user } from '@/service';
import { message ,Modal} from 'ant-design-vue';
import { result ,clone} from '@/helpers/utlis';
import { context } from 'ant-design-vue/lib/vc-image/src/PreviewGroup';
const defaultFormData = {
            account: '',
            password: '',
        }

export default defineComponent({
    props: {
      show:Boolean,  
    },
    setup(props,context) {
        console.log(props);
        const addForm = reactive(clone(defaultFormData));
        const close = () => {
            context.emit('update:show', false);
        };  
        const submit = async () => {
            const form = clone(addForm);
            // form.publishDate = addForm.publishDate.valueOf()    ;
            const res = await user.add(form.account,form.password);

            result(res)
                .success((d,{data}) => {
                    Object.assign(addForm, defaultFormData);
                    message.success(data.msg);
                    close();
                    context.emit('getList');
            })
        };
       
        return {
           addForm,
            submit,
            props,
            close,
        };
    }
})