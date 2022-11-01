import axios from "axios";
import React, { useState } from "react";

const InputTodo = ({ setEditAlert, setRefresh }) => {
  const [description, setDescription] = useState(""); 


  const changeHandler = (e) => {
    setDescription(e.target.value);
    console.log(description)
  }

  const submitHandler =async (e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:2020/postgreSQL/post",{ description:description })
      .then((data)=>{
        console.log(data);
        // window.location = "/";
        setRefresh(data);
        setEditAlert(true);
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="container mt-5">
      <form action="" onSubmit={ submitHandler }>
        <div class="d-flex ">
          <input
            type="text"
            class="form-control"
            onChange={ changeHandler }
          />
          <button className="btn btn-success">submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
