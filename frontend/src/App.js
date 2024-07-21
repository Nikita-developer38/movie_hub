
import React from 'react';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Movies from './components/Movies/Movies';
import Admin from './components/Admin/Admin';
import Auth from './components/Auth/Auth';
import AdminAuth from './components/Auth/AdminAuth';
import { useSelector } from 'react-redux';


function App() {
  const isUserLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  })
  const isAdminLoggedIn = useSelector((state) => {
    return state.admin.isLoggedIn;
  })
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);



  return (
    <div className="App">
      <Header />

      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/adminAuth' element={<AdminAuth />} />
        </Routes>
      </section>

    </div>

  );
}

export default App;
