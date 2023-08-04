import { useState } from "react";
import { store } from "./store";

    const DCR={type:"dcr",value:2}
    export const Dcr=()=>{
        const [count,setCount]=useState(store.getState().counter)
        const show=()=>{
            setCount(store.getState().counter)
        }
        store.subscribe(show)
        const buttonClick2=()=>{
            store.dispatch(DCR)
        }
      return(
        <>
        <button onClick={buttonClick2}>Decrement</button>
        couter is :{count}
        </>
      )

}