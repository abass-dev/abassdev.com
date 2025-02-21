import React from 'react';
import { IconProps } from './types';

const MenuFries: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = '',
    onClick,
    'aria-label': ariaLabel = 'Menu Fries',
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
            <path d="M4 7h16M4 12h16M4 17h10" />
            <path d="M18 17l-3-3m0 0l3-3m-3 3h8" />
        </svg>
    );
};
export default MenuFries;