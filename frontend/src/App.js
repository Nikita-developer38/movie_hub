
import React from 'react';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Movies from './components/Movies/Movies';
import Admin from './components/Admin/Admin';
import Auth from './components/Auth/Auth';
import AdminAuth from './components/Auth/AdminAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userActions, adminActions } from './store';
import Booking from './components/Booking/Booking';
import 'react-bootstrap'
import Profile from './components/Profile/Profile';
import AddMovie from './components/Movies/AddMovie';



function App() {
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  })
  const isAdminLoggedIn = useSelector((state) => {
    return state.admin.isLoggedIn;
  })
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem('userId')) {
      dispatch(userActions.login());

    }
    else if (localStorage.getItem('adminId')) {
      dispatch(adminActions.login());

    }


  }, [])



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
          <Route path='/booking/:id' element={<Booking />} />
          <Route path='/userProfile' element={<Profile />} />
          <Route path="/addMovies" element={<AddMovie />} />
        </Routes>
      </section>

    </div>

  );
}

export default App;
