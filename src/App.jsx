import React from 'react'
import UserList from './components/UserList'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import UpdateUser from './components/UpdateUser';
import AddUser from './components/AddUser';

const App = () => {
  return (
    <div class="bg-cover bg-center h-screen bg-[url('C:\Users\ak818\OneDrive\Desktop\CURD\front\src\assets\BG.jpg')]">
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/AddUser" element={   <AddUser/> } />
        <Route path="/" element={<UserList/>} />
        <Route path="/UpdateUser/:id" element={   <UpdateUser/> } />
      </Routes>
    </BrowserRouter>
</div>
  )
}

export default App


