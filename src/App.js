import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Invoice from './components/App';
import AuthContext from './context/auth';
import { Login, ScrollToTop, Header, Error, Home, User } from './pages';

export default function App() {
  const { user } = useContext(AuthContext);
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
        <Route exact path="/" element={user ? <Home /> : <Login/>} />
        {/* <Route exact path="/invoice" element={user ? <Invoice /> : <Login/>} /> */}
        {/* <Route path="/home" element={<Home />}></Route> */}
        {/* <Navigate to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}
