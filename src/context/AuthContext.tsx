'use client';
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User, getRedirectResult } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/firebaseConfig";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    logout: async () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    useEffect(() => {
        // 🔥 FOR GOOGLE REDIRECT LOGIN
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    setUser(result.user); // LOGIN SUCCESSFUL!
                }
            })
            .finally(() => setLoading(false));

        // 🔥 LISTEN FOR AUTH STATE
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return null;

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
