import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <UserList />
      <Routes>
        <Route path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
