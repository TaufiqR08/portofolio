"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect } from "react";
import { setActiveSection, setMenuOpen, toggleMenu } from "@/lib/features/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { sanitizeUrl } from "@/lib/security";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

const experiences = [
  {
    role: "Software Engineer",
    company: "DISKOMINFO",
    location: "West Sumbawa",
    period: "Aug 2025 - Present",
    current: true,
    points: [
      "Developed and maintained the SIGAP AGR web platform to support digital government services.",
      "Designed and built a recruitment information system for the Department of Manpower and Transmigration.",
      "Built responsive front-end applications using Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated with stakeholders to gather requirements, design system architecture, and implement user-focused features.",
      "Successfully delivered a custom government information system from planning through production deployment.",
    ],
  },
  {
    role: "IT Programmer",
    company: "BAPPEDA",
    location: "West Sumbawa",
    period: "Jun 2023 - Aug 2025",
    points: [
      "Developed three custom web-based information systems, improving internal operational efficiency by 40%.",
      "Managed and enhanced the official PPID website, ensuring content accuracy and system availability.",
      "Maintained the E-Musrenbang platform, supporting regional planning activities and data integrity.",
      "Built a documentation portal to improve information accessibility for internal and public stakeholders.",
      "Provided IT infrastructure and network support, reducing downtime through proactive troubleshooting.",
    ],
  },
  {
    role: "Cybersecurity Education Mentor",
    company: "Self-Employed",
    location: "West Sumbawa",
    period: "Jul 2024 - Present",
    current: true,
    points: [
      "Mentored students in penetration testing, digital forensics, and ethical hacking.",
      "Designed hands-on cybersecurity labs using Kali Linux, Burp Suite, and Metasploit.",
      "Delivered practical training on SQL Injection, XSS, privilege escalation, and secure development practices.",
      "Guided learners on cybersecurity certifications and career development.",
    ],
  },
  {
    role: "Software Engineering Bootcamp",
    company: "PT AMMAN & PT Pintar",
    location: "Yogyakarta",
    period: "Jun 2023 - Dec 2023",
    points: [
      "Developed a Flutter-based tourism mobile application for West Sumbawa.",
      "Designed modern UI/UX to improve user engagement and accessibility.",
      "Built the application using the Flutter framework, ensuring cross-platform compatibility.",
      "Conducted user and business requirement analysis to define application features.",
    ],
  },
  {
    role: "IT Staff (Internship)",
    company: "PTAM Giri Menang",
    location: "Lombok",
    period: "Jun 2021 - Sep 2021",
    points: [
      "Maintained and enhanced two internal enterprise applications.",
      "Redesigned the PEPADU application interface using Flutter to improve usability and user experience.",
      "Assisted in developing and testing the Andromeda application to ensure system stability.",
      "Implemented new application features and supported software maintenance activities.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "PPID Pembantu",
    type: "Public Information Portal",
    description:
      "A web-based public information portal designed for storing, documenting, managing, and providing access to public information.",
    role: "Fullstack Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
    link: "https://p2kbp3a.ppid.sumbawabaratkab.go.id/",
  },
  {
    number: "02",
    title: "SIPEKA",
    type: "Personnel Management System",
    description:
      "A web-based personnel management system for managing employee records and supporting administrative processes.",
    role: "Fullstack Developer",
    stack: ["Next.js", "TypeScript", "Node.js", "MySQL", "Prisma ORM"],
    link: "https://sipeka.sumbawabaratkab.go.id/",
  },
  {
    number: "03",
    title: "Portal Puskesmas Taliwang II",
    type: "Healthcare Information Portal",
    description:
      "A web-based healthcare portal providing health information, service announcements, organizational profiles, and access to public healthcare resources.",
    role: "Fullstack Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PHP", "Laravel"],
    link: "https://pkm-tlw2.sumbawabaratkab.go.id/",
  },
  {
    number: "04",
    title: "SIPROTAPGACEK",
    type: "Executive Activity Monitoring",
    description:
      "A web-based executive activity monitoring system designed to manage schedules, track official activities, and generate reports.",
    role: "Fullstack Developer",
    stack: ["Laravel", "PHP", "Blade", "MySQL"],
    link: "https://siprogacek.sumbawabaratkab.go.id",
  },
  {
    number: "05",
    title: "SIPKANTI",
    type: "Integrated Job Portal",
    description:
      "A web-based job portal designed to connect job seekers with employers through job listings, online applications, and recruitment management.",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    number: "06",
    title: "Tulalo App",
    type: "Tourism Mobile Application",
    description:
      "A mobile tourism application designed to help users discover and explore recommended tourist destinations across Sumbawa.",
    role: "Fullstack Developer",
    stack: ["Flutter", "Dart", "Firebase", "Material Design"],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend & Mobile",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Flutter", "Tailwind CSS", "Material UI"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Backend & Data",
    skills: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Prisma ORM", "MySQL", "Firebase"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Tools",
    skills: ["Kali Linux", "Burp Suite", "Metasploit", "Git", "Figma", "JIRA", "WordPress"],
  },
];

