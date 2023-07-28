import { useParams } from "react-router-dom"
import users from "./Mydata"
export const Blog=()=>{
    const {name}=useParams()
    const user =users.find((n)=>n.Name===name)
    return(
      <>
      <h1>Single recod</h1>
      <table border={1}>
        <th>Name</th>
        <th>Gender</th>
        <th>Homeworld</th>
        <th>Born</th>
        <th>Jedi</th>
        <tr>
            <td>{user.Name}</td>
            <td>{user.Gender}</td>
            <td>{user.HomeWorld}</td>
            <td>{user.Born}</td>
            <td>{user.jedi}</td>
        </tr>
      </table>
      </>
    )
}
export default users