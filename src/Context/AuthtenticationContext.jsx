
import React, {useState, useContext, createContext, useEffect}  from "react";
//import { useHistory } from 'react-router-dom';
import axios from "axios";
import Login from "../Pages/LoginPages/Login";
import { useNavigate } from "react-router-dom";


const authContext = createContext();
export const useAuth = () => useContext(authContext)

//komponen provider authContext
export const AuthtenticationProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null)

    //function login
    const login = async (username,password) => {
        try{
            const response = await axios.post(
                'https://fakestoreapi.com/users',
                //dibawah ini request body
                {username, password})

            setUser(response.data)
            localStorage.setItem("user", JSON.stringify(response.data)); //simpan ke local storage

        }catch(error){
            console.error("Login Failed:", error);
        }
    };
    

    const logout = (e) =>{
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        navigate("/");
    }

    //memeriksa apakah pengguna sudah login dari local storage saat komponen dimuat
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    }, []);

    return (
        <authContext.Provider value={{user, login, logout}}>
            {children}
        </authContext.Provider>
    )

    
}