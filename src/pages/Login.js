import { useEffect, useState } from "react";
import "./Login.css";
// const Dashboard = "http://localhost:3000/home/dashboard";
import Links from "../components/Links";

import axios from "axios";
import { useNavigate } from "react-router-dom";

  const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const [response, setResponse] = useState(null);

  const authentication = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      userid: userId,
      password: password,
      usertype: "manager",
      loginType: "password",
    };
    try {
      const res = await axios.post(
        "https://thinkzone.in.net/thinkzone/authenticateuser",
        body, // Added body to the request
        config // Added config to the request
      );
      if (res.data.status === "success") {
        localStorage.setItem("login", true);

        navigate("/home/dashboard");
      } else {
        alert("Login Failed");
      }
    } catch (error) {}
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    authentication(); // Call the authentication function after form submission
  };

  useEffect(() => {
    const isLoggedin = localStorage.getItem("login");
    if (isLoggedin === "true") {
      navigate("/home/dashboard");
    }
  }, []);
  return (
    <div className="login-container">
      <div
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "200px",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          marginTop: "50px",
        }}
      >
        <h5
          style={{
            letterSpacing: "2px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "transparent",
            textAlign: "center",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(310deg,#2152ff,#21d4fd)",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          MIS REPORT
        </h5>
        <h3 style={{ textAlign: "center" }}>Login Page</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button className="axios">Login</button>
          </div>
        </form>
      </div>
      <Links />
    </div>
  );
};

export default Login;
