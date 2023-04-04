const reducer=(stocks=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        default:
            return stocks;     
    }
}
export default reducer