import { useState } from "react";
import axios from "axios";
import "../auth.css";

function Login({ closeModal, switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard
      window.location.href = "http://localhost:3001";

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <span className="close-btn" onClick={closeModal}>✕</span>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="error">{message}</p>}

        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={switchToSignup}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
