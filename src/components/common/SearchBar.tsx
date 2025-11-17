'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Input from './Input';
import { Search } from '@/Utils/icons';

const SearchBar: React.FC = () => {
    const words = useMemo(
        () => ['Search', 'Search PC', 'Search Router', 'Search Chair'],
        []
    );

    const [placeholder, setPlaceholder] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < currentWord.length) {
            // Typing animation
            timeout = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
                setPlaceholder(currentWord.slice(0, charIndex + 1));
            }, 150);
        } else if (!isDeleting && charIndex === currentWord.length) {
            // Wait before deleting
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
            // Deleting animation
            timeout = setTimeout(() => {
                setCharIndex((prev) => prev - 1);
                setPlaceholder(currentWord.slice(0, charIndex - 1));
            }, 100);
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <div className="relative sm:w-[488px] w-[305px]">
            <Input
                type="search"
                name="search"
                placeholder={placeholder}
                className="w-full border border-[#112D491A] shadow-swipercard pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
    );
};

export default SearchBar;