'use client';

export default function FormHeader({ type }) {
    return (
        <h2 className="text-center text-2xl font-bold mb-6">
            {type === 'login' ? 'Login' : 'Register'}
        </h2>
    );
}