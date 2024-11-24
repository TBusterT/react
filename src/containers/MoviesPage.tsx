import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchMovies } from '../redux/moviesSlice';
import MoviesList from '../components/MoviesList';

const MoviesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useAppDispatch();
    const { movies, page, status } = useAppSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies({ page: 1 })); // Завантажуємо фільми за замовчуванням
    }, [dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (e.target.value === '') {
            dispatch(fetchMovies({ page: 1 })); // Якщо поле порожнє, показуємо популярні фільми
        } else {
            dispatch(fetchMovies({ query: e.target.value, page: 1 })); // Пошук фільмів
        }
    };

    return (
        <div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={handleSearch}
                    style={inputStyle}
                />
            </div>
            {status === 'loading' ? (
                <p>Loading...</p>
            ) : (
                <MoviesList movies={movies} />
            )}
        </div>
    );
};

const inputStyle = {
    width: '300px',
    height: '30px',
    fontSize: '16px',
    paddingLeft: '10px',
    marginBottom: '20px',
};

export default MoviesPage;
