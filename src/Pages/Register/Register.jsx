import Marquee from "react-fast-marquee";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Provaider/AuthProvaider";

const Register = () => {
  const { createUser, setUser, updateUser, createGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Google register
  const handleGoogleRegister = () => {
    createGoogle(new GoogleAuthProvider())
      .then((result) => {
        toast.success("✅ Google Register Successful!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  // Register form submit
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      toast.error("Name should be at least 5 characters!", {
        position: "top-center",
      });
      return;
    }

    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
    if (!passwordRules.test(password)) {
      toast.error(
        "❌ Password কমপক্ষে ৬ অক্ষরের হতে হবে এবং অন্তত ১টি বড় ও ১টি ছোট হাতের অক্ষর থাকতে হবে!",
        { position: "top-center" }
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() =>
            setUser({ ...user, displayName: name, photoURL: photoURL })
          )
          .catch(() => setUser(user));
        toast.success("🎉 Registration Successful!", {
          position: "top-center",
        });
        form.reset();
        setShowPassword(false);
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e12] text-white p-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-[#161621]/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
          Join the Community
        </h2>
        <p className="text-gray-400 text-center mb-6">
          <Marquee pauseOnHover gradient={false}>
            Create your account and start exploring amazing features! ✨
          </Marquee>
        </p>

        <form onSubmit={handleRegister} className="flex flex-col space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
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

          {/* Register button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-purple-800/30"
          >
            Register
          </button>

          {/* OR */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="px-3 text-gray-400 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>

          {/* Google register */}
          <button
            onClick={handleGoogleRegister}
            type="button"
            className="flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <FaGoogle /> Google
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link className="underline text-purple-400 ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
