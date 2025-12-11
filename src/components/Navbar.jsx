import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto px-6 py-4 flex justify-center">
                <div className="space-x-6 flex">
                    <a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
                    <a href="#projects" className="text-gray-700 hover:text-blue-500 font-medium">Projects</a>
                    <a href="#about" className="text-gray-700 hover:text-blue-500 font-medium">About</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">Contact</a>
                </div>
            </div>
        </nav>
    );
}
