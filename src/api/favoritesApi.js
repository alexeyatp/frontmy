import api from "./axiosConfig";

export const getFavorites = () => api.get("favorites/");
export const addFavorite = (data) => api.post("favorites/", data);
export const removeFavorite = (id) => api.delete(`favorites/${id}/`);
