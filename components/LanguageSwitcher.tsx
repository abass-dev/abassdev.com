"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from 'lucide-react';
import Link from "next/link";
import { useParams, usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
];

const LanguageSwitcher = ({ open, position = 'sidebar' }: { open: boolean, position?: 'sidebar' | 'topRight' }) => {
    const params = useParams();
    const pathname = usePathname();
    const currentLocale = params.locale || 'en';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const getNewPathname = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        return segments.join('/');
    };

    return (
        <div className={cn(
            "relative",
            position === 'topRight' && "fixed top-4 right-4 z-50"
        )} ref={dropdownRef}>
            <Button
                variant="ghost"
                size="sm"
                className={cn(
                    "flex items-center gap-2",
                    "hover:text-gray-100 hover:bg-gray-800 rounded-md",
                    "transition-colors duration-200",
                    "w-full justify-between",
                    position === 'topRight' && "bg-gray-800 text-gray-100"
                )}
                onClick={toggleDropdown}
            >
                <div className="flex items-center gap-2">
                    <Globe size="20" />
                    <span className={cn(
                        "whitespace-pre transition-all duration-200",
                        !open && position !== 'topRight' && "lg:hidden"
                    )}>
                        {LANGUAGES.find(lang => lang.code === currentLocale)?.name || 'English'}
                    </span>
                </div>
                <ChevronDown size="16" className={cn(
                    "transition-transform duration-200",
                    isDropdownOpen && "transform rotate-180"
                )} />
            </Button>

            {isDropdownOpen && (
                <div className={cn(
                    "absolute left-0 mt-2 w-full bg-gray-800 rounded-md overflow-hidden",
                    "shadow-lg z-10",
                    isDropdownOpen && "min-w-20"
                )}>
                    {LANGUAGES.map((language) => (
                        <Link
                            key={language.code}
                            href={getNewPathname(language.code)}
                            className={cn(
                                "block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700",
                                "transition-colors duration-200",
                                currentLocale === language.code && "bg-gray-700"
                            )}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            {language.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;