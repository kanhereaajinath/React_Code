import { Link } from "react-router-dom"
import { users } from "./Mydata"

export const Blogs=()=>{
    return(
        <>

        <h1>Blogs </h1>
        <table>
            {users.map((row)=>{
                return(
                    <tr key={row.Name}>
                        <td><Link to={`/blog/${row.Name}`}>{row.Name}</Link></td>
                    </tr>
                )
            })}
        </table>
        </>
    )
}