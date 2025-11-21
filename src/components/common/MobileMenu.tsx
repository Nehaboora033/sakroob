"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { DropdownItem } from "./Header";
import { Squash as Hamburger } from "hamburger-react";



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

    // Animate submenu when opening
    useEffect(() => {
        if (activeDropdown && submenuRef.current) {
            gsap.fromTo(
                submenuRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.5, ease: "power2.out" }
            );
        }
    }, [activeDropdown]);



    // Reset dropdown when menu closes (safe)
    const handleMenuClose = () => {
        setActiveDropdown(null);
        onClose();
    };

    // Animate closing of submenu
    const closeDropdown = () => {
        if (submenuRef.current) {
            gsap.to(submenuRef.current, {
                x: "100%",
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => setActiveDropdown(null),
            });
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 h-full sm:w-[50%] w-[80%] bg-white shadow-xl z-50 transition-transform duration-500 
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            onTransitionEnd={() => {
                if (!isOpen) setActiveDropdown(null); // reset AFTER animation finishes
            }} >
            {/* HEADER */}
            <div className="flex items-center justify-between bg-black p-4  border-b">
                <p className="font-semibold text-white text-[24px]">Menu</p>

                {/* SAME HAMBURGER AS HEADER */}
                <button onClick={handleMenuClose}>
                    <Hamburger toggled={true} toggle={() => { }} color="#ffffff" size={28} />
                </button>
            </div>
            {/* MAIN MENU */}
            <div className="mt-4 flex flex-col gap-4">
                {/* Dropdown Sections */}
                {dropDownData.map((item, i) => (
                    <div
                        key={i}
                        className="border-b pb-3 px-4 flex justify-between items-center cursor-pointer"
                        onClick={() => setActiveDropdown(item)}
                    >
                        <p className="font-semibold text-dark-blue">{item.placeholder}</p>
                        <ChevronRight />
                    </div>
                ))}

                {/* Simple Links */}
                {navLinksData.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            handleMenuClose();
                            setTimeout(() => {
                                window.location.href = item.link;
                            }, 200);
                        }}
                        className="border-b pb-3 px-4 text-dark-blue cursor-pointer"
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            {/* SUBMENU */}
            {activeDropdown && (
                <div
                    ref={submenuRef}
                    className="absolute top-0 right-0 w-full h-full bg-white p-4 shadow-xl"
                >
                    {/* Back Button */}
                    <div className="flex items-center mb-4">
                        <button onClick={closeDropdown} className="mr-2">
                            <ChevronLeft size={24} />
                        </button>
                        <p className="font-semibold text-dark-blue text-[18px]">
                            {activeDropdown.placeholder}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {activeDropdown.options.map((opt, j) => (
                            <Link
                                key={j}
                                href={opt.link}
                                className="text-[15px] text-gray-600 border-b pb-2"
                                onClick={handleMenuClose}
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