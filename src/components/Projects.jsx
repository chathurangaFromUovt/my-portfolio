import React from 'react';
import ProjectCard from './ProjectCard';
import EOMSImage from '../assets/eoms.png'; // placeholder image
import VPSImage from '../assets/vps.png';   // placeholder image

export default function Projects() {
    const projects = [
        {
            title: "Operations Management Project",
            description: "Employee Operations Management System - Full stack web application with Spring Boot, MySQL and React.",
            image: EOMSImage,
            link: "http://your-eoms-live-link.com",
        },
        {
            title: "Virtual Private Sever Configuration",
            description: "A Virtual Private Sever Configurations on a Cloud Storage Provider. Showcasing DevOps and CI/CD skills.",
            image: VPSImage,
            link: "http://your-vps-live-link.com",
        },
    ];

    return (
        <section id="projects" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
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
