"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "DISKOMINFO",
      location: "West Sumbawa, Indonesia",
      period: "Aug 2025 - Now",
      description: [
        "Developed and maintained the SIGAP AGR website",
        "Built web-based job application information system",
        "Utilized Next.js, TypeScript, and Tailwind CSS",
        "Conducted requirement analysis and system design",
      ],
    },
    {
      title: "Information and Technology Expert",
      company: "BAPPEDA",
      location: "West Sumbawa, Indonesia",
      period: "Jun 2023 - Aug 2025",
      description: [
        "Developed 3 custom web-based systems improving efficiency by 40%",
        "Managed official PPID Bappeda website",
        "Maintained E-Musrenbang system",
        "Provided technical support for hardware and network",
      ],
    },
    {
      title: "Education Mentor - Cybersecurity",
      company: "Self-Employed",
      location: "West Sumbawa, Indonesia",
      period: "Jul 2024 - Now",
      description: [
        "Mentored in penetration testing and ethical hacking",
        "Designed hands-on training with Kali Linux and Burp Suite",
        "Guided through SQL Injection, XSS, privilege escalation",
        "Provided coaching on cybersecurity career paths",
      ],
    },
    {
      title: "Software Engineering Bootcamp",
      company: "PT AMMAN & PT Pintar",
      location: "Yogyakarta, Indonesia",
      period: "Jun 2023 - Dec 2023",
      description: [
        "Developed mobile app for West Sumbawa tourism",
        "Built with Flutter framework for cross-platform compatibility",
        "Implemented Firebase Authentication and Realtime Database",
        "Designed modern UI/UX for user engagement",
      ],
    },
  ];

  const skills = {
    Frontend: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "HTML/CSS",
      "Flutter",
    ],
    Backend: ["PHP", "CodeIgniter 3", "Node.js", "Golang"],
    Database: ["Firebase", "MySQL"],
    Security: ["Kali Linux", "Burp Suite", "Metasploit", "Penetration Testing"],
    Tools: ["Git", "JIRA", "Figma", "WordPress", "Microsoft 365"],
    "Soft Skills": [
      "Teamwork",
      "Analytical Thinking",
      "Time Management",
      "Communication",
    ],
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isDark
            ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TAUFIQURROHMAN
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-500"
                      : isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isDark ? "bg-gray-800" : "bg-white"
            } border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="px-4 py-4 space-y-3">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : isDark
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <Image
                src="/me.jpeg"
                alt="Taufiqurrohman Profile"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeIn">
            TAUFIQURROHMAN
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Software Engineer & Cybersecurity Mentor
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <MapPin size={18} className="text-blue-500" />
              <span>West Sumbawa, Indonesia</span>
            </div>
            <a
              href="mailto:rahmantaufiq521@gmail.com"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}
            >
              <Mail size={18} className="text-blue-500" />
              <span>rahmantaufiq521@gmail.com</span>
            </a>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <Phone size={18} className="text-blue-500" />
              <span>085238237530</span>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/TaufiqR08"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              } hover:scale-110`}
              aria-label="GitHub"
            >
              <Github size={24} className="text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/taufiqr08/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              } hover:scale-110`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-blue-500" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 ${isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div
            className={`p-8 rounded-2xl ${
              isDark ? "bg-gray-900/50" : "bg-white"
            } shadow-xl`}
          >
            <p
              className={`text-lg leading-relaxed mb-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Detail-oriented software developer with extensive experience
              building full-stack web and mobile applications using Flutter,
              React.js, Next.js, CodeIgniter, and PHP. Skilled in translating
              user needs into functional, intuitive solutions across public and
              private sectors.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Also active as an Education Mentor in cybersecurity, with a focus
              on practical tools like Kali Linux and Burp Suite. Strong in IT
              support, UI/UX design, and cross-functional collaboration with a
              passion for creating efficient and secure digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  isDark ? "bg-gray-800/50" : "bg-white"
                } shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">
                      {exp.title}
                    </h3>
                    <p
                      className={`text-xl font-semibold mb-1 ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <MapPin size={16} />
                      {exp.location}
                    </p>
                  </div>
                  <div
                    className={`mt-2 md:mt-0 px-4 py-2 rounded-lg ${
                      isDark ? "bg-blue-500/20" : "bg-blue-100"
                    } text-blue-500 font-semibold text-sm whitespace-nowrap`}
                  >
                    {exp.period}
                  </div>
                </div>
                <ul
                  className={`space-y-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 ${isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`p-6 rounded-2xl ${
                  isDark ? "bg-gray-900/50" : "bg-white"
                } shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`p-6 rounded-2xl ${
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-xl`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Bachelor of Information Technology
                  </h3>
                  <p className="text-blue-500 font-semibold">
                    Telkom University
                  </p>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Bandung, Indonesia
                  </p>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Sep 2018 - Dec 2022
                  </p>
                  <p className="mt-2 font-semibold text-blue-500">
                    GPA: 3.47/4.00
                  </p>
                  <p
                    className={`mt-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Interest: Software Engineering, Cybersecurity
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl ${
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certifications</h3>
                  <div
                    className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    <p className="mb-2">
                      <span className="font-semibold text-blue-500">
                        Web Penetration Testing Bootcamp
                      </span>
                      <br />
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        JADI HACKER - 2024
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-blue-500">
                        Web Penetration Testing Certification
                      </span>
                      <br />
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        JADI HACKER - 2024
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 ${isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p
            className={`text-xl mb-12 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rahmantaufiq521@gmail.com"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-900"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Mail size={20} className="text-blue-500" />
              <span>Email Me</span>
            </a>
            <a
              href="tel:085238237530"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-900"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Phone size={20} className="text-blue-500" />
              <span>Call Me</span>
            </a>
            <a
              href="https://github.com/TaufiqR08"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-900"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Github size={20} className="text-blue-500" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/taufiqr08/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-900"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Linkedin size={20} className="text-blue-500" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            © 2025 Taufiqurrohman. Built with Next.js, TypeScript & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}
