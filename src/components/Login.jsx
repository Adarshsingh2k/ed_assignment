import React, { useState } from "react";

const Login = ({ setUserPresent }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    // Save user data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, password: pass })
    );
    alert("Login successful!");
    setUserPresent(true); // Update parent state to show InvoiceForm
  };

  return (
    <div className="login">
      <div className="login_item">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="login_item">
        <label>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button className="log_button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
