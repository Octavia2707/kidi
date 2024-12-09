import React from 'react';
import Logo from '../asset/Logo1-removebg-preview.png'; // Ganti dengan path logo Anda
import Logo_Google from '../asset/Logo_Google-removebg-preview.png';

function Login() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(183.08deg, #FCF5ED 46.86%, #F4BF97 97.45%)",
      }}
    >
      <div className="w-full max-w-md p-6 flex flex-col items-center">
        {/* Frame for inputs and welcome text */}
        <div className="relative flex flex-col items-center p-5 gap-5 w-full bg-[rgba(252,245,237,0.48)] border-4 border-[rgba(244,191,151,0.56)] backdrop-blur-sm rounded-xl">
          {/* Logo di kanan atas */}
          <img
            src={Logo}
            alt="Logo"
            className="absolute top-[-30px] right-[-30px] h-14 w-14"
          />
          <h2 className="text-2xl font-bold text-black font-Judson mb-4">
            Welcome Back!!
          </h2>

          <form className="space-y-3 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-xl font-Judson focus:outline-none focus:ring-2 focus:ring-[#CE5A67]"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 rounded-xl font-Judson focus:outline-none focus:ring-2 focus:ring-[#CE5A67]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-xl font-Judson focus:outline-none focus:ring-2 focus:ring-[#CE5A67]"
            />
          </form>
        </div>

        {/* Tombol di luar kotak */}
        <div className="w-full max-w-md mt-3 space-y-6">
          <button
            type="submit"
            className="w-full py-2 bg-[#CE5A67] text-2xl text-white font-Judson font-bold rounded-md hover:bg-[#F4BF97]"
          >
            Login
          </button>

          {/* Spacer untuk memberikan jarak lebih besar */}
          <div style={{ height: "1px" }}></div>

          {/* Garis bawah tombol Login */}
          <div
            className="border-t-4 border-[#CE5A67]"
            style={{
              width: "390.5px",
              margin: "0 auto",
            }}
          ></div>

          <button
            type="button"
            className="w-full py-2 border border-gray-300 flex items-center justify-center rounded-md hover:bg-gray-100 text-sm"
          >
            <img
              src={Logo_Google} // Ganti dengan ikon Google
              alt="Google"
              className="h-4 w-4 mr-2"
            />
            Sign In with Google
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-2">
          Don't have an account?{" "}
          <a href="#signup" className="text-[#F4BF97] font-bold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
