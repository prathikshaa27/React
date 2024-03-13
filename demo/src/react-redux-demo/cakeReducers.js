import { Buy_cake } from "./cakeTypes"

const initialState = {
    number_of_cakes:10
}

const cakeReducer =(state=initialState,action)=>{
    switch(action.type){
        case Buy_cake:
            return{
                ...state,
                number_of_cakes:state.number_of_cakes-action.payload

            }
            default:return state
    }
}
export default cakeReducer;