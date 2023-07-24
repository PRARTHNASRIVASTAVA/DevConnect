import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();
    
    const [loggedin, setLoggedin] = useState(currentUser !== null);

    const logout = () => {
        sessionStorage.removeItem("user");
        setLoggedin(false);
        navigate("/login");
    }

    return (
        <UserContext.Provider value={{loggedin, setLoggedin, logout}}>{children}</UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);