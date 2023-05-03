import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Read.css";
// import Update from "./update";

function Read() {
  const [first, setfirst] = useState([]);

  function getdata() {
    axios
      .get("http://localhost:4000/ge")
      .then((res) => {
        console.log(res.data);
        setfirst(res.data);

      });
  }
function Up(_id,email,password,image){
localStorage.setItem("_id",_id);
localStorage.setItem("email",email);
localStorage.setItem("password",password);
localStorage.setItem("image",image);

ret('/update');
}
 
// function Up(id){
//   ret('/update',id);
// }

const ret = useNavigate();
  // getdata();
  function del(id){
axios.delete(`http://localhost:4000/${id}`
).then(()=>{
  getdata();
})
}
useEffect(() => {
  getdata();
}, []);

let i=1;
if(first.length === 0){
  return (
  <div><h1>No Data Found!</h1>
  <button className="btn" onClick={()=> ret('/')}>Back to Form</button>
  </div>)
}
  return (
    <div>
      <h1>List of datas</h1>
      <button onClick={()=> ret('/')}>Back to Form</button>
      <table>
        <thead>
          <tr>
            <th>s.no</th>
            <th>#</th>
            <th>Email</th>
            <th>password</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
       
        {first.map((f) => (
          <tbody key={f._id}>
            <tr>
              <td>{i++}</td>
              <td>{f._id}</td>
              <td>{f.email}</td>
              <td>{f.password}</td>
              <td><img height="100px" width="100px" src={"http://localhost:4000/" + f.image} alt="not loaded"></img></td>
              <td>
                {/* <Link to={"/update/" + f._id}>edit</Link> */}
                <button onClick={()=>Up(f._id,f.email,f.password,f.image)}>edit</button>&nbsp;
                <button onClick={()=>del(f._id)}>delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      
    </div>
  );
}

export default Read;
