'use client';

export default function ErrorMessage({ message }) {
    return message && <p className="text-red-500 text-center mb-4">{message}</p>;
}