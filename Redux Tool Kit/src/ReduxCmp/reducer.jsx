const initalState ={
    count:0,

}
const  counterReducer=(state=initalState,action)=>{
    switch(action.type)
    {
        case "Increment":
            {
                return{
                    count:state.count+1
                }
            }
            case "Decrement":
                {
                
                        return{
                            count:state.count
                        }

                    
                }
                case "Reset":{
                    return{
                        count:0
                    }
                }

    }
}