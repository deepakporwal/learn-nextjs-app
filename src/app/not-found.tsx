'use client';

import Link from 'next/link';

export default function Notfound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
            color: '#fff',
            fontFamily: 'Segoe UI, sans-serif'
        }}>
            <h1 style={{
                fontSize: '6rem',
                margin: 0,
                letterSpacing: '0.1em',
                textShadow: '0 4px 24px rgba(0,0,0,0.5)'
            }}>404</h1>
            <h2 style={{
                fontSize: '2rem',
                margin: '16px 0 8px 0',
                fontWeight: 400
            }}>Page Not Found</h2>
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '32px',
                color: '#b0b0b0'
            }}>
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/" style={{
                padding: '12px 32px',
                background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                color: '#fff',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 2px 12px rgba(221,36,118,0.2)',
                transition: 'background 0.2s'
            }}>
                Go Home
            </Link>
        </div>
    );
}