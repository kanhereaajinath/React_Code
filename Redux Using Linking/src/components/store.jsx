import {createStore} from "redux";
const initalState={
    counter:0

}
const reducer=(state=initalState,action)=>{
    switch (action.type)
    {
        case "inr":
            return{counter:state.counter+action.value}
            case "dcr":
                return{counter:state.counter-action.value}

                case "zero":
                    return{counter:0}
                    default:
                        return state
    }
}
export const store=createStore(reducer)