import React from 'react';
import { IconProps } from './types';

const BookAIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = '',
    onClick,
    'aria-label': ariaLabel = 'Book A Icon',
}) => {
    const classes = `icon ${onClick ? 'icon-interactive' : ''} ${className}`.trim();

    return (
        <svg
            width={size}
            height={size}
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
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <text x="11" y="15" fontSize="10" fill={color} stroke="none">A</text>
        </svg>
    );
};

export default BookAIcon;