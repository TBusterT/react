import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchMovies, setPage } from '../redux/moviesSlice';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useAppDispatch();
    const { movies, page, total_pages, status } = useAppSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies({ query: searchQuery, page }));
    }, [dispatch, searchQuery, page]);

    const handleSearch = () => {
        dispatch(setPage(1));  // Скидаємо на першу сторінку
        dispatch(fetchMovies({ query: searchQuery, page: 1 }));
    };

    const handleNext = () => {
        if (page < total_pages) {
            dispatch(setPage(page + 1));
        }
    };

    const handleBack = () => {
        if (page > 1) {
            dispatch(setPage(page - 1));
        }
    };

    return (
        <div className="container">
            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for movies..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <MoviesList movies={movies} />
            <div className="pagination">
                <button onClick={handleBack} disabled={page <= 1}>
                    Back
                </button>
                <button onClick={handleNext} disabled={page >= total_pages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default HomePage;
