import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchSingleTodo, removeSelectedTodo } from '../../redux/fetchingApi/fetchSingleTodoApi'
import EditTodo from '../edittodo/EditTodo'
import DeleteTodoApi, { deleteTodo } from '../../redux/fetchingApi/DeleteTodoApi'

function Singlepage() {

  const [editopen,setEditOpen] = useState(false)

const navigate = useNavigate()

    const dispatch = useDispatch()
const {id} = useParams()

const {singleTodo} = useSelector((state)=>state.Todo)

useEffect(()=>{
    dispatch(fetchSingleTodo(id))

    return ()=>{
        dispatch(removeSelectedTodo())
    }

},[])

const handleDelete = (id) =>{
dispatch(deleteTodo(id))
navigate("/")
}

  return (
    <div>
      {editopen ? <EditTodo singleTodo={singleTodo} id={id} setEditOpen={setEditOpen}/> :  (
<div className='justify-center items-center flex mt-20'>
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"> {singleTodo?.title} </div>
    <p class="text-gray-700 text-base">
      {singleTodo?.description}
    </p>
    <div className='justify-end items-end flex'> 
  <button onClick={()=>setEditOpen(true)} className="bg-blue-700 px-4 shadow-xl text-white rounded-lg mr-3" >Edit</button>
    <button   onClick={()=>handleDelete(singleTodo._id)} className="bg-blue-700 px-4 shadow-xl text-white rounded-lg mr-3">delete</button>
    </div>
  
  </div>
  
</div>
</div>
      )}




    </div>
  )
}

export default Singlepage