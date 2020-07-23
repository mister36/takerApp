import React, { useReducer, useState } from "react";
import takerAPI from "../api/takerAPI";
import AsyncStorage from "@react-native-community/async-storage";

// !Creating context
const AuthContext = React.createContext();

// !Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "show_error":
      return { ...state, errorMessage: action.payload };
    case "show_email_verification":
      return {
        ...state,
        errorMessage: "",
        emailMessage:
          "Use the link sent to your email to sign in within the next 5 minutes",
      };
    case "set_token":
      return {
        ...state,
        token: action.payload,
        errorMessage: "",
        emailMessage: "",
      };
    case "remove_token":
      return { ...state, token: null, errorMessage: "" };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  // State
  const [state, dispatch] = useReducer(authReducer, {
    errorMessage: "",
    token: null,
    emailMessage: "",
  }); // default values for state

  // !Functions other screens have access to

  const setToken = (token) => {
    dispatch({ type: "set_token", payload: token });
  };

  const login = async (username, password) => {
    try {
      const response = await takerAPI.post("/users/login", {
        username,
        password,
      });

      await AsyncStorage.setItem("token", response.data.token);
      const token = await AsyncStorage.getItem("token");

      dispatch({ type: "set_token", payload: token });
    } catch (error) {
      dispatch({ type: "show_error", payload: error.response.data.message });
    }
  };

  const signup = async (username, email, password, passwordConfirm) => {
    try {
      console.log("RUNNING");
      const response = await takerAPI.post("/users/signup", {
        username,
        email,
        password,
        passwordConfirm,
      });
      dispatch({ type: "show_email_verification", payload: null });
    } catch (error) {
      if (error.toString().includes("status code 429")) {
        return dispatch({
          type: "show_error",
          payload: "Try again after 30 minutes",
        });
      }
      if (error.response.data.error.statusCode == "403") {
        return dispatch({
          type: "show_error",
          payload: error.response.data.message,
        });
      }

      const errorArr = error.response.data.message.split(":");
      errorArr.splice(0, 2);
      dispatch({ type: "show_error", payload: errorArr.join(",") });
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch({ type: "remove_token", payload: " " });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ state, signup, login, logout, setToken }}>
      {children}
    </AuthContext.Provider> // Children is actually the app, so all components in app is within
  );
};

export default AuthContext;
