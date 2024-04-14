import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../main';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

