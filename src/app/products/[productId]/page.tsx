'use client';
import { useParams, useSearchParams } from 'next/navigation';

export default function ProductPage() {
    const params = useParams();
    const productId = params?.productId;
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-purple-700 mb-4">Product Details</h1>
            <p className="text-lg text-gray-700">
                <span className="font-semibold">Product ID:</span> <span className="text-blue-600">{productId} {category && `(${category})`}</span>
            </p>
            </div>
        </div>
    );
}