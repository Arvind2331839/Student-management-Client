import React from "react";
import { useEffect, useState } from "react";
// import { BiSolidShow } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";


const UserList = () => {
const [render,setRender]=useState(false)
const [data, setData] = useState([]);
  console.log(data);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://student-management-server-x11p.onrender.com/auth/getData");
        setData(response.data);
       } catch (error) {
        console.log(error);
      }
    };
    fetchData();
      }, [render]);

     
        const deleteUser = async (userId) => {
          try {
            await axios.delete(`https://student-management-server-x11p.onrender.com/auth/DeleteData/${userId}`);
            setData((prevUser) => prevUser.filter((user) => user._id !== userId));
            setRender(true)
            // fetchData(); // You can also remove fetchData() from here since you are already calling it after the axios request
            
          } catch (error) {
            console.log(error);
          }
        };
        

  return (
    <div className="bg-slate-300 rounded-md  sm:w-[75%] mx-auto mt-20 sm:p-10">
      <h2 className="font-bold text-4xl text-center mb-3">User List</h2>
      <div className="flex flex-col">
        <button className=" bg-green-600 rounded w-24 my-3 m-auto py-1 text-sm items-start "><Link className="m-3 cursor-pointer" to="AddUser">Add User</Link></button>
     <table className="">
      {/* <button className="bg-green-600 rounded px-1 mb-1 flex justify-end">Add +</button>
           */}
        <thead >
          <tr className=" bg-slate-400 rounded-md sm:px-2 w-[70%] text-sm sm:text-lg">
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        {data.map((data) => (
          <tbody key={data._id}>
          <tr className="text-center">
            <td>{data.Name}</td>
            <td>{data.Age}</td>
            <td>{data.Email}</td>
            <td>{data.Mobile}</td>
            <td className="text-center ">
            {/* <button className=" bg-green-700 rounded p-2 m-2"><BiSolidShow/></button> */}
            <Link to={`/UpdateUser/`+data._id}> <button className=" bg-yellow-400 rounded m-2 p-2  "><MdEdit/></button></Link>
            {/* <Link to="/UpdateUser"> <button className=" bg-yellow-400 rounded m-2 p-2  "><MdEdit/></button></Link> */}
            <button onClick={()=>deleteUser(data._id)} className=" bg-red-600 rounded p-2 m-2">< MdDelete/></button>
           </td>
          </tr>
         </tbody>

          ))}
        
      </table>
    </div>
      </div>
   );
};

export default UserList;
