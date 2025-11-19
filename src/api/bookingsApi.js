import api from "./axiosConfig";

export const createBooking = (data) => api.post("bookings/", data);
export const getBookings = () => api.get("bookings/");
