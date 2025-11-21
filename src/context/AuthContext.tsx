'use client';
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;   // <-- add logout type
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    logout: async () => { },        // <-- default logout placeholder
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== "undefined") {
            const savedUser = localStorage.getItem("user");
            return savedUser ? JSON.parse(savedUser) : null;
        }
        return null;
    });

    const [loading, setLoading] = useState(!user);


    // ✅ REAL LOGOUT FUNCTION
    const logout = async () => {
        await signOut(auth);          // Firebase logout
        localStorage.clear();         // remove stored data
        setUser(null);                // reset user
    };


    // 🔄 Listen to Firebase auth changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                localStorage.setItem("user", JSON.stringify(currentUser));
                setUser(currentUser);
            } else {
                localStorage.removeItem("user");
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);