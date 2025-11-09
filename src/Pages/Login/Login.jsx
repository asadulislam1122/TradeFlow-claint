import React, { useContext, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, createGoogle, forgetPasswordsend } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  // Google login
  const handleGoogleLogin = () => {
    createGoogle(new GoogleAuthProvider())
      .then((result) => {
        toast.success("✅ Google Login Successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  // Forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    forgetPasswordsend(email)
      .then(() => toast.success("📩 Check your email for reset link"))
      .catch((e) => toast.error(e.message));
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
    if (!passwordRules.test(password)) {
      toast.error(
        "❌ পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে এবং অন্তত ১টি বড় ও ১টি ছোট হাতের অক্ষর থাকতে হবে!"
      );
      return;
    }

    signIn(email, password)
      .then(() => {
        toast.success("🎉 Login Successful!");
        form.reset();
        setShowPassword(false);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e12] text-white p-4">
      <ToastContainer />

      <div className="w-full max-w-md bg-[#161621]/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-6">
          <Marquee pauseOnHover gradient={false}>
            Capture moments, create memories ✨
          </Marquee>
        </p>

        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none transition"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 cursor-pointer text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <button
            type="button"
            onClick={handleForgetPassword}
            className="text-sm text-purple-400 hover:underline text-right"
          >
            Forgot password?
          </button>

          {/* Login button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-purple-800/30"
          >
            Log In
          </button>

          {/* Google Login */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{" "}
          <Link className="underline text-purple-400 ml-2" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
