import { useRouter } from 'next/router';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

const MoviesListCard = ({ movie }: { movie: Movie }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/${movie.id}`);
    };

    return (
        <div className="movie-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-image-available.png'}
                alt={movie.title}
            />
            <h3>{movie.title}</h3>
        </div>
    );
};

export default MoviesListCard;
