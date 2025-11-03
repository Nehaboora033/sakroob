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
                router.push('/signup'); // now goes to signup
            } else if (user && publicRoutes.includes(pathname)) {
                router.push('/');
            }
        }
    }, [user, loading, pathname, router]);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center text-darkblue text-lg">
                Loading...
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;