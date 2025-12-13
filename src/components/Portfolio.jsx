import React, { useState, useEffect } from 'react';
import { HeartHandshake, WandSparkles, Github, Linkedin, Mail, Code, Palette, Server, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'projects', 'about', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "Management Systems",
            description: "Full-stack web application with Spring Boot, JWT authentication, MySQL, and React+Vite with Tailwind CSS. Features complete CRUD operations and secure user management.",
            image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=800&h=600&fit=crop",
            link: "http://144.24.101.223/",
            tags: ["Spring Boot", "React", "MySQL", "JWT"]
        },
        {
            title: "Server Configurations",
            description: "Professional DevOps setup featuring Docker containerization, GitHub Actions CI/CD pipeline, and automated deployment workflows demonstrating modern infrastructure practices.",
            image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
            link: "https://github.com/chathurangaFromUovt/my-portfolio",
            tags: ["Docker", "CI/CD", "DevOps", "Automation"]
        }
    ];

    const skills = [
        { icon: <Code className="w-6 h-6" />, name: "Web Development", desc: "React, Spring Boot, Tailwind" },
        { icon: <Palette className="w-6 h-6" />, name: "Multimedia", desc: "Design & Creative Tools" },
        { icon: <Server className="w-6 h-6" />, name: "DevOps", desc: "Docker, CI/CD, Cloud" }
    ];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div> <WandSparkles  /> </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['home', 'projects', 'about', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize font-medium transition-all ${
                                    activeSection === item
                                        ? 'text-blue-600 scale-110'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t mt-4 py-4 px-6 space-y-4">
                        {['home', 'projects', 'about', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left capitalize font-medium text-gray-700 hover:text-blue-600 py-2"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50"></div>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-bounce">
                        🎓 Open to Opportunities
                    </div>

                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent pb-1">
                        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent">
                            Hi, I'm Chathuranga™
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
                        Aspiring Developer & Technology Enthusiast
                    </p>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        In pursuit of elegant solutions and meaningful impact
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-white text-gray-700 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all border-2 border-gray-200"
                        >
                            Get in Touch
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a href="mailto:chathurangafromuovt@gmail.com" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/chathurangaFromUovt" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/chathuranga-from-uovt-5119933a0/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-gray-400" />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 bg-gradient-to-r bg-clip-text from-blue-600 to-purple-600">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Showcasing my recent work in web development, DevOps, and multimedia applications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:text-purple-600 transition-colors"
                                    >
                                        <span>View Project</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            About Me
                        </h2>

                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                I'm a passionate student at <strong>University of Vocational Technology Sri Lanka</strong>, pursuing a B.Tech degree in Multimedia & Web. My journey in technology is driven by curiosity and the desire to build solutions that make a difference.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                I enjoy creating dynamic applications, exploring multimedia development, and implementing modern DevOps practices. From designing user interfaces to configuring server infrastructure, I enjoy every aspect of bringing ideas to life.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                My mission is to continuously learn, experiment with cutting-edge technologies, and build software that's both powerful and accessible. I'm particularly excited about Docker, CI/CD pipelines, and cloud deployment strategies.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{skill.name}</h3>
                                    <p className="text-gray-600">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Let's Connect
                            </h2>
                            <p className="text-gray-600 text-lg">
                                I'm always open to discussing new projects, opportunities, or collaborations
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl">
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Email Me</h3>
                                    <a
                                        href="mailto:chathurangafromuovt@gmail.com"
                                        className="text-blue-600 text-lg font-medium hover:text-purple-600 transition-colors"
                                    >
                                        chathurangafromuovt@gmail.com
                                    </a>
                                </div>
                                <p className="text-gray-600 max-w-md">
                                    Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
                                </p>
                                <a
                                    href="mailto:chathurangafromuovt@gmail.com"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                                >
                                    Send Message
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © 2025 Chathuranga™ | Built with React & Tailwind
                    </p>
                    <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
                        <HeartHandshake className="w-4 h-4" />
                        Thanks for stopping by !!!
                    </p>

                </div>
            </footer>
        </div>
    );
}