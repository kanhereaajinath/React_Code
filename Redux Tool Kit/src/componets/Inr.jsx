import { useState } from "react"
import { counterSliceAction } from "../ReduxCmp/Slice"
import { Store } from "../ReduxCmp/store"
export const Inr=()=>{
    
    const buttonclick=()=>{
        Store.dispatch(counterSliceAction.incrementCount())
        console.log(Store.getState().count)
      
    }
   
    return(
        <>
       <button onClick={buttonclick}>Increment</button>
    <div>
  
    </div>
        </>
    )
}