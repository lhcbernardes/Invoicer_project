import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoice from './components/App';
import AuthContext from './context/auth';
import { Login, ScrollToTop, Header, Error } from './pages';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {user ? (
                <Invoice />
              ) : (
                <React.Fragment>
                  <Login />
                </React.Fragment>
              )}
            </React.Fragment>
          }
        ></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
