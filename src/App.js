import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import InvoiceForm from "./components/InvoiceForm";

function App() {
  const [userPresent, setUserPresent] = useState(false);

  // Check if user is present in localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserPresent(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); // Refresh the page to reset the state
  };

  return (
    <div className="App">
      {/* Conditional Rendering */}
      {userPresent ? (
        <>
          <button onClick={handleLogout}>Logout</button>

          <InvoiceForm />
        </>
      ) : (
        <Login setUserPresent={setUserPresent} />
      )}
    </div>
  );
}

export default App;
