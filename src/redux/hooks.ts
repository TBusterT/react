import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // Перевірте правильний шлях до store.ts

// Типізований хук для `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Типізований хук для `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
