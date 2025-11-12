'use client';

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname === "/login" || pathname === "/signup";

    return (
        <>
            {!isAuthPage && <Header />}
            {children}
            {!isAuthPage && <Footer />}
        </>
    );
}