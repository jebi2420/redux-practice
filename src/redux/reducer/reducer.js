let initialState = {
    count: 0,
    id:"",
    password:""
}

function reducer(state=initialState, action){
    console.log("action?", action)
    // if(action.type === "INCREMENT"){
    //     return {...state, count: state.count + action.payload.num}
    // }
    // return {...state}

    // switch로 쓰는 경우 (if문 쓸지 switch쓸지는 회사마다 다름)
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + action.payload.num};
        case "DECREMENT":
            return {...state, count: state.count - action.payload.num};
        case "LOGIN":
            return {
                ...state, 
                id:action.payload.id, 
                password:action.payload.password}
        default:
            return{...state}
    }

}

export default reducer;