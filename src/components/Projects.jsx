import React from 'react';
import ProjectCard from './ProjectCard';
import EOMSImage from '../assets/eoms.png'; // placeholder image
import VPSImage from '../assets/vps.png';   // placeholder image

export default function Projects() {
    const projects = [
        {
            title: "Employee Management Project",
            description: "Employee Operations Management System - Full stack web application with Spring Boot, JSON Web Token, MySQL, React+Vite with Tailwind-CSS.",
            image: EOMSImage,
            link: "http://144.24.101.223/",
        },
        {
            title: "V. P. S. Configuration",
            description: "Virtual Private Server configuration - Docker and GitHub Actions, including server setup and automated deployments, showcasing DevOps and CI/CD skills.",
            image: VPSImage,
            link: "https://github.com/chathurangaFromUovt/my-portfolio",
        },
    ];

    return (
        <section id="projects" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 text-center">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
