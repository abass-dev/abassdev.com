import { ICON_SIZES, DEFAULT_ICON_SIZE } from './icon-constants';

export const getIconSize = (size?: number | keyof typeof ICON_SIZES): number => {
    if (!size) return DEFAULT_ICON_SIZE;
    if (typeof size === 'number') return size;
    return ICON_SIZES[size];
};

export const optimizePaths = (paths: string[]): string[] => {
    return paths.map(path =>
        path.replace(/\s+/g, ' ').trim()
    );
};