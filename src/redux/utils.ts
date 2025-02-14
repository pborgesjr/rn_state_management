import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {ReduxDispatch, State} from './types';

export const useAppDispatch = () => useDispatch<ReduxDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
