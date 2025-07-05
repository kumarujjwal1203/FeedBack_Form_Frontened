import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 👈 Linked CSS file

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onFormLogin(e) {
    e.preventDefault();

    const response = await axios.post(
      "https://feedback-form-backend-g334.onrender.com/login",
      {
        email,
        password,
      }
    );

    console.log(response.data.token);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/feedback");
    } else {
      alert(response.data.message);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={onFormLogin} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="login-footer">
          Don’t have an account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}
