import { useState, createContext, useEffect, useContext } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { fetchLogout, fetchMe } from "../componenets/api";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("access-token") === null) {
        
        setLoading(false);
        
      }
      else{
        try {
          const me = await fetchMe();

          setUser(me);
          setLoggedIn(true);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          
        }
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
    
  };

  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);

    fetchLogout();

    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    callback();
  };
  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="red.50"
        />
      </Flex>
    );
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
