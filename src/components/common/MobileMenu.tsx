"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { DropdownItem } from "./Header";

export interface NavlinksProps {
    name: string;
    link: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    dropDownData: DropdownItem[];
    navLinksData: NavlinksProps[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    dropDownData,
    navLinksData,
}) => {
    const [activeDropdown, setActiveDropdown] = useState<DropdownItem | null>(null);
    const submenuRef = useRef<HTMLDivElement>(null);

    // Animate submenu when activeDropdown changes
    useEffect(() => {
        if (activeDropdown && submenuRef.current) {
            gsap.fromTo(
                submenuRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.5, ease: "power2.out" }
            );
        }
    }, [activeDropdown]);

    const closeDropdown = () => {
        if (submenuRef.current) {
            gsap.to(submenuRef.current, {
                x: "100%",
                duration: 0.7,
                ease: "power2.out",
                onComplete: () => setActiveDropdown(null),
            });
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 bg-black border-b">
                <p className="font-semibold text-white text-[24px]">
                    Menu
                </p>
                {/* Always show X icon */}
                <button onClick={onClose}>
                    <X size={28} className="text-white" />
                </button>
            </div>

            {/* MAIN MENU */}
            <div className="mt-4 flex flex-col gap-4">
                {dropDownData.map((item, i) => (
                    <div
                        key={i}
                        className="border-b pb-3 px-4 flex justify-between items-center"
                    >
                        <p className="font-semibold text-dark-blue">{item.placeholder}</p>
                        <button onClick={() => setActiveDropdown(item)}>
                            <ChevronRight />
                        </button>
                    </div>
                ))}

                {navLinksData.map((item, i) => (
                    <Link
                        key={i}
                        href={item.link}
                        className="border-b pb-3 text-dark-blue flex justify-between px-4"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* DROPDOWN SUBMENU */}
            {activeDropdown && (
                <div
                    ref={submenuRef}
                    className="absolute top-0 right-0 w-full h-full bg-white p-4 shadow-xl"
                >
                    {/* Submenu Title with Back (still uses ChevronLeft inside submenu) */}
                    <div className="flex items-center mb-4">
                        <button onClick={closeDropdown} className="mr-2">
                            <ChevronLeft size={24} />
                        </button>
                        <p className="font-semibold text-dark-blue text-lg text-[18px]">
                            {activeDropdown.placeholder}
                        </p>
                    </div>

                    {/* Submenu Links */}
                    <div className="flex flex-col gap-2">
                        {activeDropdown.options.map((opt, j) => (
                            <Link
                                key={j}
                                href={opt.link}
                                className="text-[15px] text-gray-600 border-b pb-2"
                                onClick={onClose}
                            >
                                {opt.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;