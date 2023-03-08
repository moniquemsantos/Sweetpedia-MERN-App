import React from "react";
import { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/getToken";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [loginUser, setLoginUser] = useState(null);

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

    fetch("http://localhost:5000/api/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          console.log(result.token);
          localStorage.setItem("token", result.token);
          setLoginUser(result.user);
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
