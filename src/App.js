import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoice from './components/App';
import AuthContext from './context/auth';
import { Login, ScrollToTop, Header, Error, Home } from './pages';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login/>} />
        <Route exact path="/invoice" element={user ? <Invoice /> : <Login/>} />
        <Route path="/login" element={Login} />
        {/* <Navigate to="/" /> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
