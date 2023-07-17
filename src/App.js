// import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
//  import { Component } from 'react';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
// import { Toaster } from 'react';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      {/* <Toaster position = 'top-center' /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<Home />} path='home' />
          <Route element={<Login />} path='login' />
          <Route element={<Signup />} path='signup' />
          <Route element={<AddBlog />} path='addblog' />
          <Route element={<ViewBlog />} path='viewblog' />
          <Route element={<Profile />} path='profile' />


        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
