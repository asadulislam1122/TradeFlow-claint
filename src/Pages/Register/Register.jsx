import Marquee from "react-fast-marquee";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Provaider/AuthProvaider";

const Register = () => {
  const { createUser, setUser, updateUser, createGoogle } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  // SAVE USER TO DATABASE
  const saveUserToDB = (userInfo) => {
    return fetch("https://tradeflow-sarver.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
  };

  // GOOGLE REGISTER
  const handleGoogleRegister = () => {
    setMessage({ text: "", type: "" });

    createGoogle(new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;

        saveUserToDB({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          provider: "google",
        });

        setMessage({ text: "✅ Google Register Successful!", type: "success" });
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((e) => setMessage({ text: e.message, type: "error" }));
  };

  // EMAIL REGISTER
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    setMessage({ text: "", type: "" });

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL })
          .then(() => setUser({ ...user, displayName: name, photoURL }))
          .catch(() => setUser(user));

        saveUserToDB({
          name,
          email,
          photoURL,
          uid: user.uid,
          provider: "password",
        });

        setMessage({ text: "🎉 Registration Successful!", type: "success" });
        form.reset();
        setShowPassword(false);
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((e) => setMessage({ text: e.message, type: "error" }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e12] text-white p-4">
      <title>Register page</title>

      <div className="w-full max-w-md bg-[#161621]/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
          Join the Community
        </h2>

        <div className="text-gray-400 text-center mb-6">
          <Marquee pauseOnHover gradient={false}>
            Create your account and start exploring amazing features! ✨
          </Marquee>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
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

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-purple-800/30"
          >
            Register
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="px-3 text-gray-400 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>

          <button
            type="button"
            onClick={handleGoogleRegister}
            className="flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <FaGoogle /> Google
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

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?
          <Link className="underline text-purple-400 ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

// 2222222222222222222
// import Marquee from "react-fast-marquee";
// import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { GoogleAuthProvider } from "firebase/auth";
// import { AuthContext } from "../../Provaider/AuthProvaider";

// const Register = () => {
//   const { createUser, setUser, updateUser, createGoogle } =
//     useContext(AuthContext);
//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState({ text: "", type: "" });
//   const navigate = useNavigate();

//   const handleGoogleRegister = () => {
//     setMessage({ text: "", type: "" });
//     createGoogle(new GoogleAuthProvider())
//       .then(() => {
//         setMessage({ text: "✅ Google Register Successful!", type: "success" });
//         setTimeout(() => navigate("/"), 1000);
//       })
//       .catch((e) => setMessage({ text: e.message, type: "error" }));
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     if (name.length < 5) {
//       setMessage({
//         text: "❌ Name must be at least 5 characters",
//         type: "error",
//       });
//       return;
//     }

//     const photoURL = form.photoURL.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
//     if (!passwordRules.test(password)) {
//       setMessage({
//         text: "❌ Password must be 6+ chars with 1 uppercase & 1 lowercase",
//         type: "error",
//       });
//       return;
//     }

//     setMessage({ text: "", type: "" });

//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         updateUser({ displayName: name, photoURL: photoURL })
//           .then(() =>
//             setUser({ ...user, displayName: name, photoURL: photoURL })
//           )
//           .catch(() => setUser(user));

//         setMessage({ text: "🎉 Registration Successful!", type: "success" });
//         form.reset();
//         setShowPassword(false);
//         setTimeout(() => navigate("/"), 1000);
//       })
//       .catch((e) => setMessage({ text: e.message, type: "error" }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0e0e12] text-white p-4">
//       <title>Register page</title>
//       <div className="w-full max-w-md bg-[#161621]/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
//           Join the Community
//         </h2>
//         <div className="text-gray-400 text-center mb-6">
//           <Marquee pauseOnHover gradient={false}>
//             Create your account and start exploring amazing features! ✨
//           </Marquee>
//         </div>

//         <form onSubmit={handleRegister} className="flex flex-col space-y-5">
//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">
//               Photo URL
//             </label>
//             <input
//               type="text"
//               name="photoURL"
//               placeholder="Enter your photo URL"
//               className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
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
//                 placeholder="Enter your password"
//                 className="w-full p-3 rounded-lg bg-[#1e1e26] border border-gray-700 focus:border-purple-500 outline-none"
//                 required
//               />
//               <div
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3.5 text-gray-400 cursor-pointer text-lg"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-purple-800/30"
//           >
//             Register
//           </button>

//           <div className="flex items-center my-4">
//             <div className="flex-grow h-px bg-gray-700" />
//             <span className="px-3 text-gray-400 text-sm">or continue with</span>
//             <div className="flex-grow h-px bg-gray-700" />
//           </div>

//           <button
//             type="button"
//             onClick={handleGoogleRegister}
//             className="flex items-center justify-center gap-2 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
//           >
//             <FaGoogle /> Google
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

//         <p className="text-sm text-gray-400 mt-6 text-center">
//           Already have an account?{" "}
//           <Link className="underline text-purple-400 ml-2" to="/login">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
// 333333333333333333333333333333
