import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Hero from "./components/Hero";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State login
  const [currentPage, setCurrentPage] = useState("login"); // Halaman saat ini

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("hero");
  };

  return (
    <div>
      {/* Navbar hanya muncul jika bukan di halaman login */}
      {currentPage !== "login" && <Navbar />}

      {/* Render halaman berdasarkan currentPage */}
      {currentPage === "login" && <Login onLogin={handleLogin} />}
      {currentPage === "hero" && <Hero />}
    </div>
  );
}

export default App;
