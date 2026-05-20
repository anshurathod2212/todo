import React, { useState, useEffect, useRef } from "react";

export default function Focus() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounceRef = useRef(null);
  const controllerRef = useRef(null);

  const fetchUsers = async (searchText) => {
   
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);

    try {
      const res = await fetch(
        `https://randomuser.me/api/=${searchText}`,
        { signal: controller.signal }
      );

      const data = await res.json();

      setUsers(data.items || []);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.log(err);
        setUsers([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const text = query.trim();

      if (text) {
        fetchUsers(text);
      } else {
        setUsers([]);
      }
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🔎 Search Users (Debounce)</h1>

      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginTop: "10px" }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="40"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}