import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Hi, I’m <strong>Chathuranga™</strong>, an IT student at <strong>UOVT Sri Lanka</strong>, pursuing a B.Tech degree in MMW & WEB.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    I am passionate about full-stack development, web technologies, and deploying real-world projects. I love experimenting with new technologies like Docker, CI/CD, and cloud deployment.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    I am continuously learning, building, and sharing my work. My goal is to create meaningful software that is useful and accessible to everyone.
                </p>
            </div>
        </section>
    );
}
