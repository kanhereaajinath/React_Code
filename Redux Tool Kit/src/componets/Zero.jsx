import { counterSliceAction } from "../ReduxCmp/Slice"
import { Store } from "../ReduxCmp/store"
export const Zero =()=>
{
    const buttonclick2=()=>{
        Store.dispatch(counterSliceAction.resetCount())
        console.log(Store.getState().count)
    }
    return (
        <>
       <button onClick={buttonclick2}>Zero</button>
        </>
    )
}