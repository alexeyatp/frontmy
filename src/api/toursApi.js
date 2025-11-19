import api from "./axiosConfig";

export const getTours = () => api.get("tours/");
export const getTourById = (id) => api.get(`tours/${id}/`);
