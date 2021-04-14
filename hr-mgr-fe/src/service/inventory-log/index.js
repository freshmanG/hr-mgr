import axios from 'axios';

export const list = (type="IN_COUNT",page=20,size=1) => {
    return axios.get("http://localhost:3000/inventory-log/list",
        {
            params: {
                type,
                size,
                page,
            }
        }
    );
};


    