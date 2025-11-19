import { useEffect, useState } from "react";
import { getFavorites } from "../api/favoritesApi";

export default function FavoritesPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getFavorites().then((res) => setItems(res.data));
    }, []);

    return (
        <div>
            <h1>Избранное</h1>
            {items.map((fav) => (
                <p key={fav.id}>{fav.tour}</p>
            ))}
        </div>
    );
}
