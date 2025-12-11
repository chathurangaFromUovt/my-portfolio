import React from 'react';

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
}
