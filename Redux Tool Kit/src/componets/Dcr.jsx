import { counterSliceAction } from "../ReduxCmp/Slice"
import { Store } from "../ReduxCmp/store"
export const Dcr=()=>{
    const buttonclick2=()=>{
        Store.dispatch(counterSliceAction.decrementCount())
        console.log(Store.getState().count)
    }
    return (
        <>
     <button onClick={buttonclick2}>Decrement</button>
        </>
    )
}