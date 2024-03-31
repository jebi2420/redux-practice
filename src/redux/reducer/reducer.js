let initialState = {
    count: 0
}

function reducer(state=initialState, action){
    console.log("action?", action)
    if(action.type === "INCREMENT"){
        return {...state, count: state.count + 1}
    }
    return {...state}

    // switch로 쓰는 경우 (if문 쓸지 switch쓸지는 회사마다 다름)
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + 1};
        default:
            return{...state}
    }

}

export default reducer;