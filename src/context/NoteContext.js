import React, { useReducer, useContext, useState } from "react";
import takerAPI from "../api/takerAPI";
import AuthContext from "./AuthContext";

const NoteContext = React.createContext(); // create context

// ! Reducer
const noteReducer = (state, action) => {
  switch (action.type) {
    case "set_folders":
      return { ...state, folders: action.payload };
    case "create_folder":
      return { ...state };
    default:
      return state;
  }
};

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, { folders: [], notes: [] });

  const token = useContext(AuthContext).state.token;

  const getInfo = async () => {
    try {
      const info = await takerAPI.get("/users/my-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(info.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFolders = async () => {
    try {
      const info = await takerAPI.get("/folders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "set_folders",
        payload: info.data.data.folders.folders,
      });
      return info.data.data.folders.folders;
    } catch (error) {
      console.log(error);
    }
  };

  const createFolder = async (title, color) => {
    try {
      const response = await takerAPI.post(
        "/folders",
        { title, theme: color },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const info = await getFolders();
      dispatch({ type: "set_folders", payload: info });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <NoteContext.Provider value={{ getInfo, getFolders, createFolder, state }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
