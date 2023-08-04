import { store } from "./Store";
const DCR={type:"dcr" ,value:2}
export const Dcr=()=>{
    const buttonclick2=()=>{
        store.dispatch(DCR)
        //dispatch :- dispatch function present inside store object it is use to perfrom the operation from 
        //reducer it has one paramenrter i.e action object
    }
    return(
        <button onClick={buttonclick2}>Decerment</button>
    )
}
