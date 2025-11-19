import { useEffect, useState } from "react";
import { getTours } from "../api/toursApi";
import Poster from "../components/Poster";
import Sidebar from "../components/Sidebar";

export default function ToursPage() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        getTours().then((res) => setTours(res.data));
    }, []);

    return (
        <div className="tours-page">
            <Sidebar />
            <div className="tour-list">
                {tours.map((tour) => (
                    <Poster
                        key={tour.id}
                        title={tour.title}
                        image={tour.image}
                        price={tour.price}
                    />
                ))}
            </div>
        </div>
    );
}
