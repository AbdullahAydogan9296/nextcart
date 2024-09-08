import React from 'react';
import './Loading.css'
export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="spinner">
                <div className="slice red"></div>
                <div className="slice orange"></div>
                <div className="slice yellow"></div>
                <div className="slice green"></div>
                <div className="slice blue"></div>
                <div className="slice purple"></div>
            </div>
        </div>
    );
}
