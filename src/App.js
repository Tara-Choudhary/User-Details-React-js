import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import "./styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
};

export default App;
