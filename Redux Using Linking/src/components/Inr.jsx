import { useState } from "react"
import { store } from "./store"

const INR={type:"inr",value:2}
export const Inr=()=>{
    const [count,setCount]=useState(store.getState().counter)
    const show=()=>{
        console.log(store.getState().counter)
        setCount(store.getState().counter)
    }
    store.subscribe(show)
    const buttonClick1=()=>{
        store.dispatch(INR)
    }
    return(
        <>
        <button onClick={buttonClick1}> Increment</button>
        counter is :{count}
        </>
    )
}