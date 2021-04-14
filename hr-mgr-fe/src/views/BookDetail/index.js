import { defineComponent ,onMounted,ref} from 'vue';
import { useRoute ,useRouter} from 'vue-router';
import { result ,formatTimestamp} from '@/helpers/utlis';
import { book ,inventorylog} from '@/service';
import { message } from 'ant-design-vue';
import Update from '@/views/Books/Update/index.vue';
import { CheckOutlined } from '@ant-design/icons-vue';


export default defineComponent({
    components: {
        Update,
        CheckOutlined,
    },

    setup() {

        const columns = [
            {
                title: '数量',
                dataIndex: 'num',
            },
            {
                title: '操作时间',
                slots: {
                    customRender: 'createAt',
                }
            }
        ];
        const route = useRoute();
        const router = useRouter();
        const id = route.params.id;
        const detailInfo = ref({});
        const log = ref([]);
        const showUpdateModal = ref(false);
        const logTotal = ref(0);
        const logCurPage = ref(1);
        const curLogType = ref('IN_COUNT');
        // 获取书籍详细信息
        const getDetail = async () => {
            const res = await book.detail(id);

            result(res)
                .success(({ data }) => {
                    detailInfo.value = data;
                });
        };
        // 获取书籍出入库信息
        const getInventoryLog = async () => {
            const res = await inventorylog.list(curLogType.value,logCurPage.value,10);

            result(res)
                .success(({ data: { list, total, page } }) => {
                    console.log(list)
                    log.value = list;
                    logTotal.value = total;
                });
        };
        
        onMounted(() => { 
            getDetail();
            getInventoryLog();
        });
         // 删除操作
        const remove = async() => {
            const res = await book.remove(id);

            result(res)
                .success(({msg}) => {
                    message.success(msg);

                    router.replace('/books');
                })
        };
        const update = (book) => {
            Object.assign(detailInfo.value, book);
        };
        // 更新操作
        const setLogPage = (page) => {
            logCurPage.value = page;

            getInventoryLog();
        };
        // 筛选日志
        const logFilter = (type) => {
            curLogType.value = type;
            getInventoryLog();
        };

        return {
            d: detailInfo,
            formatTimestamp,
            remove,
            showUpdateModal,
            update,
            log,
            logTotal,
            setLogPage,
            columns,
            logFilter,
            curLogType,
            logCurPage
        };
    }
})