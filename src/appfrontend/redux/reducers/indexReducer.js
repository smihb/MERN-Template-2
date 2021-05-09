const initialState = {
    state: 'redux connected'
}

const indexReducer = (state = initialState,action) =>{
    switch(action.type){
        default: return state
    }
}
export default indexReducer;