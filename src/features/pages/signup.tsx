import React, { useState } from "react";

const SingUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    if (username === "" || password === "" || email === "") {
      alert("Please enter username, password and email");
    } else {
      fetch(`http://localhost:5000/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, password, email }),
      })
        .then((r) => r.json())
        .then((res) => {
          localStorage.setItem("token", res.token);
          alert(res.message);
        });
    }
  };

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Submit</button>
    </>
  );
};

export default SingUp;
