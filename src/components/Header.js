import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/tours">Туры</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/favorites">Избранное</Link>
                <Link to="/user">Профиль</Link>
            </nav>
        </header>
    );
}
