import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../../redux/fetchingApi/postTodoApi";
import { useNavigate } from "react-router-dom";

function CreateTodo() {

    const dispatch = useDispatch()

const navigate = useNavigate()

    const [createtodo,setCreateTodo] = useState({
        title:"",
        description:""
    })

    const handleChange = (e) =>{
        setCreateTodo({...createtodo,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       dispatch(postTodo(createtodo))
       navigate("/")
       
    }

  return (
<>

<div className="justify-center items-center flex mt-10">

<h1 className="text-6xl text-white">CREATE YOUR NOTE</h1>

</div>


<div className="justify-center items-center flex mt-20">
      <div
        style={{ width: "90%" }}
        class="rounded overflow-hidden shadow-lg bg-gray-100 py-6"
      >
        <form className="justify-center items-center block" onSubmit={handleSubmit}>
          <div class="w-full px-3 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            
            >
              Title
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="title"
              name="title"
              value={createtodo.title}
              onChange={(e)=>handleChange(e)}
            />
          </div>

          <div class="w-full px-3 mt-5">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Description
            </label>
            <textarea
              class="appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              rows={8}
              placeholder="description"
              name="description"
              value={createtodo.description}
              onChange={(e)=>handleChange(e)}
            />
          </div>

<div className="justify-center items-center flex mt-8">

<button
            style={{ height: "35px" ,width:"30%" }}
            className="bg-blue-700 px-4 shadow-xl text-white rounded-lg"
          >
            Submit
          </button>

</div>
          
        </form>
      </div>
    </div>



</>


   
  );
}

export default CreateTodo;
