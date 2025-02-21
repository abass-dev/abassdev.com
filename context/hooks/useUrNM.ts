import { UrNMContext } from '../UrNMContext';
import { useContext } from 'react';

export function useUrNM() {
    return useContext(UrNMContext);
}