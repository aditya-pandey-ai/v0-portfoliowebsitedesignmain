"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Award, TrendingUp, Users, Code } from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { RocketIcon, CodeIcon, DatabaseIcon, LightningBoltIcon, TargetIcon } from "@radix-ui/react-icons"

const AnimatedName = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [displayText, setDisplayText] = useState("ADITYA PANDEY")
  const originalName = "ADITYA PANDEY"

  // Mathematical symbols and equations for animation
  const mathSymbols = [
    "∑",
    "∫",
    "∂",
    "∆",
    "π",
    "λ",
    "α",
    "β",
    "γ",
    "θ",
    "μ",
    "σ",
    "∞",
    "≈",
    "≤",
    "≥",
    "∈",
    "∀",
    "∃",
    "∇",
  ]
  const equations = ["f(x)=mx+b", "y=ax²+bx+c", "e^(iπ)+1=0", "∇²φ=0", "∂f/∂x", "∫₀^∞ e^(-x²)dx"]

  useEffect(() => {
    if (isHovered) {
      // Scramble animation
      let iterations = 0
      const maxIterations = 20

      const scrambleInterval = setInterval(() => {
        setDisplayText((prev) => {
          return prev
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (iterations < maxIterations * 0.3) {
                // Phase 1: Random math symbols
                return mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
              } else if (iterations < maxIterations * 0.6) {
                // Phase 2: Mix of equations and symbols
                return Math.random() > 0.7
                  ? equations[Math.floor(Math.random() * equations.length)][Math.floor(Math.random() * 10)] ||
                      mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
                  : mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
              } else {
                // Phase 3: Gradually reveal original letters
                const revealProgress = (iterations - maxIterations * 0.6) / (maxIterations * 0.4)
                const shouldReveal = Math.random() < revealProgress || index < originalName.length * revealProgress
                return shouldReveal ? originalName[index] : mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
              }
            })
            .join("")
        })

        iterations++
        if (iterations >= maxIterations) {
          clearInterval(scrambleInterval)
          setDisplayText(originalName)
        }
      }, 150)

      return () => clearInterval(scrambleInterval)
    } else {
      setDisplayText(originalName)
    }
  }, [isHovered])

  return (
    <h1
      className="text-2xl font-bold tracking-tight cursor-pointer transition-all duration-300 hover:scale-105 font-mono"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minWidth: "200px",
        fontFamily: isHovered ? "monospace" : "inherit",
        color: isHovered ? "#333" : "inherit",
      }}
    >
      {displayText}
    </h1>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  const featuredProjects = [
    {
      title: "NeoCypher",
      description: "Graph Database & AI Project with Neo4j integration",
      href: "/projects/neocypher",
      src: "/graph-database-visualization.jpg",
    },
    {
      title: "EdgeNodes",
      description: "Cybersecurity MLOps pipeline with AWS deployment",
      href: "/projects/network-security",
      src: "/cybersecurity-dashboard.png",
    },
    {
      title: "Cricket Ball Detection",
      description: "Real-time computer vision with 86% precision",
      href: "/projects/cricket-ball-detection",
      src: "/cricket-ball-tracking.jpg",
    },
    {
      title: "AI Marketing Agent",
      description: "Autonomous agent with 40% performance boost",
      href: "/projects/ai-marketing-agent",
      src: "/ai-marketing-automation.jpg",
    },
  ]

  return (
    <div className={`fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 ${className}`}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hero">Profile</HoveredLink>
            <HoveredLink href="#skills">Technical Skills</HoveredLink>
            <HoveredLink href="#contact">Certifications</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            {featuredProjects.map((project) => (
              <ProductItem
                key={project.title}
                title={project.title}
                href={project.href}
                src={project.src}
                description={project.description}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#skills">Machine Learning</HoveredLink>
            <HoveredLink href="#skills">Data Engineering</HoveredLink>
            <HoveredLink href="#skills">AI Frameworks</HoveredLink>
            <HoveredLink href="#skills">Certifications</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:pandey.aditya2304@gmail.com">Email</HoveredLink>
            <HoveredLink href="https://linkedin.com/in/ap2304">LinkedIn</HoveredLink>
            <HoveredLink href="https://github.com/aditya-pandey-ai">GitHub</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  const bentoProjects = [
    {
      Icon: LightningBoltIcon,
      name: "NeoCypher",
      description: "Graph Database & AI Project with Neo4j integration and custom algorithms",
      href: "/projects/neocypher",
      cta: "Explore Graph AI",
      background: (
        <div className="absolute -right-20 -top-20 opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl" />
        </div>
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: TargetIcon,
      name: "EdgeNodes Security",
      description: "MLOps-powered phishing detection with AWS cloud deployment",
      href: "/projects/network-security",
      cta: "View Security AI",
      background: (
        <div className="absolute -right-20 -top-20 opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-red-500 to-orange-600 rounded-full blur-3xl" />
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: RocketIcon,
      name: "Cricket Ball Tracking",
      description: "Real-time computer vision with 86% precision using YOLOv8",
      href: "/projects/cricket-ball-detection",
      cta: "See CV in Action",
      background: (
        <div className="absolute -right-20 -top-20 opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-teal-600 rounded-full blur-3xl" />
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: DatabaseIcon,
      name: "ELT Pipeline",
      description: "End-to-end data pipeline processing 1M+ rows with Snowflake & DBT",
      href: "/projects/elt-pipeline",
      cta: "Explore Pipeline",
      background: (
        <div className="absolute -right-20 -top-20 opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full blur-3xl" />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: CodeIcon,
      name: "AI Marketing Agent",
      description: "Autonomous agent achieving 40% performance optimization in real-time",
      href: "/projects/ai-marketing-agent",
      cta: "See AI Agent",
      background: (
        <div className="absolute -right-20 -top-20 opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl" />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ]

  const achievements = [
    { metric: "3", label: "Major Projects Completed", icon: <Award className="w-6 h-6" /> },
    { metric: "86%", label: "Best Model Precision", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "1M+", label: "Data Points Processed", icon: <Users className="w-6 h-6" /> },
    { metric: "2", label: "Professional Certifications", icon: <Code className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #78716c 1px, transparent 0),
              linear-gradient(90deg, transparent 24px, rgba(120,113,108,0.15) 25px, rgba(120,113,108,0.15) 26px, transparent 27px),
              linear-gradient(transparent 24px, rgba(120,113,108,0.15) 25px, rgba(120,113,108,0.15) 26px, transparent 27px)
            `,
            backgroundSize: "25px 25px, 50px 50px, 50px 50px",
          }}
        />
      </div>

      <Navbar />

      <section
        id="hero"
        className={`pt-32 pb-16 px-6 transition-all duration-1000 relative ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="border-l-4 border-stone-600 pl-6 mb-8 overflow-hidden">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-pulse font-sans text-stone-800">
                  BUILDING INTELLIGENT
                  <br />
                  <span className="italic bg-gradient-to-r from-stone-700 to-stone-500 bg-clip-text text-transparent">
                    AI SYSTEMS
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-stone-700 text-white hover:bg-stone-600 px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg font-sans"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-stone-700 text-stone-700 hover:bg-stone-700 hover:text-white px-8 py-3 bg-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-lg font-sans"
                  asChild
                >
                  <a href="#" target="_blank" rel="noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-stone-500 pl-6">
                  <p className="text-lg text-stone-600 italic leading-relaxed font-sans">
                    "I don't just build AI models—I craft intelligent systems that think, learn, and solve real
                    problems. Every line of code is a step toward making machines truly understand our world."
                  </p>
                </div>

                <div className="flex items-center space-x-6">
                  <span className="text-sm font-medium uppercase tracking-wide text-stone-500 font-sans">Connect:</span>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/aditya-pandey-ai"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-stone-500 hover:border-stone-700 hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/ap2304"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-stone-500 hover:border-stone-700 hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:pandey.aditya2304@gmail.com?subject=Hello%20Aditya&body=Hi%20Aditya,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                      className="p-2 border border-stone-500 hover:border-stone-700 hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => {
                        // Fallback for browsers that might block mailto
                        if (navigator.userAgent.includes("Chrome")) {
                          window.open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=pandey.aditya2304@gmail.com&su=Hello%20Aditya&body=Hi%20Aditya,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                            "_blank",
                          )
                          e.preventDefault()
                        }
                      }}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="border-2 border-stone-600 p-6 bg-stone-50">
                  <h4 className="font-bold text-lg uppercase tracking-wide mb-4 border-b border-stone-500 pb-2 font-sans text-stone-800">
                    What I'm Building Right Now
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-stone-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm font-sans text-stone-800">Autonomous AI Agents</p>
                        <p className="text-xs text-stone-600 font-sans">
                          Teaching machines to make decisions without human intervention—it's like raising digital
                          children
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm font-sans text-stone-800">Real-time Computer Vision</p>
                        <p className="text-xs text-stone-600 font-sans">
                          Making computers see and understand the world as fast as humans do (sometimes faster)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm font-sans text-stone-800">Scalable Data Pipelines</p>
                        <p className="text-xs text-stone-600 font-sans">
                          Building the invisible infrastructure that powers intelligent decisions at scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-stone-50 border-2 border-stone-600 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/data-scientist-headshot.png"
                    alt="Aditya Pandey"
                    className="w-32 h-32 rounded-full border-4 border-stone-600 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide font-sans text-stone-800">PROFILE</h3>
                  <div className="w-12 h-0.5 bg-stone-600 mb-4"></div>
                </div>

                <article className="text-sm leading-relaxed space-y-3 font-sans text-stone-700">
                  <p className="font-medium">
                    <strong className="text-stone-800">Aditya Pandey</strong> isn't your typical final-year student.
                    While others are cramming for exams, he's building AI systems that actually work in the real world.
                  </p>

                  <p>
                    Currently pursuing BTech in AI/ML at Shri Ramdeobaba College, Aditya has already mastered{" "}
                    <strong className="text-stone-800">PyTorch, TensorFlow, and the entire modern AI stack</strong>. But
                    here's what makes him different—he doesn't just follow tutorials.
                  </p>

                  <p>
                    His cricket ball tracking system didn't just achieve{" "}
                    <strong className="text-stone-800">86% precision</strong> by accident. It took weeks of debugging,
                    thousands of annotated images, and more than a few 3 AM breakthroughs. That's the kind of
                    persistence that turns good students into great engineers.
                  </p>

                  <p className="italic border-l-2 border-stone-600 pl-3 text-stone-600">
                    "I don't build AI because it's trendy. I build it because there's something magical about teaching
                    machines to think—and I'm just getting started."
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-16 px-6 relative transition-all duration-1000 bg-stone-200 text-stone-900 ${
          visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0">
          <BackgroundPaths title="ABOUT ME" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white">ABOUT ME</h2>
            <div className="w-24 h-1 mx-auto bg-white"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm border-2 border-stone-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 font-sans text-stone-800">My Journey</h3>
                <p className="text-stone-700 leading-relaxed font-sans mb-4">
                  I'm not your typical final-year student. While others are cramming for exams, I'm building AI systems
                  that actually work in the real world. Currently pursuing BTech in AI/ML at Shri Ramdeobaba College,
                  I've already mastered PyTorch, TensorFlow, and the entire modern AI stack.
                </p>
                <p className="text-stone-700 leading-relaxed font-sans">
                  But here's what makes me different—I don't just follow tutorials. My cricket ball tracking system
                  didn't just achieve 86% precision by accident. It took weeks of debugging, thousands of annotated
                  images, and more than a few 3 AM breakthroughs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm border-2 border-stone-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 font-sans text-stone-800">What Drives Me</h3>
                <p className="text-stone-700 leading-relaxed font-sans mb-4">
                  "I don't build AI because it's trendy. I build it because there's something magical about teaching
                  machines to think—and I'm just getting started."
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-600 rounded-full"></div>
                    <span className="text-sm font-sans text-stone-800">Autonomous AI Agents</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-600 rounded-full"></div>
                    <span className="text-sm font-sans text-stone-800">Real-time Computer Vision</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-600 rounded-full"></div>
                    <span className="text-sm font-sans text-stone-800">Scalable Data Pipelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-16 px-6 relative transition-all duration-1000 bg-stone-50 text-stone-900 ${
          visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-700 font-sans">
              FEATURED PROJECTS
            </h2>
            <div
              className={`w-24 h-1 mx-auto transform transition-all duration-1000 scale-x-0 animate-pulse bg-stone-600`}
            ></div>
          </div>

          <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
            {bentoProjects.map((project) => (
              <BentoCard key={project.name} {...project} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <section
        id="skills"
        className={`py-16 px-6 relative transition-all duration-1000 bg-stone-100 text-stone-900 ${
          visibleSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">TECHNICAL EXPERTISE</h2>
            <div className={`w-24 h-1 mx-auto bg-stone-600`}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "MACHINE LEARNING",
                skills: [
                  "• Deep Learning & Neural Networks",
                  "• Reinforcement Learning",
                  "• Computer Vision (YOLO, OpenCV)",
                  "• Natural Language Processing",
                  "• PyTorch, TensorFlow, Scikit-Learn",
                ],
              },
              {
                title: "DATA ENGINEERING",
                skills: [
                  "• Python, SQL",
                  "• Snowflake, PostgreSQL, Neo4j",
                  "• Apache Airflow, Docker",
                  "• AWS (S3, EC2, Elastic Beanstalk)",
                  "• ETL Pipeline Development",
                ],
              },
              {
                title: "AI FRAMEWORKS",
                skills: [
                  "• Generative AI & LLMs",
                  "• LangChain, Hugging Face",
                  "• Streamlit, Django",
                  "• Real-time AI Systems",
                  "• Predictive Analytics",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`border-2 p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-xl group border-stone-600 ${
                  visibleSections.has("skills")
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                      ? "translate-x-[-50px] opacity-0"
                      : "translate-x-[50px] opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3
                  className={`text-xl font-bold mb-4 border-b pb-2 transition-colors duration-300 border-stone-500 font-sans text-stone-800`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm font-sans">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="transform transition-all duration-300 hover:translate-x-2 text-stone-800">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 transform transition-all duration-1000 ${
              visibleSections.has("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 font-sans">CERTIFICATIONS</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div
                className={`border p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-stone-600 hover:border-stone-500`}
              >
                <h4 className="font-bold mb-2 font-sans">AWS Certified Cloud Practicioner</h4>
                <p className={`text-sm text-stone-600 font-sans`}>AWS • Sep 2025</p>
              </div>
              <div
                className={`border p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-stone-600 hover:border-stone-500`}
              >
                <h4 className="font-bold mb-2 font-sans">
                  Oracle Cloud Infrastructure 2025 Certified Data Science Professional
                </h4>
                <p className={`text-sm text-stone-600 font-sans`}>Oracle • Sep 2025</p>
              </div>
              <div
                className={`border p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-stone-600 hover:border-stone-500`}
              >
                <h4 className="font-bold mb-2 font-sans">Machine Learning Specialization</h4>
                <p className={`text-sm text-stone-600 font-sans`}>Andrew NG, Stanford University • Nov 2023</p>
              </div>
              <div
                className={`border p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-stone-600 hover:border-stone-500`}
              >
                <h4 className="font-bold mb-2 font-sans">Google Cybersecurity Professional Certificate</h4>
                <p className={`text-sm text-stone-600 font-sans`}>Google Careers • Apr 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-16 px-6 relative transition-all duration-1000 bg-stone-50 text-stone-900 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans">LET'S CONNECT</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-sans">
            Passionate about building intelligent systems and ready to contribute to innovative AI projects. Available
            for internships and full-time opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                href: "mailto:pandey.aditya2304@gmail.com?subject=Hello%20Aditya&body=Hi%20Aditya,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                icon: Mail,
                title: "EMAIL",
                subtitle: "pandey.aditya2304@gmail.com",
                onClick: (e: React.MouseEvent) => {
                  if (navigator.userAgent.includes("Chrome")) {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=pandey.aditya2304@gmail.com&su=Hello%20Aditya&body=Hi%20Aditya,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                      "_blank",
                    )
                    e.preventDefault()
                  }
                },
              },
              {
                href: "https://linkedin.com/in/ap2304",
                icon: Linkedin,
                title: "LINKEDIN",
                subtitle: "linkedin.com/in/ap2304",
              },
              {
                href: "https://github.com/aditya-pandey-ai",
                icon: Github,
                title: "GITHUB",
                subtitle: "github.com/aditya-pandey-ai",
              },
            ].map((contact, index) => (
              <Button
                key={index}
                className={`p-6 h-auto flex-col transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl bg-stone-700 text-white hover:bg-stone-600 font-sans ${
                  visibleSections.has("contact") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                asChild
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={contact.onClick}
                >
                  {React.createElement(contact.icon, { className: "w-6 h-6 mb-2 animate-bounce" })}
                  <span className="font-bold">{contact.title}</span>
                  <span className="text-sm">{contact.subtitle}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-stone-600 hover:bg-stone-100 py-8 px-6 transform transition-all duration-1000 relative">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 98%, #57534e 100%)`,
            backgroundSize: "50px 1px",
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm font-medium uppercase tracking-wide font-sans">
            © 2025 Aditya Pandey • Built with precision and passion for AI • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
