import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AddUser = () => {
const [Name,setName]=useState('')
const [Age,setAge]=useState('')
const [Email,setEmail]=useState('')
const [Mobile,setMobile]=useState('')

const navigate = useNavigate();

 const handlSubmitt= async(e)=>{
 try{
e.preventDefault()
const fetchData=await axios.post("https://student-management-server-x11p.onrender.com/auth/register",{Name,Age,Email,Mobile})
console.log(fetchData.data)
setName('')
setAge('')
setEmail('')
setMobile('')
navigate("/");
  }catch(error){
console.log(error);
  }
 }

  return (
    <div className="bg-slate-400 rounded-md m-auto mt-20 p-10 w-2/3 md:w-1/3">
      <h2 className="font-bold text-2xl sm:text-4xl text-red-400 text-center mb-5 font-serif">Add User</h2>
      
      <form className="mx-auto" onSubmit={handlSubmitt}>
        <div className="flex flex-col">
        <input className="m-2 rounded border border-red-400 outline-none" type="name" value={Name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} />
        <input className="m-2 rounded border border-gray-600 outline-none" type="age" value={Age} placeholder="Enter Age" onChange={(e)=>{setAge(e.target.value)}}/>
        <input className="m-2 rounded border border-gray-600 outline-none" type="email"value={Email} placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className="m-2 rounded border border-gray-600 outline-none" type="Mobile"value={Mobile} placeholder="Enter Mobile" onChange={(e)=>{setMobile(e.target.value)}}/>
    
      <button className="focus:outline-none text-white font-serif bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 m-auto mt-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submitt</button>
        
      </div>
      </form>

 </div>
  );
};

export default AddUser;
