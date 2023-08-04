import { store } from "./store";
const ZERO={type:"zero",value:0}
import { useState } from "react";
export const Zero=()=>{
    const [count,setCount]=useState(store.getState().counter)
    const show=()=>{
        setCount(store.getState().counter)
    }
    store.subscribe(show)
    const buttonClick3=()=>{
        store.dispatch(ZERO)
    }
    return(
        <>
        <button onClick={buttonClick3}> Zero </button>
        couter is: {count}
        </>
    )

}