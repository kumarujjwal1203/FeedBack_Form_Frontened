// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Register.css"; // 👈 using same style as login

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function onFormRegister(e) {
//     e.preventDefault();
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     const response = await axios.post(
//       "https://feedback-form-backend-g334.onrender.com/register",
//       {
//         email,
//         password,
//       }
//     );

//     console.log(response.data);
//     navigate("/login");
//   }

//   function onEmailChange(e) {
//     setEmail(e.target.value);
//   }

//   function onPasswordChange(e) {
//     setPassword(e.target.value);
//   }

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2 className="register-heading">Register</h2>
//         <form onSubmit={onFormRegister} className="register-form">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={onEmailChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={onPasswordChange}
//             required
//           />
//           <button type="submit">Register</button>
//         </form>
//         <p className="register-footer">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // 👈 using same style as login

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onFormRegister(e) {
    e.preventDefault();

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters");
      return;
    }

    try {
      const response = await axios.post(
        "https://feedback-form-backend-g334.onrender.com/register",
        { email, password }
      );

      if (response.data === "user already exist") {
        alert("⚠️ This email is already registered.");
      } else {
        alert("✅ Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("❌ Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-heading">Register</h2>
        <form onSubmit={onFormRegister} className="register-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
