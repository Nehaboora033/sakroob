'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const publicRoutes = ['/login', '/signup'];

    useEffect(() => {
        if (loading) return;

        if (!user && !publicRoutes.includes(pathname)) {
            router.replace('/signup');
        }

        if (user && publicRoutes.includes(pathname)) {
            router.replace('/');
        }
    }, [user, loading, pathname, router]);

    if (loading) return null;              // wait for Firebase
    if (!user && !publicRoutes.includes(pathname)) return null;

    return <>{children}</>;
};

export default ProtectedRoute;