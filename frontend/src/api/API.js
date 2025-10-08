import axios from "axios";

export const userAPI = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_USER_URL,  
  withCredentials: true,            
});

export const adminAPI = axios.create({
  baseURL : import.meta.env.VITE_BACKEND_ADMIN_URL,
  withCredentials: true
})

