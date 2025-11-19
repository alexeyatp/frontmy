import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTourById } from "../api/toursApi";

export default function TourDetailPage() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        getTourById(id).then((res) => setTour(res.data));
    }, []);

    if (!tour) return <p>Загрузка...</p>;

    return (
        <div>
            <h1>{tour.title}</h1>
            <img src={tour.image} alt={tour.title} />
            <p>{tour.description}</p>
        </div>
    );
}
