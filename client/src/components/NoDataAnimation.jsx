import React from 'react'
import animatedData from "../assets/empty.json"
import Lottie from "lottie-react";

function NoDataAnimation() {
  return (
    <>
<div className='justify-center items-center flex mt-10'>
  <h1 className='text-white text-5xl'> Notes are Empty</h1>

</div>
<div className='justify-center items-center flex'>

<Lottie animationData={animatedData} loop={true}  style={{height:"400px",width:"400px"}}/>


    </div>
    </>
  
  )
}

export default NoDataAnimation