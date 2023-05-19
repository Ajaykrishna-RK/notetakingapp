import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { checkAuthApi, clearloginState, loginApi } from '../../redux/auth/loginSlice'

function Login() {
  const dispatch = useDispatch()
const navigate = useNavigate()
  const {loginLoading,logundefined} = useSelector((state)=>state.login)

const [logincred,setLoginCred] = useState({
  email:"",
  password:"",
})




const handleChange = (e) =>{
setLoginCred({...logincred,[e.target.name]:e.target.value})
}

const handleSubmit = (e) =>{
  e.preventDefault()

  dispatch(loginApi(logincred))

}


useEffect(()=>{
if(loginLoading){
navigate("/")
}

},[loginLoading])

const [invalid,setInvalid] = useState(false)

useEffect(()=>{

if(logundefined){
 setInvalid(true)
}

return()=>{

  dispatch(clearloginState())
}
},[logundefined])


  return (
    <div>

<div className='justify-center items-center flex mt-10'>
<h1 className='text-5xl text-white'>Sign-in</h1>

</div>

<div className='justify-center items-center flex mt-28 ml-4 mr-4'>

<div className='w-96'>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    
    <div class="mb-4">

     
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
       Email
      </label>
      <input  value={logincred.email} onChange={(e)=>handleChange(e)} name='email' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Email"/>
   
    </div>
    {invalid && <div> <h1 className='text-red-600'>check your email or password</h1> </div>}
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input value={logincred.password} name='password'  onChange={(e)=>handleChange(e)}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Password"/>
   
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <Link to="/signup" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
       Dont have an account? SignUp
      </Link>
    </div>
  </form>
 
</div>


</div>




    </div>
  )
}

export default Login