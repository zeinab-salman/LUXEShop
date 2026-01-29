import { createContext, useState, useContext, useEffect } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(()=>{
 const savedUser = localStorage.getItem("user_info");
  return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
      const savedUser=localStorage.getItem('user_info');
    if (token && savedUser && savedUser!=="undefined") {setUser(JSON.parse(savedUser));
  }}, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user_info',JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
   
     localStorage.removeItem('token');
   
    setUser(null);

  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);