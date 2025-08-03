'use client';
import { redirect } from "next/navigation";
export default function Home(){
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: '48px 24px'
        }}>
            <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#3730a3',
            marginBottom: '16px'
            }}>
            Welcome to the Home Page
            </h1>
            <nav style={{ marginBottom: '24px' }}>
                <a href="/home" style={{ marginRight: '16px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>Home</a>
                <a href="/about" style={{ marginRight: '16px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>About</a>
                <a href="/contact" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 500, marginRight: '16px' }}>Contact</a>
                <a href="/products" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>Products</a>
            </nav>
            <p style={{
            fontSize: '1.2rem',
            color: '#4b5563',
            maxWidth: '420px',
            textAlign: 'center'
            }}>
            Explore our features and enjoy your stay!
            </p>
            <button
                style={{
                    marginTop: '32px',
                    padding: '12px 32px',
                    backgroundColor: '#6366f1',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(99,102,241,0.12)'
                }}
                onClick={() => alert('Button clicked!')}
            >
                Click Me
            </button>
            <button
                style={{
                    marginTop: '16px',
                    padding: '12px 32px',
                    backgroundColor: '#e11d48',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(225,29,72,0.12)'
                }}
                onClick={() => redirect('/users')}
            >
                Go to Users
            </button>
        </div>
    );
}