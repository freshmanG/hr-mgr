import { defineComponent, reactive ,watch} from 'vue';
import { book } from '@/service';
import { message ,Modal} from 'ant-design-vue';
import { result ,clone} from '@/helpers/utlis';
import { context } from 'ant-design-vue/lib/vc-image/src/PreviewGroup';
import moment from 'moment';

export default defineComponent({
    props: {
        show: Boolean,
        book: Object,
    },
    setup(props,context) {
        console.log(props,1);
        const editForm = reactive({
            name: '',
            price: 0,
            author: '',
            publishDate: 0,
            classify: '',
        });
        const close = () => {
            context.emit('update:show', false);
        };
        
        watch(() => props.book, (current) => {
            console.log(current, '----------');
            Object.assign(editForm, current);
            editForm.publishDate = moment(Number(editForm.publishDate));
        });

        const submit = async() => {
            const res = await book.update(
                {
                    id: props.book._id,
                    price:editForm.price,
                    title:editForm.title,
                    classify:editForm.classify,
                    author:editForm.author,
                    name:editForm.name,
                    publishDate:editForm.publishDate.valueOf(),
                }
            );

            result(res)
                .success(({ data,msg }) => {
                    // console.log(context);
                    // console.log(data);
                    context.emit('update', data);
                    close();
                    message.success(msg);
                });
        };
        return {
            editForm,
            submit,
            props,
            close,
        };
    }
})