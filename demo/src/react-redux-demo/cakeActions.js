import { Buy_cake } from "./cakeTypes"
export const buyCake =(number=1)=>{
return{
    type:Buy_cake, //defining string as constants
    payload:number
}
}