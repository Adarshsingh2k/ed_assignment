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
    <div>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
