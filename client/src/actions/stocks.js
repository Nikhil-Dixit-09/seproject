import * as api from '../api/index';
export const getStocks=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchStocks();
        console.log(data);
        dispatch({type:'FETCH_ALL',payload: data})
    }catch(err){
        console.log(err);
    }
}
