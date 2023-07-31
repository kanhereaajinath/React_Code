
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useReducer } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const Blogs = () => {
    return (
        <>
    <h1>This is demo</h1>

            </>
    )
}
const Home = () => {
    return (
        <h1>This is the home page</h1>
    )
}
const Blog = () => {
    const { id } = useParams()

    
    return(
        <h1>this is demo</h1>
    )
}
const Demo = () => {
    
    const [userInfo, setUserinfo] = useState([])
    let p1 = axios.get("https://jsonplaceholder.typicode.com/users")
    p1.then((obj) => {
        console.log("Get Data")
        console.log(obj.data)
        setUserinfo(obj.data)
    })
    p1.catch((err) => {
        console.log(err)
    })
      
    return(

        <table border={1} >
                
                <>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                    {userInfo.map((row) => {
                        return (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.username}</td>
                                <td>{row.email}</td>
                            </tr>
                        )
                    })}
                </>

                
            </table>
    )

}


function App() {
    return (
        <>
            <ul>
                <li>  <Link to='/home'>Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to='/Blog'>Blog</Link></li>
                <li><Link to='Demo'>Demo</Link></li>
            </ul>
            <Routes>
                <Route path='/Home' element={<Home></Home>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/Demo' element={<Demo></Demo>}></Route>
                <Route path='/Blog' element={<Blog></Blog>}></Route>
                {/* <Route path='/contacts'element={<Contacts></Contacts>}></Route> */}
            </Routes>
        </>
    )



}


export default App
