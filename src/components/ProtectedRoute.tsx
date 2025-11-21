'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const publicRoutes = ['/login', '/signup'];

        if (!loading) {
            if (!user && !publicRoutes.includes(pathname)) {
                router.replace('/signup');  // IMPORTANT: replace prevents flicker
            }
            else if (user && publicRoutes.includes(pathname)) {
                router.replace('/');
            }
        }
    }, [user, loading, pathname, router]);

    if (loading) {
        return null;      // prevent UI from rendering
    }

    // Block UI until redirect decision is finished
    const publicRoutes = ['/login', '/signup'];

    if (!user && !publicRoutes.includes(pathname)) {
        return null;   // wait for redirect to finish
    }

    return <>{children}</>;
};

export default ProtectedRoute;