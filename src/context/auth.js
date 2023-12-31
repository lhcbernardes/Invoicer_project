import { createContext, useState } from 'react';

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthContextProvider = ({ children }) => {
  // const { setShowLogoutModal } = useContext(State);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   netlifyIdentity.on("login", (user) => {
  //     setUser(user);
  //     netlifyIdentity.close();
  //   });

  //   netlifyIdentity.on("logout", () => {
  //     setUser(null);
  //   });

  //   netlifyIdentity.on("init", (user) => {
  //     setUser(user);
  //   });

  //   netlifyIdentity.init();

  //   return () => {
  //     netlifyIdentity.off("login");
  //     netlifyIdentity.off("logout");
  //   };
  // }, []);

  const login = (userId) => {
    setUser(userId);
  };

  const logout = () => {
    // setShowLogoutModal(false);
    setUser(null);
  };

  const context = { user, login, logout };
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;
