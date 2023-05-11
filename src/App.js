import React from "react";
import "./App.scss";
import Navbar from "./components/Navgation";
import Home from "./views/Home";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

function App() {
  const [ShowModal, SetShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;
  const fakeAuth = {
    login: (name, account, cb) => {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout: (cb) => {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

  const PrivateRoute = ({ Component, logged}) => {
    return logged ? <Component name={name} account={account} /> : <Navigate to='/login' />
  }
  return (
    <div className="App">
      <Navbar
        handleCreateAccount={() => SetShowModal(true)} logged={isLogged} auth={fakeAuth}/>
        
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login auth={fakeAuth} />}></Route>
        <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} logged={isLogged} />} />
      </Routes>
      <Home/>
      <AccountModal show={ShowModal} handleClose={() => SetShowModal(false)} />
      <Footer />
    </div>
  );
}

export default App;
