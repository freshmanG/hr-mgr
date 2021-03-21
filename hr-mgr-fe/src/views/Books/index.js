
import { defineComponent } from 'vue';

export default defineComponent ({
    setup(){
        const columns = [
            {
                title: '名字',
                dataIndex:'name',
            },
            {
                title: '年龄',
                dataIndex:'age',
            }
        ];
        const dataSource = [
            {
                name:'雄安红',
                age:12,
            }
        ];
        return {
            columns,
            dataSource,
        }
    }
})