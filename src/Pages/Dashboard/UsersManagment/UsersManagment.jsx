// import { useEffect, useState } from "react";
// import { FaUserAltSlash, FaUserShield } from "react-icons/fa";
// import Swal from "sweetalert2";

// const UsersManagment = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://tradeflow-sarver.vercel.app/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   console.log(users);
//   const handleMakeAdmin = (user) => {
//     const roleInfo = { role: "admin" };

//     fetch(`https://tradeflow-sarver.vercel.app/users/${user._id}`, {
//       method: "PATCH", // বা PUT
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(roleInfo),

//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is now an Admin!`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: err.message,
//         });
//       });
//   };

//   return (
//     <div className="p-6 ">
//       <h2 className="text-2xl font-bold mb-4">
//         👥 User Management {users.length}
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead className="bg-gray-300">
//             <tr>
//               <th>No</th>
//               <th>Photo&Name</th>
//               <th>Email</th>
//               <th>Provider</th>
//               <th>Role</th>
//               <th>Date</th>
//               <th>Admin Acction</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {users.map((user, i) => (
//               <tr key={user._id}>
//                 <td>{i + 1}</td>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle h-12 w-12">
//                         <img
//                           src={user.photoURL}
//                           alt="Avatar Tailwind CSS Component"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold">{user.name}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>{user.email}</td>
//                 <td>{user.provider}</td>
//                 <td>{user.role}</td>
//                 <td>{new Date(user.createdAt).toLocaleString()}</td>

//                 <th>
//                   {user.role === "admin" ? (
//                     <button className="btn bg-red-500 btn-ghost">
//                       <FaUserAltSlash></FaUserAltSlash>
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleMakeAdmin(user)}
//                       className="btn btn-ghost bg-blue-600"
//                     >
//                       <FaUserShield></FaUserShield>
//                     </button>
//                   )}
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//           {/* foot */}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UsersManagment;

import { useEffect, useState } from "react";
import { FaUserAltSlash, FaUserShield, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManagment = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = () => {
    fetch("https://tradeflow-sarver.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Update user role
  const updateUserRole = (user, role) => {
    fetch(`https://tradeflow-sarver.vercel.app/users/${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          let title = "";
          if (role === "admin") title = `${user.name} is now an Admin!`;
          if (role === "user") title = `${user.name} is now a User!`;
          if (role === "blocked") title = `${user.name} has been blocked!`;

          Swal.fire({
            position: "top-end",
            icon: role === "blocked" ? "warning" : "success",
            title,
            showConfirmButton: false,
            timer: 1500,
          });

          fetchUsers(); // Refresh table
        }
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        👥 <span className="text-green-500">User</span>{" "}
        <span className="text-blue-500">Management</span>{" "}
        <span className="text-pink-500">({users.length})</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Photo & Name</th>
              <th>Email</th>
              <th>Provider</th>
              <th>Role</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr
                key={user._id}
                // className={user.role === "blocked" ? "bg-red-300" : ""}
              >
                <td>{i + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            user.photoURL || "https://via.placeholder.com/150"
                          }
                          alt={user.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>

                <td>{user.email}</td>
                <td>{user.provider}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>

                <td className="flex gap-2">
                  {user.role === "user" && (
                    <>
                      <button
                        onClick={() => updateUserRole(user, "admin")}
                        className="btn btn-xs btn-success flex items-center gap-1"
                      >
                        <FaUserShield /> Make Admin
                      </button>
                      <button
                        onClick={() => updateUserRole(user, "blocked")}
                        className="btn btn-xs btn-error flex items-center gap-1"
                      >
                        <FaUserAltSlash /> Block
                      </button>
                    </>
                  )}

                  {user.role === "admin" && (
                    <>
                      <button
                        onClick={() => updateUserRole(user, "user")}
                        className="btn btn-xs btn-warning flex items-center gap-1"
                      >
                        <FaUser /> Remove Admin
                      </button>
                      <button
                        onClick={() => updateUserRole(user, "blocked")}
                        className="btn btn-xs btn-error flex items-center gap-1"
                      >
                        <FaUserAltSlash /> Block
                      </button>
                    </>
                  )}

                  {user.role === "blocked" && (
                    <button
                      onClick={() => updateUserRole(user, "user")}
                      className="btn btn-xs btn-success flex items-center gap-1"
                    >
                      <FaUser /> Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagment;
