import axios from 'axios';
import { GetServerSideProps } from 'next';

const MovieDetails = ({ movie }: { movie: any }) => {
    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-image-available.png'}
                alt={movie.title}
            />
            <p>{movie.overview}</p>
            <div>
                <strong>Release Date:</strong> {movie.release_date}
            </div>
            <div>
                <strong>Rating:</strong> {movie.vote_average} / 10
            </div>
            <div>
                <strong>Genres:</strong> {movie.genres.map((genre: any) => genre.name).join(', ')}
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const API_KEY = 'd3e9b5950bd1d7002f6f2f7afa087052';
    const BASE_URL = 'https://api.themoviedb.org/3';

    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: { api_key: API_KEY },
    });

    return {
        props: { movie: response.data },
    };
};

export default MovieDetails;
