import React from 'react';
import { IconProps } from './types';

const ChevronDoubleUpIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = '',
    onClick,
    'aria-label': ariaLabel = 'Scroll to top',
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
            {/* First chevron (bottom) */}
            <polyline points="4 15 12 7 20 15" />
            {/* Second chevron (top) */}
            <polyline points="4 20 12 12 20 20" />
        </svg>
    );
};

export default ChevronDoubleUpIcon;