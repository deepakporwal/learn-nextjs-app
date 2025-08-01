'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push("/home");
    }

    return (
        <div className="font-sans min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex flex-col items-center justify-center p-6">
            <main className="flex flex-col gap-10 items-center w-full">
                <div className="flex flex-col items-center gap-2">
                    <Image
                        src="https://img.icons8.com/color/96/000000/user-shield.png"
                        alt="Login Icon"
                        width={80}
                        height={80}
                        className="w-20 h-20 mb-2 drop-shadow-lg"
                        priority
                    />
                    <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-lg text-blue-900/70 font-medium">
                        Sign in to your account
                    </p>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-7 bg-white/80 shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md border border-blue-100 backdrop-blur">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-sm font-semibold text-blue-700 tracking-wide">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            className="border-2 border-blue-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-blue-300 transition bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50 text-blue-900 placeholder:text-blue-300 shadow-inner"
                            autoComplete="username"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-semibold text-blue-700 tracking-wide">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="border-2 border-blue-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-pink-300 transition bg-gradient-to-r from-pink-50 via-blue-50 to-yellow-50 text-blue-900 placeholder:text-blue-300 shadow-inner"
                            autoComplete="current-password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 text-white font-bold rounded-xl p-3 mt-2 shadow-lg hover:from-blue-600 hover:via-pink-500 hover:to-yellow-500 transition-all duration-200"
                    >
                        Login
                    </button>
                    <div className="flex justify-between mt-2 text-sm">
                        <a href="#" className="text-blue-500 hover:underline transition">Forgot password?</a>
                        <a href="#" className="text-pink-500 hover:underline transition">Sign up</a>
                    </div>
                </form>
            </main>
            <footer className="mt-10 flex gap-6 flex-wrap items-center justify-center text-blue-700/80">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#2563eb"/>
                    </svg>
                    Learn Next.js
                </a>
            </footer>
        </div>
    );
}