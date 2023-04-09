import axios from 'axios';
const API=axios.create({baseURL:'http://localhost:8000'});
API.interceptors.request.use((req)=>{
    // var tok=JSON.parse(localStorage.getItem('profile')).token;
    // console.log(tok);
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});
export const signin=(formData)=>API.post(`/user/signin`,formData);
export const signup=(formData)=>API.post(`/user/signup`,formData);
export const addstock=(stockdata)=>API.post('/stocks/add',stockdata);
export const fetchStocks=()=>API.get('/stocks/fetch');
export const buystock=(info)=>API.post('/user/addstock',info);
export const sellstock=(info)=>API.post('/user/sellstock',info);
export const getinfo=(info)=>API.post('/user/getinfo',info);