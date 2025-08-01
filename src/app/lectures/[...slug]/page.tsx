'use client';

import { use } from 'react';
import { useParams } from 'next/navigation';

export default function LecturePage(){
    // Get the slug param from the URL using Next.js 13 app router
    // This works in server components

    const params = useParams();
    console.log(params.slug);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
            <h1 className="text-4xl font-bold text-purple-700 mb-4 text-center">Lecture Page</h1>
            <p className="text-gray-600 text-center mb-2">
                Welcome to the lecture: <span className="font-mono text-blue-600">{Array.isArray(params.slug) ? params.slug.join(' / ') : params.slug}</span>
            </p>
            <div className="mt-6 flex justify-center">
                <svg className="w-16 h-16 text-purple-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
            </div>
            </div>
        </div>
    );
};