import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Star, Award, BookOpen, Briefcase, Code, Brain, Zap, ChevronRight, Calendar } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');

    const skills = {
        languages: ['Python', 'JavaScript', 'C', 'Java', 'HTML/CSS'],
        aiml: ['Deep Learning', 'NLP', 'LLMs', 'Reinforcement Learning', 'AGI'],
        frameworks: ['TensorFlow', 'PyTorch', 'LangChain', 'CrewAI', 'React'],
        tools: ['HuggingFace', 'Docker', 'MongoDB'],
    };

    const projects = [
        {
            title: "Aora - Autonomous Multi-Agent System",
            status: "In Progress",
            description: "End-to-end multi-agent orchestration platform with specialized agents for content creation, code generation, task management, and scientific assistance.",
            tech: ["CrewAI", "LangGraph", "React", "Docker", "MongoDB"],
            highlight: true
        },
        {
            title: "BlueBox - Cold Calling AI Assistant",
            status: "Completed",
            description: "AI-powered voice bot for automated customer interactions, order processing, and feedback collection via phone calls.",
            tech: ["Deepgram", "Flask"],
            highlight: false
        },
        {
            title: "TradeIn - Smart Crypto Trading Bot",
            status: "Completed",
            description: "Deep Q-Learning based trading bot trained over 2.5M steps with market analysis, prediction, and automated execution capabilities.",
            tech: ["Python", "TensorFlow", "Streamlit", "Binance API", "Stable Baselines"],
            highlight: false
        }
    ];

    const achievements = [
        {
            title: "Top 10 Global",
            event: "Snowflake x Streamlit 'Future of AI is Open'",
            participants: "1,713+ participants",
            icon: "🥇"
        },
        {
            title: "Selected Top 30",
            event: "iHUB-AWaDH IIT Ropar Bootcamp",
            participants: "Nationwide competition",
            icon: "🏅"
        },
        {
            title: "2nd Place",
            event: "Project Expo 2024",
            participants: "Sri Eshwar College",
            icon: "🥈"
        }
    ];

    const publications = [
        {
            title: "Advancements and Challenges in Artificial General Intelligence",
            venue: "IEEE Xplore",
            link: "https://ieeexplore.ieee.org/document/10859659"
        },
        {
            title: "Human-Machine Interactions in Conversational AI",
            venue: "Research Publication",
            description: "Explored hybrid intelligence, RLHF, and decentralized AI through blockchain"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated GIF Background */}
            <div
                className="absolute inset-0 bg-[url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHI4aG82Z3R0NTR0ZWx4NWV0N2RxdzdmbTVxcGlqNXdjaDJuZXFyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRQxOLO1cTrerMk/giphy.gif')] opacity-30 z-10"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <style>
                {`
          @keyframes nebulaPulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.4; }
            100% { opacity: 0.2; }
          }
        `}
            </style>

            {/* Hero Section */}
            <div className="relative overflow-hidden z-20">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 animate-[nebulaPulse_15s_ease-in-out_infinite]"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-4 animate-pulse">
                                Santhos Raj B S
                            </h1>
                            <div className="text-2xl text-blue-200 mb-6">
                                <span className="inline-block mx-2">🪐 AI Researcher</span>
                                <span className="inline-block mx-2">✨ ML Engineer</span>
                                <span className="inline-block mx-2">🌌 Multi-Agent Systems Builder</span>
                            </div>
                        </div>

                        <p className="text-xl text-blue-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Building real-world AI applications with cutting-edge machine learning and agentic frameworks.
                            From autonomous multi-agent systems to AI-powered voice assistants, I blend research, coding,
                            and product thinking to create solutions that matter.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <a href="tel:7200299426" className="flex items-center gap-2 bg-gray-900/60 backdrop-blur-md px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-900/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                                <Phone size={16} className="text-blue-400" />
                                <span>7200299426</span>
                            </a>
                            <a href="mailto:santhosraj14@gmail.com" className="flex items-center gap-2 bg-gray-900/60 backdrop-blur-md px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-900/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                                <Mail size={16} className="text-blue-400" />
                                <span>santhosraj14@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-2 bg-gray-900/60 backdrop-blur-md px-6 py-3 rounded-full border border-blue-600">
                                <MapPin size={16} className="text-blue-400" />
                                <span>Coimbatore, India</span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/Santhosraj" className="p-3 bg-gray-900/60 backdrop-blur-md rounded-full border border-gray-600 hover:bg-blue-600/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110">
                                <Github size={24} className="text-blue-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/santhos-raj-32939b242/" className="p-3 bg-gray-900/60 backdrop-blur-md rounded-full border border-gray-600 hover:bg-blue-600/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110">
                                <Linkedin size={24} className="text-blue-300" />
                            </a>
                            <a href="https://leetcode.com/u/SanthosRaj/" className="p-3 bg-gray-900/60 backdrop-blur-md rounded-full border border-gray-600 hover:bg-blue-600/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110">
                                <Code size={24} className="text-blue-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-600">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center space-x-8 py-4">
                        {['about', 'experience', 'projects', 'achievements', 'skills'].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${activeSection === section
                                        ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                                        : 'text-blue-300 hover:text-white hover:bg-gray-700 hover:shadow-[0_0_8px_rgba(59,130,246,0.3)]'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Content Sections */}
            <div className="container mx-auto px-6 py-12 z-20 relative">
                {activeSection === 'about' && (
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Brain className="text-blue-400" />
                            About Me
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <BookOpen className="text-blue-500" size={24} />
                                        Education
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-white text-lg">B.E. Computer Science (AI & ML)</h4>
                                            <p className="text-blue-300">Sri Eshwar College of Engineering (2022–2026)</p>
                                            <p className="text-purple-400 font-medium">CGPA: 8.0</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">CBSE 12th – Chinmaya Vidyalaya</h4>
                                            <p className="text-purple-400 font-medium">90%</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">CBSE 10th – Vani Vidyalaya</h4>
                                            <p className="text-purple-400 font-medium">87.6%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <Award className="text-yellow-300" size={24} />
                                        Certifications
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <ChevronRight size={16} className="text-blue-400" />
                                            <span className="text-blue-200">IBM – Introduction to AI (With Honors)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ChevronRight size={16} className="text-blue-400" />
                                            <span className="text-blue-200">Stanford Online – Advanced Learning Algorithms</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ChevronRight size={16} className="text-blue-400" />
                                            <span className="text-blue-200">Infosys – Introduction to Machine Learning</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Research Publications</h3>
                                    {publications.map((pub, index) => (
                                        <div key={index} className="mb-4 pb-4 border-b border-blue-600 last:border-b-0">
                                            <h4 className="font-semibold text-blue-200 mb-2">{pub.title}</h4>
                                            <p className="text-blue-300 mb-2">{pub.venue}</p>
                                            {pub.link && (
                                                <a href={pub.link} className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                                    View Publication <ExternalLink size={14} />
                                                </a>
                                            )}
                                            {pub.description && (
                                                <p className="text-blue-400 text-sm mt-2">{pub.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'experience' && (
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Briefcase className="text-blue-400" />
                            Experience
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-blue-400">AI Research Intern & ML Engineer</h3>
                                        <p className="text-xl text-blue-300">DeepWeaver AI</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Calendar size={16} />
                                        <span>2024</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-blue-300">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                        <span>Improved AI models for NLP, Computer Vision, and Reinforcement Learning tasks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                        <span>Benchmarked, tuned hyperparameters, and optimized model performance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                        <span>Focused on robust evaluation, real-world deployment, and LLM experimentation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-cyan-400">Full Stack Intern (MERN)</h3>
                                        <p className="text-xl text-blue-300">RVTechLearn</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Calendar size={16} />
                                        <span>2022</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-blue-300">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                                        <span>Built Netflix-like streaming platform "MovieFlix" using Django</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                                        <span>Gained hands-on experience with backend APIs and frontend integration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'projects' && (
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Code className="text-blue-400" />
                            Featured Projects
                        </h2>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className={`bg-gray-900/60 backdrop-blur-md rounded-xl p-6 ${project.highlight ? 'border-2 border-blue-600' : 'border border-gray-600'} hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                                            <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'In Progress' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-green-900/50 text-green-400'}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        {project.highlight && (
                                            <Star className="text-yellow-400 fill-current" size={24} />
                                        )}
                                    </div>
                                    <p className="text-blue-300 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-blue-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === 'achievements' && (
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="text-blue-400" />
                            Achievements
                        </h2>
                        <div className="grid md:grid-cols-1 gap-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border-l-4 border-yellow-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-3xl">{achievement.icon}</span>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-yellow-400">{achievement.title}</h3>
                                            <p className="text-lg text-blue-300">{achievement.event}</p>
                                        </div>
                                    </div>
                                    <p className="text-blue-400">{achievement.participants}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === 'skills' && (
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Zap className="text-blue-400" />
                            Technical Skills
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <h3 className="text-xl font-semibold text-blue-400 mb-4">Languages</h3>
                                <div className="space-y-2">
                                    {skills.languages.map((skill, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="text-blue-200">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <h3 className="text-xl font-semibold text-purple-400 mb-4">AI/ML</h3>
                                <div className="space-y-2">
                                    {skills.aiml.map((skill, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span className="text-blue-200">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <h3 className="text-xl font-semibold text-green-400 mb-4">Frameworks</h3>
                                <div className="space-y-2">
                                    {skills.frameworks.map((skill, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-blue-200">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Tools & Platforms</h3>
                                <div className="space-y-2">
                                    {skills.tools.map((skill, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <span className="text-blue-200">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 inline-block border border-blue-600">
                                <h3 className="text-xl font-semibold text-white mb-4">Coding Profiles</h3>
                                <div className="flex gap-4">
                                    <a href="https://leetcode.com/u/SanthosRaj/" className="flex items-center gap-2 bg-orange-900/30 text-orange-300 px-4 py-2 rounded-full hover:bg-orange-900/50 hover:shadow-[0_0_10px_rgba(249,115,22,0.3)] transition-all duration-300">
                                        <Code size={16} />
                                        LeetCode
                                    </a>
                                    <a href="https://www.codechef.com/users/santhosraj" className="flex items-center gap-2 bg-amber-900/30 text-amber-300 px-4 py-2 rounded-full hover:bg-amber-900/50 hover:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all duration-300">
                                        <Code size={16} />
                                        CodeChef
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-black/90 border-t border-gray-600 py-8 z-20 relative">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-blue-400 mb-4">
                        🌌 Open to AI/ML roles, Research Internships, and Startup Collaborations
                    </p>
                    <p className="text-blue-500">
                        © 2024 Santhos Raj B S. Built with React & Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;