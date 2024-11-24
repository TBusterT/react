import MoviesListCard from './MoviesListCard';

const MoviesList = ({ movies, status }: { movies: any[]; status: string }) => {
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to load movies</div>;
    }

    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
