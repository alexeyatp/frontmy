import { createBooking } from "../api/bookingsApi";

export default function BookingPage() {
    const handleSubmit = () => {
        createBooking({
            user: 1,
            tour: 2,
            persons_count: 2,
            start_date: "2025-06-01",
            total_price: 200000
        });
    };

    return <button onClick={handleSubmit}>Забронировать</button>;
}
