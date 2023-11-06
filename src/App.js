import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Invoice from './components/App';
import AuthContext from './context/auth';
import { Login, ScrollToTop, Header, Error, Home, User, NewClient, NewSupports, NewAttendant } from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const PrivateRoute = ({ element }) => {
    if (user) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Error />}></Route>
        {/* Rota protegida */}
        <Route
          path="/home"
          element={
            <PrivateRoute
              element={<Home/>}
            />
          }
        />
        <Route
          path="/invoice"
          element={
            <PrivateRoute
              element={<Invoice/>}
            />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute
              element={<User/>}
            />
          }
        />
        <Route
          path="/newclient"
          element={
            <PrivateRoute
              element={<NewClient/>}
            />
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoute
              element={<NewSupports/>}
            />
          }
        />
        <Route
          path="/attendant"
          element={
            <PrivateRoute
              element={<NewAttendant/>}
            />
          }
        />
        <Route exact path="/" element={user ? <Home /> : <Login/>} />
        {/* <Route exact path="/invoice" element={user ? <Invoice /> : <Login/>} /> */}
        {/* <Route path="/home" element={<Home />}></Route> */}
        {/* <Navigate to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}
