import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './app';
import { Login, Register } from "./auth";

//import Layout from '../Components/Layout';
//import Home from '../pages/Home';
//import Login from '../Components/Login';
//import RecoveryPassword from '../Components/RecoveryPassword';
//import SignUp from '../Components/SignUp';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/recovery-password' element={<RecoveryPassword/>} />
            <Route exact path='/sign-up' element={<SignUp/>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;