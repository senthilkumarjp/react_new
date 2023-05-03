import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Update(props) {
  const [_id1, setId] = useState(0);
  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [image, setImage] = useState("");


  // let id = useParams();
  useEffect(() => {
    //   setId(id._id);
    //   setEmail(id.email);
    //   setPassword(id.password);
    setId(localStorage.getItem("_id"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
    setImage(localStorage.getItem("image"))

  }, []);



  const nav = useNavigate();

  function submitdata(e) {
    e.preventDefault();
    const data=new FormData();
    data.append("_id",_id1)
    data.append('image',image);
    data.append('email',email1);
    data.append('password',password1)
    axios
      .put(`http://localhost:4000/update/${_id1}`, data
      )
      .then((res) => {
        setImage(null)
        console.log(res.data);
        nav("/read");
      })
  }



  return (
    <div>
      <form onSubmit={submitdata}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email1}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password1}
        ></input>
        <br></br>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        {/* <img height="100px" width="100px" src={"http://localhost:4000/" + image} alt="not loaded"></img>
        {image.filename} */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Update;
