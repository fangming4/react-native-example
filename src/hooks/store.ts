import {AppDispatch, RootState} from '@types';
import {useSelector} from 'react-redux';
import {TypedUseSelectorHook, useDispatch} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getState = (state: RootState) => state.simple;
