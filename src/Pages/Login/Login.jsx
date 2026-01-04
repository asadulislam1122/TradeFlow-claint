import { useContext, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const { signIn, createGoogle, forgetPasswordsend } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  // SAVE USER TO DATABASE
  const saveUserToDB = (userInfo) => {
    return fetch("https://tradeflow-sarver.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = () => {
    setMessage({ text: "", type: "" });

    createGoogle(new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;

        // 🔥 MongoDB save (if not exists)
        saveUserToDB({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          provider: "google",
        });

        setMessage({ text: "✅ Google Login Successful!", type: "success" });
        setTimeout(() => navigate(location.state ? location.state : "/"), 1000);
      })
      .catch((e) => setMessage({ text: e.message, type: "error" }));
  };

  // FORGET PASSWORD
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setMessage({ text: "", type: "" });

    forgetPasswordsend(email)
      .then(() =>
        setMessage({
          text: "📩 Check your email for reset link",
          type: "success",
        })
      )
      .catch((e) => setMessage({ text: e.message, type: "error" }));
  };

  // EMAIL LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
    if (!passwordRules.test(password.value)) {
      setMessage({
        text: "❌ Password must be 6+ chars with 1 uppercase & 1 lowercase",
        type: "error",
      });
      return;
    }

    setMessage({ text: "", type: "" });

    signIn(email.value, password.value)
      .then(() => {
        setMessage({ text: "🎉 Login Successful!", type: "success" });
        e.target.reset();
        setShowPassword(false);
        setTimeout(() => navigate(location.state ? location.state : "/"), 1000);
      })
      .catch((e) => setMessage({ text: e.message, type: "error" }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e12] text-white p-4">
      <title>Login Page</title>

      <div className="w-full max-w-md bg-[#161621]/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>

        <div className="text-gray-400 text-center mb-6">
          <Marquee pauseOnHover gradient={false}>
            Capture moments, create memories ✨
          </Marquee>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter email"
              className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                placeholder="Enter password"
                className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleForgetPassword}
            className="text-sm text-purple-400 hover:underline text-right"
          >
            Forgot password?
          </button>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-purple-800/30"
          >
            Log In
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <FaGoogle /> Continue with Google
          </button>

          {message.text && (
            <p
              className={`text-sm mt-3 text-center ${
                message.type === "error" ? "text-red-400" : "text-green-400"
              }`}
            >
              {message.text}
            </p>
          )}
        </form>

        <div className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?
          <Link className="underline text-purple-400 ml-2" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { useContext, useRef, useState } from "react";
// import Marquee from "react-fast-marquee";
// import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provaider/AuthProvaider";
// import { GoogleAuthProvider } from "firebase/auth";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState({ text: "", type: "" });
//   const { signIn, createGoogle, forgetPasswordsend } = useContext(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const emailRef = useRef(null);

//   const handleGoogleLogin = () => {
//     setMessage({ text: "", type: "" });
//     createGoogle(new GoogleAuthProvider())
//       .then(() => {
//         setMessage({ text: "✅ Google Login Successful!", type: "success" });
//         setTimeout(() => navigate(location.state ? location.state : "/"), 1000);
//       })
//       .catch((e) => setMessage({ text: e.message, type: "error" }));
//   };

//   const handleForgetPassword = () => {
//     const email = emailRef.current.value;
//     setMessage({ text: "", type: "" });
//     forgetPasswordsend(email)
//       .then(() =>
//         setMessage({
//           text: "📩 Check your email for reset link",
//           type: "success",
//         })
//       )
//       .catch((e) => setMessage({ text: e.message, type: "error" }));
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const { email, password } = e.target;
//     const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
//     if (!passwordRules.test(password.value)) {
//       setMessage({
//         text: "❌ Password must be at least 6 chars with 1 uppercase & 1 lowercase",
//         type: "error",
//       });
//       return;
//     }
//     setMessage({ text: "", type: "" });
//     signIn(email.value, password.value)
//       .then(() => {
//         setMessage({ text: "🎉 Login Successful!", type: "success" });
//         e.target.reset();
//         setShowPassword(false);
//         setTimeout(() => navigate(location.state ? location.state : "/"), 1000);
//       })
//       .catch((e) => setMessage({ text: e.message, type: "error" }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0e0e12] text-white p-4">
//       <title>Login Page</title>
//       <div className="w-full max-w-md bg-[#161621]/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
//           Welcome Back
//         </h2>
//         <div className="text-gray-400 text-center mb-6">
//           <Marquee pauseOnHover gradient={false}>
//             Capture moments, create memories ✨
//           </Marquee>
//         </div>

//         <form onSubmit={handleLogin} className="flex flex-col space-y-5">
//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Email</label>
//             <input
//               ref={emailRef}
//               type="email"
//               name="email"
//               autoComplete="email"
//               placeholder="Enter email"
//               className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 autoComplete="current-password"
//                 placeholder="Enter password"
//                 className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
//                 required
//               />
//               <div
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={handleForgetPassword}
//             className="text-sm text-purple-400 hover:underline text-right"
//           >
//             Forgot password?
//           </button>
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-purple-800/30"
//           >
//             Log In
//           </button>

//           <div className="flex items-center my-4">
//             <div className="flex-grow h-px bg-gray-700" />
//             <span className="px-3 text-gray-400 text-sm">or</span>
//             <div className="flex-grow h-px bg-gray-700" />
//           </div>

//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
//           >
//             <FaGoogle /> Continue with Google
//           </button>

//           {message.text && (
//             <p
//               className={`text-sm mt-3 text-center ${
//                 message.type === "error" ? "text-red-400" : "text-green-400"
//               }`}
//             >
//               {message.text}
//             </p>
//           )}
//         </form>

//         <div className="text-sm text-gray-400 mt-6 text-center">
//           Don’t have an account?{" "}
//           <Link className="underline text-purple-400 ml-2" to="/register">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
