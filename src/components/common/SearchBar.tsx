'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Input from './Input';
import { Search } from '@/Utils/icons';
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
    const words = useMemo(
        () => ['Search', 'Search PC', 'Search Router', 'Search Chair'],
        []
    );

    const router = useRouter();
    const [placeholder, setPlaceholder] = useState('');
    const [searchValue, setSearchValue] = useState('');  // 🔥 required
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (!searchValue.trim()) return;

            router.push(`/search?query=${searchValue.toLowerCase()}`);

            // ⬇️ Clear the input after navigating
            setSearchValue("");
        }
    };

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < currentWord.length) {
            timeout = setTimeout(() => {
                setCharIndex(charIndex + 1);
                setPlaceholder(currentWord.slice(0, charIndex + 1));
            }, 150);
        } else if (!isDeleting && charIndex === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setCharIndex(charIndex - 1);
                setPlaceholder(currentWord.slice(0, charIndex - 1));
            }, 100);
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
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
                value={searchValue}           // ✔ controlled input
                onChange={(e) => setSearchValue(e.target.value)}   // ✔ update value
                className="w-full border border-[#112D491A] shadow-swipercard pr-14"
                onKeyDown={handleSearch}
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
    );
};

export default SearchBar;