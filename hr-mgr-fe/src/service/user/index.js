import axios from 'axios';

export const list = (page=20,size=1,keyword='') => {
    return axios.get("http://localhost:3000/users/list",
        {
            params: {
                size,
                page,
                keyword
            }
        }
    );
};
export const remove = (id) => {
    return axios.delete(`http://localhost:3000/users/${id}`,
    );
};
export const add = (account,password) => {
    return axios.post('http://localhost:3000/users/add',
        {
        account,password
    })
};
export const resetPassword = (id) => {
    return axios.post('http://localhost:3000/users/reset/password',
        {
       id
    })
};