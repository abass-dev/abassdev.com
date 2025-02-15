import React from 'react';
import { IconProps } from './types';
import { getIconSize } from './icon-utils';
import { DEFAULT_STROKE_WIDTH } from './icon-constants';

export const BaseIcon: React.FC<IconProps & { paths: string[] }> = ({
    size,
    color = 'currentColor',
    strokeWidth = DEFAULT_STROKE_WIDTH,
    className = '',
    onClick,
    'aria-label': ariaLabel,
    title,
    paths,
    useSprite = false
}) => {
    const iconSize = getIconSize(size);
    const classes = `icon ${onClick ? 'icon-interactive' : ''} ${className}`.trim();

    if (useSprite) {
        return (
            <svg
                className={classes}
                width={iconSize}
                height={iconSize}
                aria-label={ariaLabel}
                role={onClick ? 'button' : 'img'}
                onClick={onClick}
                tabIndex={onClick ? 0 : undefined}
            >
                {title && <title>{title}</title>}
                <use href={`#icon-${ariaLabel?.toLowerCase()}`} />
            </svg>
        );
    }

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classes}
            onClick={onClick}
            aria-label={ariaLabel}
            role={onClick ? 'button' : 'img'}
            tabIndex={onClick ? 0 : undefined}
        >
            {title && <title>{title}</title>}
            {paths.map((d, i) => (
                <path key={i} d={d} />
            ))}
        </svg>
    );
};