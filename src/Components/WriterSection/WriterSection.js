import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./WriterSection.css";

const WriterSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://reqres.in/api/users?page=2";
    axios.get(url)
      .then( res => setUsers(res.data.data))
      // .then(data => console.log(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="writer-container">
      <h1 className="writer-header">Featured Writers</h1>
      <div className="writer-section">
        {users && users.map((user) => {
            return (
              <div className="user-card" key={user.id}>
                <img src={user.avatar} alt="image_" />
                <h4>{user.first_name}</h4>
                <p>Email: {user.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WriterSection;
