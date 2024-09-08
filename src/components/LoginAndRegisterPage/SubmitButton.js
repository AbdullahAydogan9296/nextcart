'use client';

export default function SubmitButton({ label, onClick, variant = 'primary' }) {
    const buttonStyles =
        variant === 'primary'
            ? 'bg-black text-white'
            : 'bg-gray-200 text-black';

    return (
        <button
            className={`${buttonStyles} w-full py-2 rounded-md mb-4`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}