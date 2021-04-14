import { defineComponent,ref ,onMounted} from 'vue';
import { user } from '@/service';
import { message } from 'ant-design-vue';
import { result,formatTimestamp } from '@/helpers/utlis';
import AddOne from './AddOne/index.vue';
const columns = [
    {
        title: '账户',
        dataIndex:'account',
    },
    {
        title: '创建日期',
        slots: {
            customRender:'createdAt',
        }
    },
    {
        title: '操作',
        slots: {
            customRender:'action',
        }
    }
]

export default defineComponent({
    components: {
        AddOne
    },
    setup() {
        const list = ref([]);
        const total = ref(0);
        const curPage = ref(1);
        const showAddModal = ref(false);
        const keyword = ref('');
        const isSearch = ref(false);
        const getUser = async() => {
            const res = await user.list(curPage.value, 10,keyword.value);
            
            result(res)
                .success(({ data: { list: refList, total: resTotal } }) => {
                    list.value = refList;
                    total.value = resTotal;
                });
        };

        onMounted(() => {
            getUser();
        })

        const remove = async({_id}) => {
            const res =await user.remove(_id);

            result(res)
                .success(() => {
                    message.success("删除成功");
                    getUser();
            })
        };

        const setPage = (page) => {
            curPage.value = page;
            getUser();
        };
        const resetPassword = async({_id}) => {
            const res = await user.resetPassword(_id);

            result(res)
                .success(({ msg })=> {
                    message.success(msg);
            })  
        };

        const onSearch = () => {
            getUser();
            isSearch.value = !!keyword.value;
        };

        const backALL = () => {
            isSearch.value = false;
            keyword.value = '';
            getUser();
        };
        return {
            list,
            total,
            curPage,
            columns,
            formatTimestamp,
            remove,
            showAddModal,
            getUser,
            setPage,
            resetPassword,
            onSearch,
            keyword,
            isSearch,
            backALL,
        }
    }
})