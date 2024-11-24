import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'd3e9b5950bd1d7002f6f2f7afa087052';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async ({ query = '', page = 1 }: { query?: string; page?: number }) => {
        const endpoint = query
            ? `${BASE_URL}/search/movie`
            : `${BASE_URL}/movie/popular`;
        const response = await axios.get(endpoint, {
            params: { api_key: API_KEY, query, page },
        });
        return response.data;
    }
);

interface MovieState {
    movies: any[];
    page: number;
    total_pages: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: MovieState = {
    movies: [],
    page: 1,
    total_pages: 0,
    status: 'idle',
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload.results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setPage } = moviesSlice.actions;

export default moviesSlice.reducer;
