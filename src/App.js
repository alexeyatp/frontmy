import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ToursPage from "./pages/ToursPage";
import TourDetailPage from "./pages/TourDetailPage";
import BookingPage from "./pages/BookingPage";
import UserPage from "./pages/UserPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tours" element={<ToursPage />} />
                <Route path="/tours/:id" element={<TourDetailPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}
