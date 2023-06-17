import React from "react";
import "./Login.css";
const Dashboard = "http://localhost:3000/dashboard";
import Links from "../components/Links";

const Login = () => {
  return (
    <>
      
        <div>
          <h1
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
              marginTop: 20,
            }}
          >
            THINKZONE
          </h1>
        </div>
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="userId">UserId</label>
              <input type="text" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <a href={Dashboard} target="dashboard">
                <h2>{"Submit "}</h2>
              </a>
            </div>
          </form>
        </div>

        <Links />
      
    </>
  );
};

export default Login;
