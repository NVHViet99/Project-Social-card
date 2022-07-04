import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:6600" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
