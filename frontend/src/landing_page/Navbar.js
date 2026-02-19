import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import SignUp from "../landing_page/signup/SignUp";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom bg-white">
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ width: "25%" }}
            />
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">

              {/* Normal pages */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link" to="/support">Support</Link>
              </li>

              {/* Auth Section */}
              {!isLoggedIn ? (
                <>
                  <li className="nav-item me-2">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowSignup(true)}
                    >
                      Sign up
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-2">
                    <a
                      href="http://localhost:3001"
                      className="btn btn-primary"
                    >
                      Dashboard
                    </a>
                  </li>

                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

            </ul>
          </div>
        </div>
      </nav>

      {showLogin && (
        <Login
          closeModal={() => setShowLogin(false)}
          switchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignUp
          closeModal={() => setShowSignup(false)}
          switchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}

export default Navbar;
