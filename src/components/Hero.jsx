import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100">
            <div className="text-center px-4">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Chathuranga™</h1>
                <p className="text-xl text-gray-700 mb-6">IT Student at UOVT | MMW & WEB B.Tech | Aspiring Full-Stack Developer</p>
                <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">See My Projects</a>
            </div>
        </section>
    );}
