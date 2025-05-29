// // import React, { useState } from "react";
// // import Button from "./ui/button";
// // import Input from "./ui/input";

// // const TextUsForm = ({ onSubmit }) => {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     phone: "",
// //     email: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   const validate = () => {
// //     const newErrors = {};
// //     Object.entries(formData).forEach(([key, value]) => {
// //       if (!value.trim()) newErrors[key] = "This field is required";
// //       if (key === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
// //         newErrors[key] = "Please enter a valid email address";
// //       }
// //     });
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //     setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!validate()) return;
// //     onSubmit();
// //   };

// //   return (
// //     <div className="fixed bottom-24 right-6 w-96 z-50 w-[22rem] bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
// //       <h3 className="text-sm text-gray-500">Step 1 of 2</h3>
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Text Us</h2>

// //       <p className="mb-4 text-sm text-gray-700">
// //         Please enter your name, number, and message for our team!
// //       </p>

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div className="flex gap-4">
// //           {/* First Name */}
// //           <div className="w-1/2">
// //             <Input
// //               name="firstName"
// //               placeholder="First Name"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               className={`w-full px-3 py-2 text-sm border ${
// //                 errors.firstName ? "border-red-500" : "border-gray-300"
// //               }`}
// //             />
// //             {errors.firstName && (
// //               <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
// //             )}
// //           </div>

// //           {/* Last Name */}
// //           <div className="w-1/2">
// //             <Input
// //               name="lastName"
// //               placeholder="Last Name"
// //               value={formData.lastName}
// //               onChange={handleChange}
// //               className={`w-full px-3 py-2 text-sm border ${
// //                 errors.lastName ? "border-red-500" : "border-gray-300"
// //               }`}
// //             />
// //             {errors.lastName && (
// //               <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
// //             )}
// //           </div>
// //         </div>

// //         {/* Phone Number */}
// //         <div>
// //           <Input
// //             name="phone"
// //             placeholder="Phone Number"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             className={`w-full px-3 py-2 text-sm border ${
// //               errors.phone ? "border-red-500" : "border-gray-300"
// //             }`}
// //           />
// //           {errors.phone && (
// //             <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
// //           )}
// //         </div>

// //         {/* Email */}
// //         <div>
// //           <Input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className={`w-full px-3 py-2 text-sm border ${
// //               errors.email ? "border-red-500" : "border-gray-300"
// //             }`}
// //           />
// //           {errors.email && (
// //             <p className="text-red-500 text-xs mt-1">{errors.email}</p>
// //           )}
// //         </div>

// //         {/* Footer */}
// //         <div className="flex justify-between mt-6">
// //           <Button
// //             type="button"
// //             onClick={() =>
// //               setFormData({
// //                 firstName: "",
// //                 lastName: "",
// //                 phone: "",
// //                 email: "",
// //               })
// //             }
// //             className="text-sm text-gray-500 hover:text-gray-800"
// //           >
// //             Cancel
// //           </Button>
// //           <Button
// //             type="submit"
// //             className="bg-primary text-white px-6 py-2 rounded-full  focus:outline-none border-none hover:bg-accent transition"
// //           >
// //             Send Text
// //           </Button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default TextUsForm;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithNameAndEmail } from "../store/authSlice";
import Button from "./ui/button";
import Input from "./ui/input";

const TextUsForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "This field is required";
    if (!formData.email.trim()) newErrors.email = "This field is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(
      loginWithNameAndEmail({
        firstName: formData.firstName,
        email: formData.email,
      })
    )
      .unwrap()
      .then((res) => {
        console.log("Login success:", res);
        if (onSubmit) onSubmit(); // Optional callback
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  return (
    <div className="fixed bottom-24 right-6 w-[22rem] z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
      <h3 className="text-sm text-gray-500">Step 1 of 2</h3>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Text Us</h2>

      <p className="mb-4 text-sm text-gray-700">
        Please enter your name, number, and message for our team!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          {/* First Name */}
          <div className="w-1/2">
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-1/2">
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-300"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <Input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300"
          />
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Loading/Error Messages */}
        {loading && <p className="text-sm text-gray-500">Sending...</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            onClick={() =>
              setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
              })
            }
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-6 py-2 rounded-full focus:outline-none border-none hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Text"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TextUsForm;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstname] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/auth/user/login",
//         {
//           email,
//           firstName,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Store the received token and user data
//       localStorage.setItem("access_token", response.data.access_token);
//       localStorage.setItem("user_id", response.data.user_id); // ✅ Correct way to store user_id

//       console.log("Login Response:", response.data);

//       toast.success("Login successful!");
//       navigate("/chatWidget");
//     } catch (err) {
//       console.error("Login Error:", err);
//       const errorMessage =
//         err.response?.data?.detail || "Login failed. Please try again.";
//       toast.error(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
//           Login
//         </h1>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div className="space-y-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="w-1/2">
//               <input
//                 name="firstName"
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstname(e.target.value)}
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <Link
//             to="/forgot-password"
//             className="text-sm text-blue-600 hover:text-blue-800"
//           >
//             Forgot Password?
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
