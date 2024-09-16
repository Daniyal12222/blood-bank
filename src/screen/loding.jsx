import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import img from '../img/loding.png'

const uid = localStorage.getItem('userUid')




const  Loder =  () => {
    const navigate = useNavigate()
  useEffect(
    () => {
        setTimeout(()=>{

            if (!uid) {
              navigate('/signin')
            }else{
              navigate('/home')
            }
        },2000)
    },
    [uid]
  )
   

    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <img src={img} alt="" className=" fixed w-20 mb-10 " />
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-500">
            </div>
            <p className="mt-6 text-gray-700 font-semibold">Loading...</p>
          </div>
        </div>
      );
   
    
}

export default Loder