import { Buy_icecream } from "./iceCreamTypes"

const initialState = {
    number_of_icecreams:20
}

const iceCreamReducer =(state=initialState,action)=>{
    switch(action.type){
        case Buy_icecream:
            return{
                ...state,
                number_of_icecreams:state.number_of_icecreams-1

            }
            default:return state
    }
}
export default iceCreamReducer;