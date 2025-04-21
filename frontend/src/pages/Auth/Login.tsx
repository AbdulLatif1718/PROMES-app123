// src/pages/Auth/Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role: "admin" | "super_admin") => {
    login(`${role}@example.com`, role);
    navigate(role === "super_admin" 
      ? "/super-admin/dashboard" 
      : "/admin/dashboard"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          DEVELOPMENT MODE
        </h2>
        
        <div className="space-y-4">
          <button
            onClick={() => handleLogin("admin")}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login as Admin
          </button>
          
          <button
            onClick={() => handleLogin("super_admin")}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Login as Super Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;








// import React, { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext"; // Correct import path
// import { useNavigate } from "react-router-dom";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const { login } = useAuth(); // Use the useAuth hook
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login({ email, password });
//       navigate("/admin/dashboard"); // Redirect to admin dashboard
//     } catch (error) {
//       alert("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h2>
//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;