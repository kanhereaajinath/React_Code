import { store } from "./store";
export const Home=()=>{
    return (
        <>
        <div>
            Home page 
           
        </div>
        <p>counter is:{store.getState().counter}</p>
        </>
    )
}