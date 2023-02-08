import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8800" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getTimelinePosts = (userId) =>
  API.get(`/api/posts/timeline/${userId}`);
export const createPost = (newPost) => API.post("/api/posts", newPost);
export const likePost = (id) => API.patch(`/api/posts/${id}/like`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/api/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/posts/${id}`);

export const getUser = (userId, username) =>
  API.get(`/api/users?userId=${userId}&username=${username}`);
export const getFriends = (userId) => API.get(`/api/users/friends/${userId}`);

export const login = (authData) => API.post("/api/auth/login", authData);
export const register = (authData) => API.post("/api/auth/register", authData);