const certifications = [
  {
    title: "Software Engineering Scholarship Program",
    issuer: "PT AMMAN Mineral & PT Pintar Pemenang Asia",
    year: "2024",
  },
  {
    title: "Web Penetration Testing Certification",
    issuer: "JADI HACKER",
    year: "2024",
  },
  {
    title: "Web Penetration Testing Bootcamp",
    issuer: "JADI HACKER",
    year: "2024",
  },
];

const emailHref = sanitizeUrl("mailto:rahmantaufiq521@gmail.com");
const githubHref = sanitizeUrl("https://github.com/TaufiqR08");
const linkedInHref = sanitizeUrl("https://www.linkedin.com/in/taufiqr08/");

export default function Portfolio() {
  const dispatch = useAppDispatch();
  const { menuOpen, activeSection } = useAppSelector((state) => state.ui);

  useEffect(() => {
    // Mark JS as active — enables CSS animations safely
    document.body.classList.add("js-ready");

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const revealItems = document.querySelectorAll<HTMLElement>(".js-ready [data-reveal]");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id));
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    // Re-query after js-ready is set
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("is-visible");
      } else {
        revealObserver.observe(item);
      }
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [dispatch]);

  const closeMenu = () => {
    if (menuOpen) dispatch(setMenuOpen(false));
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Back to top">
          TR<span>.</span>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a
              className={activeSection === id ? "active" : ""}
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href={emailHref}>
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => dispatch(toggleMenu())}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow hero-enter">
            <span className="status-dot" />
            Available for meaningful opportunities
          </div>
          <h1 className="hero-enter delay-1">
            I build digital products that are <em>useful, secure,</em> and easy to use.
          </h1>
          <p className="hero-lead hero-enter delay-2">
            Software Engineer with 3+ years of experience building full-stack web and mobile
            applications for government and enterprise projects.
          </p>

          <div className="hero-actions hero-enter delay-3">
            <a className="button primary" href="#projects">
              Explore my work <ArrowDown size={18} />
            </a>
            <a className="button secondary" href={emailHref}>
              <Mail size={18} /> Email me
            </a>
          </div>

          <div className="quick-facts hero-enter delay-4">
            <div>
              <strong>3+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>40%</strong>
              <span>Efficiency improvement</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Projects delivered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual hero-enter delay-2">
          <div className="portrait-frame">
            <Image
              src="/me2.jpeg"
              alt="Taufiqurrohman, Software Engineer"
              fill
              priority
              sizes="(max-width: 800px) 88vw, 40vw"
              className="portrait"
            />
            <div className="portrait-shade" />
            <div className="photo-label">
              <span>Based in</span>
              <strong>
                <MapPin size={15} /> West Sumbawa, Indonesia
              </strong>
            </div>
          </div>
          <div className="floating-card">
            <div className="floating-icon">
              <Sparkles size={20} />
            </div>
            <div>
              <span>Currently</span>
              <strong>Software Engineer at DISKOMINFO</strong>
            </div>
          </div>
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label" data-reveal>
          <span>01</span> Profile
        </div>
        <div className="about-grid">
          <h2 data-reveal>
            Engineering with a practical mindset and a human point of view.
          </h2>
          <div className="about-copy" data-reveal>
            <p>
              I am Taufiqurrohman, a Software Engineer with 3+ years of professional experience
              developing full-stack web and mobile applications for government and enterprise projects.
            </p>
            <p>
              Proficient in Next.js, React.js, Flutter, PHP, TypeScript, and Tailwind CSS, with
              hands-on experience throughout the SDLC. Passionate about building scalable applications,
              improving user experience, and delivering business-driven digital solutions.
            </p>
            <div className="principles">
              <span>
                <Check size={16} /> Clear communication
              </span>
              <span>
                <Check size={16} /> User-focused decisions
              </span>
              <span>
                <Check size={16} /> Secure by mindset
              </span>
              <span>
                <Check size={16} /> Scalable solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading" data-reveal>
          <div>
            <div className="section-label">
              <span>02</span> Experience
            </div>
            <h2>Where I&apos;ve made an impact.</h2>
          </div>
          <p>A track record across software delivery, IT operations, and technical education.</p>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" data-reveal key={experience.role + experience.company}>
              <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline-main">
                <div className="role-line">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>
                      {experience.company} - {experience.location}
                    </p>
                  </div>
                  <span className={experience.current ? "period current" : "period"}>
                    {experience.current && <i />}
                    {experience.period}
                  </span>
                </div>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading" data-reveal>
          <div>
            <div className="section-label">
              <span>03</span> Selected work
            </div>
            <h2>Products built around real needs.</h2>
          </div>
          <p>Selected systems that simplify public services and everyday operations.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" data-reveal key={project.title}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
                {project.link && (
                  <a
                    href={sanitizeUrl(project.link)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight />
                  </a>
                )}
              </div>
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <span>Role</span>
                  <strong>{project.role}</strong>
                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading" data-reveal>
          <div>
            <div className="section-label">
              <span>04</span> Capabilities
            </div>
            <h2>A flexible technical toolkit.</h2>
          </div>
          <p>Strongest at the intersection of product engineering and dependable delivery.</p>
        </div>

        <div className="skill-grid">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article className="skill-card" data-reveal key={title}>
              <div className="skill-icon">
                <Icon size={23} />
              </div>
              <h3>{title}</h3>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="education-card" data-reveal>
          <div className="education-icon">
            <GraduationCap />
          </div>
          <div>
            <span>Education</span>
            <h3>Bachelor of Information Technology</h3>
            <p>Telkom University - Bandung, Indonesia</p>
          </div>
          <div className="education-meta">
            <strong>GPA 3.47 / 4.00</strong>
            <span>Sep 2018 - Dec 2022</span>
          </div>
        </div>

        <div className="cert-list" data-reveal>
          <div className="cert-header">
            <Award size={18} />
            <span>Certifications</span>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div className="cert-item" key={cert.title}>
                <div className="cert-dot" />
                <div>
                  <strong>{cert.title}</strong>
                  <p>{cert.issuer} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-inner" data-reveal>
          <div className="section-label light">
            <span>05</span> Contact
          </div>
          <h2>Have a role or project where I can make a difference?</h2>
          <p>Let&apos;s talk about the problem you are trying to solve.</p>
          <a className="contact-email" href={emailHref}>
            rahmantaufiq521@gmail.com <ArrowUpRight />
          </a>
          <div className="contact-bottom">
            <div>
              <a href={githubHref} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
              <a href={linkedInHref} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </div>
            <span>West Sumbawa, Indonesia</span>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#home">
          TR<span>.</span>
        </a>
        <p>(c) {new Date().getFullYear()} Taufiqurrohman. Built with intention.</p>
        <a className="back-to-top" href="#home">
          Back to top <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
