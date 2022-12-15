import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
// import axios from 'axios'
import './Body.module.css'

import './App.css';


// import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/NavBarComponent/NavBar';
import Homepage from './Pages/HomePage/HomePage';
import Journey from './Pages/Journey/Journey';

function App() {

  

  return (
    <React.Fragment >
    {/* <ToastContainer /> */}
    <Routes>
      {/* <Route path="/" element={<TodoList fetchTodos={fetchTodos} isLoading={isLoading} todos={todos} settodos={setTodos} />} />
      <Route path="/:todo_id" element = {<TodoDetails  todos={todos}/>} />
      <Route path="/playground" element={<PlayGroundForm />} />
      <Route path="/login" element={<FormikLogin />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/journey" element={<Journey />} />
      
    </Routes>
    </React.Fragment>
  );
  
}

export default App;

