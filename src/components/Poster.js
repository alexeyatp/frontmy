export default function Poster({ title, image, price }) {
    return (
        <div className="poster">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price} ₸</p>
        </div>
    );
}
