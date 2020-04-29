const axios = require('axios');
const BASE_URL = 'http://localhost:8000';

export const listExpenses = () => {
    return axios({
        url: `${BASE_URL}/entities`,
        method: 'get',
    });
};
export const getExpense = id => {
    return axios({
        url: `${BASE_URL}/entities/${id}`,
        method: 'get',
    });
};
export const createExpense = spot => {
    console.log('making a post request ... ');
    return axios({
        url: `${BASE_URL}/entities`,
        method: 'post',
        data: spot,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
export const updateExpense = spot => {
    return axios({
        url: `${BASE_URL}/entities/${spot.id}`,
        method: 'put',
        data: spot
    });
};
export const deleteExpense = id => {
    return axios({
        url: `${BASE_URL}/entities/${id}`,
        method: 'delete',
    });
};

