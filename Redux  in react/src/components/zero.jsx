import { store } from "./Store";
const ZERO={type:"zero",value:0}
export const Zero=()=>{
    const buttonclick3=()=>{
        store.dispatch(ZERO)
    }
    return(
        <button onClick={buttonclick3}> Zero </button>
    )
}