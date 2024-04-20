import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
    } else {
      fetch(`http://localhost:5000/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
        .then((r) => r.json())
        .then((res) => {
          if (!res.token) {
            alert(JSON.stringify(res));
            return;
          } else {
            localStorage.setItem("token", res.token);
            alert(res.message);
            navigate("/home");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Submit</button>
    </>
  );
};

export default Login;
