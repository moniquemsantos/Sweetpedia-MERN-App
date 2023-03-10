import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";
import serverURL from "../utils/serverURL";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    // TODO: validation
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginUser.email);
    urlencoded.append("password", loginUser.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`${serverURL}/api/users/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          console.log(result.token);
          localStorage.setItem("token", result.token);
          setLoginUser(result.user);
          navigate("/myprofile");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoginUser(null);
  };
  useEffect(() => {
    const token = getToken();

    if (token) {
      console.log("LOGGED IN");
    } else {
      console.log("NOT logged in");
    }
  }, [loginUser]);

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        setLoginUser,
        login,
        handleInputChange,
        logout,
        getToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
