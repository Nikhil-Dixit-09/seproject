const reducer=(state=[],action)=>{
    switch(action.type){
        case 'BUY':
            console.log('hiiiiiii');
            console.log(action);
            // localStorage.setItem('profile',JSON.stringify({...action.data}));
            console.log('changed');
            return action.payload.data;
        case 'LOG_OUT':
            return state;    
        default:
            return state;     
    }
}
export default reducer