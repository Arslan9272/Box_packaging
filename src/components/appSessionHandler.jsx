// // src/AppSessionHandler.jsx
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getTokenExpiryTimeout } from "../utils/tokenUtils";
// import { logoutUser } from "../store/authSlice";

// const AppSessionHandler = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const timeout = getTokenExpiryTimeout(token);

//     if (timeout <= 0) {
//       handleSessionExpiry();
//     } else {
//       const timer = setTimeout(() => {
//         handleSessionExpiry();
//       }, timeout);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleSessionExpiry = () => {
//     localStorage.removeItem("token");
//     dispatch(logoutUser());
//     navigate("/");
//   };

//   return null; // No UI, just session management
// };

// export default AppSessionHandler;

// src/components/AppSessionHandler.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { isTokenExpired } from "../utils/tokenUtils";

const AppSessionHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const expiryTime = localStorage.getItem("token_expiry");

    if (!expiryTime) return;

    const now = Date.now();
    const timeout = expiryTime - now;

    if (isTokenExpired()) {
      dispatch(logoutUser());
      navigate("/"); // Redirect to your login/TextusForm page
    } else {
      const timer = setTimeout(() => {
        dispatch(logoutUser());
        navigate("/");
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [dispatch, navigate]);

  return null;
};

export default AppSessionHandler;
