'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const publicRoutes = ['/login', '/signup'];

        if (!loading) {
            if (!user && !publicRoutes.includes(pathname)) {
                router.push('/signup');
            } else if (user && publicRoutes.includes(pathname)) {
                router.push('/');
            }
        }
    }, [user, loading, pathname, router]);

    return <>{children}</>;
};

export default ProtectedRoute;