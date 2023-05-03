import './Create.css';
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image,setImage] = useState("");

  const navi = useNavigate();

  function submitdata(e) {
    e.preventDefault();
    const data=new FormData();
    data.append('image',image);
    data.append('email',email);
    data.append('password',password)
    axios.post("http://localhost:4000/add", 
   
      data
      // "Access-Control-Allow-Origin": "*"
    )
    .then((res)=>{
      console.log(res.data);
      setEmail("")
      setPassword("")
      setImage('')
      navi("/read");
    })
  }
  return (
    <>
      <h1>Create a Data</h1>
      <form onSubmit={submitdata}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password} required
        ></input>
        <br></br>
        <input type='file' onChange={(e)=>{setImage(e.target.files[0]); console.log(e.target.files[0]);}} required></input><br></br>
        <button type="submit">submit</button>
      </form>
      {/* <img src="https://media.istockphoto.com/id/1332176260/photo/man-working-at-a-creative-office-using-his-computer-and-people-moving-at-the-background.jpg?s=1024x1024&w=is&k=20&c=_P-KKUz-dsJoMIFwR77uS-SVRpigRloyAz3VvjJk06A=" width={500} height={200} alt='load'></img> */}
      {/* {email}<br></br>
    {password} */}
    </>
  );
}

export default Create;
