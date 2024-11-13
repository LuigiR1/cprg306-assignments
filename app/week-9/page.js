"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black">
            <header>
                <h1 className="text-4xl font-mono text-center text-orange-600 mb-8">Firebase Auth</h1>
            </header>
            {user ? (
                <div className="text-center p-6 bg-white shadow-md rounded-lg">
                    <p className="text-lg font-mono text-gray-800">Welcome, {user.displayName}!</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <img src={user.photoURL} alt="User avatar" className="w-16 h-16 rounded-full mx-auto mt-4 shadow-sm" />
                    <div className="mt-6">
                        <Link href="/week-9/shopping-list" className="text-orange-500 hover:text-orange-500 underline">
                            Go to Shopping List
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="mt-6 text-white bg-orange-500 hover:bg-orange-600 rounded px-6 py-2 transition duration-200"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="text-center p-6 bg-white shadow-md rounded-lg">
                    <button
                        type="button"
                        className="text-lg font-semibold text-white bg-orange-500 hover:bg-orange-700 rounded px-6 py-2 transition duration-200"
                        onClick={handleSignIn}
                    >
                        Sign In with GitHub
                    </button>
                </div>
            )}
        </main>
    );
}
