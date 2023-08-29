import { useEffect, useState } from "react";
// const Dashboard = "http://localhost:3000/home/dashboard";
import Links from "../components/Links";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const [response, setResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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
        body,
        config
      );
      if (res.data.status === "success") {
        localStorage.setItem("login", true);
        navigate("/home/dashboard");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      alert("Login Failed");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
    <div>
      <style>
        {`
          * {
            box-sizing: border-box;
    
          }

          body {
            margin: 0;
            height: 100vh;
            width: 100vw;
            font-weight: 700;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            flex-wrap:wrap;
            align-items: center;
            justify-content: center;
            color: #555;
              background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important;
          }

          .login-div {
            width: 430px;
            height: 700px;
            padding: 60px 35px 35px;
            border-radius: 40px;
            background-color: #ecf0f3;
            box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
          }

          .logo {
            background: url('../img/1200px-Purple_(01).png');
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto;
            box-shadow: 0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #afaaa7, -8px -8px 15px #fff;
          }

          .title {
            text-align: center;
            font-size: 28px;
            padding-top: 24px;
            letter-spacing: 0.5px;
          }

          .sub-title {
            text-align: center;
            font-size: 15px;
            padding-top: 7px;
            letter-spacing: 3px;
          }

          .fields {
            width: 100%;
            padding: 75px 5px 5px;
          }

          .fields input {
            border: none;
            outline: none;
            background: none;
            font-size: 18px;
            color: #555;
            padding: 20px 10px 20px 5px;
          }

          .username,
          .password {
            margin-bottom: 30px;
            border-radius: 25px;
            box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
          }

          .fields svg {
            height: 22px;
            margin: 0 10px -3px 25px;
          }

          .signin-button {
            outline: none;
            border: none;
            cursor: pointer;
            width: 100%;
            height: 60px;
            border-radius: 30px;
            font-size: 20px;
            font-weight: 700;
            font-family: Arial, Helvetica, sans-serif;
            color: #fff;
            text-align: center;
            background-color: #02c8db;
            box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #fff;
            transition: all 0.5s;
          }

          .signin-button:hover {
            background-color: #50e5b9;
          }

          .link {
            padding-top: 20px;
            text-align: center;
          }

          .link a {
            text-decoration: none;
            color: #aaa;
            font-size: 15px;
          }`}
      </style>
      <div className="login-div">
        {/* Your JSX code for the login form goes here */}
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <img
              src="https://th.bing.com/th/id/R.7ab7ffd6535f7df24a1bba57977927a3?rik=7Iy8ftpgY%2fBUPw&riu=http%3a%2f%2fwww.alterbeat.com%2fuploads%2f7%2f0%2f6%2f4%2f70641135%2fthinkzone-logo_7_orig.png&ehk=S3PCOXxbWQ9GVYIn55aFmdrJDVFcZZrfentJTCNZsXg%3d&risl=&pid=ImgRaw&r=0"
              width="85"
              height="85"
            />
          </div>
          <div className="title">LOGIN FORM</div>
          <div className="sub-title">M.I.S REPORT</div>
          <div className="fields">
            <div className="username">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <input
                type="text"
                className="user-input"
                placeholder="Username"
                value={userId}
                onChange={handleUserIdChange}
              />
            </div>
            <div className="password">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
              <input
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                className="pass-input"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="eye-button"
                onClick={toggleShowPassword}
                style={{
                  textDecoration: "none",
                  border: "0px",
                }}
              >
                {/* Eye icon for showing/hiding password */}
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
          <button type="submit" className="signin-button">
            Login
          </button>
        </form>
        {/* <div className="link">
          <a href="#">Forget password?</a> or <a href="#">Sign Up</a>
        </div> */}
      </div>
      {/* <Links /> */}
    </div>
  );
};

export default Login;
