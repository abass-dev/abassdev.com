// types.ts
export interface IconProps {
    /** Size of the icon in pixels */
    size?: number;
    /** Color of the icon - accepts any valid CSS color */
    color?: string;
    /** Additional CSS classes */
    className?: string;
    /** Stroke width for outlined icons */
    strokeWidth?: number;
    /** Click handler */
    onClick?: () => void;
    /** Accessibility label */
    "aria-label"?: string;
    /** Optional title for hover tooltip */
    title?: string;
    /** Whether the icon should be rendered as an SVG sprite */
    useSprite?: boolean;
}