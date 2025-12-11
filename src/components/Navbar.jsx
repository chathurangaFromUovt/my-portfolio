import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">Chathuranga™</div>
                <div className="space-x-6">
                    <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
                    <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
                    <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
                </div>
            </div>
        </nav>
    );
}
