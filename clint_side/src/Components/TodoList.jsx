import axios from "axios";
import React, { useEffect, useState } from "react";
// import EditTodo from "./EditTodo";

const TodoList = () => {
  const [state, setstate] = useState([]);
  const [editDescription,setEditDescription] = useState("");
  const [lineThrough,setLineThrough] = useState(false);

  const lineThrFun=() => {
    if(lineThrough){
      setLineThrough(false)
    }else{
      setLineThrough(true)
    }
  }

  

  const editHandler = async(id) => {
    await axios.put(`http://localhost:2020/postgreSQL/put/${id}`,{description:editDescription})
    .then((data)=>console.log(data.data))
    .catch((err)=>console.log(err))
  }

  const changeHandler = (e) => {
    setEditDescription(e.target.value);
  };

  const getDataId = async(id) => {
    await axios.get(`http://localhost:2020/postgreSQL/${id}`)
    .then((data)=>{
      setEditDescription(data.data[0].description);
      console.log(data.data[0].description)
    })
    .catch((err)=>console.error(err))
  }

  const getTodos = async () => {
    await axios
      .get("http://localhost:2020/postgreSQL")
      .then((data) => {
        setstate(data.data);
        console.log(state);
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`http://localhost:2020/postgreSQL/delete/${id}`)
      .then((data) => {
        getTodos();
        alert("Todo deleted!🤗");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTodos();
  }, [editDescription, state]);

  return (
    <div className="container mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.map((data, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.description}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        getDataId(data.todo_id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <div
                      className="btn btn-danger"
                      onClick={() => deleteTodo(data.todo_id)}
                    >
                      delete
                    </div>
                  </td>
                </tr>
                {/* modals */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Modal title 
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={editDescription}
                              onChange={changeHandler}
                            />
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary" onClick={ () => editHandler(data.todo_id)}>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
