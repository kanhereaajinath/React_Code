import { createStore } from "redux";
//intialState:- this is the bydefault value of the data store .it can be simple value it can be object 

const intialState={
    counter :0
}
//reducer-: Reducer is function present inside store object it is use to perfrom the opertion.
const reducer=(state=intialState,action)=>{
    //action :=- it is an object whci specify which operation to perform. it has two parameter 
    
    //type -:the value for this attribute specify operation to perfrom 
    //value-: this is value we want to update with the store 
    switch (action.type)
    {
        case "inr":
            return {counter:state.counter+action.value}
case "dcr":
    return {counter:state.counter-action.value}
    case "zero":
        return{counter:0}
default:
    return state
    }
}
export const store=createStore(reducer)