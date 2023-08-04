import { store } from "./Store";
const INR={type:'inr',value:2}
export const Inr=()=>{
    const buttonclick1=()=>{
        store.dispatch(INR)
    }
    return(
        <button onClick={buttonclick1}>Incrment</button>
    )
}
    
