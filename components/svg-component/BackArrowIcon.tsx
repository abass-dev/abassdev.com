import React from 'react';
import { IconProps } from './types';
import './styles/Icons.css';

const BackArrowIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = '',
    onClick,
    'aria-label': ariaLabel = 'Go back',
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
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
        </svg>
    );
};
export default BackArrowIcon;