import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  // const user=
  const navigate = useNavigate();
  const [Data,setData]= useState({
    Name:"",
    Age:"",
    Email:"",
    Mobile:""
  })
  // console.log(Data);
  
const {id}= useParams();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://student-management-server-x11p.onrender.com/auth/getOneData/${id}`);
      setData(response.data);
     } catch (error) {
      // console.log(error);
    }
  };

  fetchData();
}, []);

const handleSubmitt = async(e)=>{
  e.preventDefault()
  try{
    await axios.put(`https://student-management-server-x11p.onrender.com/auth/UpdateData/${id}`,Data)
    .then((responce)=>{
    setData({
      Name: "",
      Age: "",
      Email: "",
      Mobile: ""
    });
    navigate("/")
    console.log(responce)
  })
    .catch((error)=>{
      console.log(error);
    })
    
}catch(error){
console.log(error);
  }
}

const handleChange=(e)=>{
  setData({...Data,[e.target.name]:e.target.value})
  console.log(Data);
}

  return (
    <div className="bg-slate-400 rounded-md m-auto mt-20 p-10 w-2/3 md:w-1/3">
      <h2 className="font-bold text-2xl sm:text-4xl text-center mb-5 font-serif">Update User</h2>
      
      <form className="mx-auto" onSubmit={handleSubmitt}>
        <div className="flex flex-col">
        <input className="m-2 rounded border border-gray-600 outline-none" name="Name" type="Name"onChange={handleChange} value={Data.Name} placeholder="Enter Name" />
        <input className="m-2 rounded border border-gray-600 outline-none" name="Age" type="Age"onChange={handleChange}  value={Data.Age} placeholder="Enter Email" />
        <input className="m-2 rounded border border-gray-600 outline-none" name="Email" type="Email"onChange={handleChange} value={Data.Email} placeholder="Enter Age" />
        <input className="m-2 rounded border border-gray-600 outline-none" name="Mobile" type="ImgURL"onChange={handleChange}  value={Data.Mobile} placeholder="Enter Mobile" />
  
        <div className="flex">
        {/* <button className="flex flex-col mt-6 px-4 rounded  bg-green-600  mx-auto">Submitt</button> */}
        <button className="focus:outline-none text-white font-serif bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 m-auto mt-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submitt</button>
        </div>
      </div>
      </form>

 </div>
  );
};

export default UpdateUser;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UpdateUser = () => {
//   const navigate = useNavigate();
//   const [Name, setName] = useState('');
//   const [Age, setAge] = useState('');
//   const [Email, setEmail] = useState('');
//   const [Mobile, setMobile] = useState('');

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:2000/auth/getOneData/${id}`);
//         setName(response.data.Name);
//         setAge(response.data.Age);
//         setEmail(response.data.Email);
//         setMobile(response.data.Mobile);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleSubmitt = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:2000/auth/UpdateData/${id}`, { Name, Age, Email, Mobile });
//       setName('');
//       setAge('');
//       setEmail('');
//       setMobile('');
//       navigate("/", { replace: true }); // Use replace to replace the current entry in the history stack
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="bg-slate-400 rounded-md m-auto mt-20 p-10 w-2/3 md:w-1/3">
//       <h2 className="font-bold text-2xl sm:text-4xl text-center mb-5 font-serif">Update User</h2>

//       <form className="mx-auto" onSubmit={handleSubmitt}>
//         <div className="flex flex-col">
//           <input className="m-2 rounded border border-gray-600 outline-none" name="Name" type="Name" onChange={(e) => { setName(e.target.value) }} value={Name} placeholder="Enter Name" />
//           <input className="m-2 rounded border border-gray-600 outline-none" name="Age" type="Age" onChange={(e) => { setAge(e.target.value) }} value={Age} placeholder="Enter Email" />
//           <input className="m-2 rounded border border-gray-600 outline-none" name="Email" type="Email" onChange={(e) => { setEmail(e.target.value) }} value={Email} placeholder="Enter Age" />
//           <input className="m-2 rounded border border-gray-600 outline-none" name="Mobile" type="ImgURL" onChange={(e) => { setMobile(e.target.value) }} value={Mobile} placeholder="Enter Mobile" />

//           <div className="flex">
//             <button className="focus:outline-none text-white font-serif bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 m-auto mt-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateUser;
