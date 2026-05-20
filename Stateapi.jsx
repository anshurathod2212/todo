import React, { useState, useEffect } from "react";

export default function Stateapi() {


  const [user1, setUser1] = useState({
    image: "",
    name: ""
  });

  const [user2, setUser2] = useState({
    image: "",
    name: ""
  });

  useEffect(() => {
    fetchUser1();
    fetchUser2(user2);
  }, []);

 
  function fetchUser1() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser1({
          image: data.results[0].picture.medium,
          name: data.results[0].name.first
        });
      });
  }


  function fetchUser2() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser2({
          image: data.results[0].picture.medium,
          name: data.results[0].name.first
        });
      });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h3>User 1</h3>
        {user1.image && <img src={user1.image} alt="user1" />}
        <p>{user1.name}</p>
        <button onClick={fetchUser1}>Update Image 1</button>
      </div>

      <hr />
<div>
        <h3>User 2</h3>
        {user2.image && <img src={user2.image} alt="user2" />}
        <p>{user2.name}</p>
        <button onClick={fetchUser2}>Update Image 2</button>
      </div>
    </div>
  );
}