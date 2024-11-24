import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarsRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating / 2); // Рейтинг у TMDB зазвичай у діапазоні 0-10.
    const halfStar = rating % 2 >= 1;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="stars-rating">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} color="gold" />
            ))}
            {halfStar && <FaStarHalfAlt color="gold" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} color="gold" />
            ))}
        </div>
    );
};

export default StarsRating;
