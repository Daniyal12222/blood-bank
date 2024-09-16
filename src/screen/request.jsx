import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";


function Request() {

    const navigate = useNavigate();
    const [doner, setDoner] = useState([]);
    const [myUid, setMyUid] = useState('');
    // const [userName, setUserName] = useState('')

    useEffect(() => {
        getUsers()
    },[])

    let getUsers = async () => {
        const uid = localStorage.getItem('userUid');
        setMyUid(uid)
        let listDoner = []
        const querySnapshot = await getDocs(collection(db, "doner"));
        querySnapshot.forEach((doc) => {
            listDoner.push(doc.data());
            console.log(doc.data());
            
            
        });
        setDoner(listDoner)
        

    }
    return (
        <>
       <Navbar />
            
        <div className="w-[100%] h-[100vh] p-2 flex flex-col items-center pt-20  ">
            {doner.map(item => (
                
                <div key={item.uid}  className="w-[80%] bg-red-500  border mt-1 cursor-pointer overflow-y-auto  flex justify-between px-5 py-1 rounded">
                    <div className="flex gap-2 bg-red-500">
                    {/* <img width="64" height="64" src={"https://img.icons8.com/nolan/64/user-default.png" }alt="user-default"/> */}
                    <div className="flex flex-col text-lg p-3  text-white gap-2 ">
                        <h1 className="font-medium text-xl">Name : {item.name}</h1>
                        <h1 className="text-sm">Email : {item.email}</h1>
                        <h1 className="text-sm">Phone : {item.phone}</h1>
                        <h1 className="text-sm">Blood : {item.blood}</h1>
                        <h1 className="text-sm">City : {item.city}</h1>
                     
                        
                    </div>
                    </div>


                </div>
               
            ))}
        </div>
        </>
    )
}

export default Request