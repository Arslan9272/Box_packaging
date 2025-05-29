// src/utils/tokenUtil.js
import { jwtDecode } from "jwt-decode";

// Decode the token and get the expiration time in milliseconds
export const getTokenExpiryTime = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

// Check if the token is expired
export const isTokenExpired = () => {
  const expiry = localStorage.getItem("token_expiry");
  if (!expiry) return true;
  return Date.now() > parseInt(expiry, 10);
};
