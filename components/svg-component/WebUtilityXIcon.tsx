import React from 'react';
import { IconProps } from './types';

const WebUtilityXIcon: React.FC<IconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    onClick,
    'aria-label': ariaLabel = 'WebUtilityX Icon',
}) => {
    const classes = `icon ${onClick ? 'icon-interactive' : ''} ${className}`.trim();

    // Use color prop to dynamically set gradient colors
    const backgroundColor = color === 'currentColor' ? '#333333' : color;
    const backgroundEndColor = color === 'currentColor' ? '#000000' : `${color}dd`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 300 300"
            className={classes}
            onClick={onClick}
            aria-label={ariaLabel}
            role={onClick ? 'button' : 'img'}
            tabIndex={onClick ? 0 : undefined}
        >
            <defs>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: backgroundColor, stopOpacity: "1" }} />
                    <stop offset="100%" style={{ stopColor: backgroundEndColor, stopOpacity: "1" }} />
                </linearGradient>
                <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#cccccc", stopOpacity: "0.4" }} />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="300" height="300" rx="40" fill="url(#backgroundGradient)" />

            <g transform="translate(150,150) scale(0.6)">
                <path
                    d="M0,-100 L30,-90 L50,-50 L90,-30 L100,0 L90,30 L50,50 L30,90 L0,100 L-30,90 L-50,50 L-90,30 L-100,0 L-90,-30 L-50,-50 L-30,-90 Z"
                    fill="url(#gearGradient)"
                    filter="url(#glow)"
                />
                <circle cx="0" cy="0" r="40" fill="#000000" />

                <path
                    d="M-60,-20 L-40,20 L-20,-10 L0,20 L20,-10 L40,20 L60,-20"
                    fill="none"
                    stroke="white"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                />
            </g>

            <text
                x="150"
                y="260"
                fontFamily="Arial, sans-serif"
                fontSize="28"
                fontWeight="bold"
                textAnchor="middle"
                fill="white"
                filter="url(#glow)"
            >
                WebUtilityX
            </text>
        </svg>
    );
};

export default WebUtilityXIcon;