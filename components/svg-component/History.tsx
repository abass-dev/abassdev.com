import React from 'react';
import { IconProps } from './types';

// History.tsx
const History: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = '',
    onClick,
    'aria-label': ariaLabel = 'History Icon',
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
            <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
            <path d="M12 7v5l3 3" />
            <path d="M3.05 11a9 9 0 0 1 2-4" />
        </svg>
    );
};

export default History;