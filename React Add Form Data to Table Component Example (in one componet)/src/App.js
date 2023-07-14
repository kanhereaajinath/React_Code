import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({ name: "",  email: "", profile: "",});
  const onValChange = (event) => {
    const value = (res) => ({ ...res, [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", profile: "" };
      setFormObject(isEmpty);
    }
  };
  return (
    <div>
    <table  border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.profile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
     
      <input
            type="text" placeholder="Name"onChange={onValChange}value={formObject.name} name="name"/>
          <br></br>
          <input
            type="email"   placeholder="Email" onChange={onValChange} value={formObject.email} name="email" />
            <br></br>
            <input
            type="text" placeholder="Profile"  onChange={onValChange} value={formObject.profile}  name="profile"  />
            <br></br>
            <input  type="submit"   onClick={onFormSubmit} />
            <br></br>
           
     
      </div>
      
  );
}

export default App;
