import { useState } from "react";
import axios from "axios";
import "../../auth.css";

function SignUp({ closeModal, switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/signup",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard
      window.location.href = "http://localhost:3001";

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <span className="close-btn" onClick={closeModal}>✕</span>

        <h2>Create account</h2>

        <form onSubmit={handleSignup}>
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

          <button type="submit">Sign up</button>
        </form>

        {message && <p className="error">{message}</p>}

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={switchToLogin}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
