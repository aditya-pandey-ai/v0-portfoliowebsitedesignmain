"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Download, Award, TrendingUp, Users, Code } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const PlayStationX = () => <img src="/playstation-x.svg" alt="PlayStation X" className="w-12 h-12" />

const PlayStationTriangle = () => (
  <img src="/playstation-triangle.svg" alt="PlayStation Triangle" className="w-12 h-12" />
)

const F1Logo = () => <img src="/f1-logo.svg" alt="F1 Logo" className="w-16 h-12" />

const LeMansLogo = () => <img src="/le-mans-logo.svg" alt="Le Mans Logo" className="w-16 h-12" />

const LeMansClassic = () => <img src="/le-mans-classic.svg" alt="Le Mans Classic" className="w-16 h-12" />

const MotoGPLogo = () => <img src="/motogp-logo.svg" alt="MotoGP Logo" className="w-16 h-12" />

const SF = () => <img src="/sf.svg" alt="SF Logo" className="w-16 h-12" />

const WEC = () => <img src="/WEC_Logo.svg" alt="WEC Logo" className="w-16 h-12" />

const AnimatedFloatingIcon = ({ Component, index }: { Component: React.ComponentType; index: number }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
  })
  const [direction, setDirection] = useState({
    x: (Math.random() - 0.5) * 0.5,
    y: (Math.random() - 0.5) * 0.5,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x + direction.x
        let newY = prev.y + direction.y

        // Bounce off edges
        if (newX <= 0 || newX >= 95) {
          setDirection((d) => ({ ...d, x: -d.x }))
          newX = Math.max(0, Math.min(95, newX))
        }
        if (newY <= 0 || newY >= 95) {
          setDirection((d) => ({ ...d, y: -d.y }))
          newY = Math.max(0, Math.min(95, newY))
        }

        return { x: newX, y: newY }
      })
    }, 100)

    // Change direction randomly every 3-8 seconds
    const directionInterval = setInterval(
      () => {
        setDirection({
          x: (Math.random() - 0.5) * 0.8,
          y: (Math.random() - 0.5) * 0.8,
        })
      },
      Math.random() * 5000 + 3000,
    )

    return () => {
      clearInterval(interval)
      clearInterval(directionInterval)
    }
  }, [direction.x, direction.y])

  return (
    <div
      className="absolute text-stone-500 transition-all duration-100 ease-linear"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${Math.sin(Date.now() * 0.001 + index) * 10}deg)`,
      }}
    >
      <Component />
    </div>
  )
}

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

  const floatingIcons = [
    { Component: PlayStationX, id: 1 },
    { Component: PlayStationTriangle, id: 2 },
    { Component: F1Logo, id: 3 },
    { Component: LeMansLogo, id: 4 },
    { Component: LeMansClassic, id: 5 },
    { Component: MotoGPLogo, id: 6 },
    { Component: SF, id: 7 },
    { Component: WEC, id: 8 },
  ]

  const projects = [
    {
      id: "cricket-ball-detection",
      title: "Real-Time Cricket Ball Detection & Tracking",
      subtitle: "Computer Vision Project",
      description:
        "Ever wondered how to track a cricket ball moving at 150+ km/h? I did too. After weeks of experimenting with different detection models, I finally cracked it using YOLOv8. The real challenge wasn't just detection—it was maintaining accuracy when the ball gets occluded by players or goes out of frame.",
      story:
        "The breakthrough came at 2 AM when I realized the issue wasn't my model, but my training data. I spent the next week manually annotating 5000 images, focusing on edge cases like partial occlusions and motion blur. The result? A system that could track balls in real-time with 86% precision.",
      impact: "86% precision achieved",
      metrics: ["86% precision", "63% recall", "68% mAP50(B)", "25+ FPS tracking"],
      tech: ["YOLOv8", "OpenCV", "SORT", "Python"],
      github: "https://github.com/aditya-pandey-ai",
      demo: "#",
    },
    {
      id: "elt-pipeline",
      title: "End-to-End ELT Pipeline for TPCH Dataset",
      subtitle: "Data Engineering Project",
      description:
        "Building a data pipeline sounds straightforward until you're dealing with 1M+ rows and everything breaks. This project taught me that data engineering is 20% coding and 80% debugging why your pipeline failed at 3 AM. I learned to love (and hate) Apache Airflow in equal measure.",
      story:
        "The most frustrating part? Spending three days debugging what turned out to be a simple timezone issue in Airflow. But that failure led me to implement comprehensive logging and monitoring, which caught dozens of edge cases I never would have found otherwise.",
      impact: "95% efficiency improvement",
      metrics: ["1M+ rows processed", "100% test coverage", "95% workload reduction", "Automated DAGs"],
      tech: ["Snowflake", "DBT", "Apache Airflow", "SQL"],
      github: "https://github.com/aditya-pandey-ai",
      demo: "#",
    },
    {
      id: "ai-marketing-agent",
      title: "AI Marketing Automation Agent",
      subtitle: "Agentic AI System",
      description:
        "What if an AI could manage marketing campaigns better than humans? I built an autonomous agent that makes real-time decisions about budget allocation and campaign optimization. The scary part? It actually works better than manual management, making decisions in milliseconds that would take humans hours.",
      story:
        "The 'aha' moment came when I watched the agent pause a underperforming campaign and reallocate budget to a high-performer—all while I was sleeping. It had analyzed performance patterns I completely missed and made the optimal decision autonomously.",
      impact: "40% performance boost",
      metrics: ["40% optimization", "100+ daily campaigns", "AI-powered insights", "Real-time analysis"],
      tech: ["LangChain", "Streamlit", "Python", "AI Agents"],
      github: "https://github.com/aditya-pandey-ai",
      demo: "#",
    },
    {
      id: "neocypher",
      title: "NeoCypher",
      subtitle: "Graph Database & AI Project",
      description:
        "A sophisticated graph database implementation that leverages Neo4j's power with modern AI capabilities. This project explores the intersection of graph theory and machine learning, creating intelligent data relationships that traditional databases can't handle.",
      story:
        "The challenge was making graph databases accessible to developers who think in relational terms. After building custom query optimizers and visualization tools, I created a system that makes complex graph operations feel intuitive.",
      impact: "Graph-powered insights",
      metrics: ["Neo4j integration", "Custom algorithms", "AI-enhanced queries", "Visual analytics"],
      tech: ["Neo4j", "Python", "Graph Theory", "AI"],
      github: "https://github.com/aditya-pandey-ai/NeoCypher",
      demo: "#",
    },
    {
      id: "quanto",
      title: "Quanto",
      subtitle: "Quantitative Analysis Platform",
      description:
        "A comprehensive quantitative analysis platform that brings Wall Street-level analytics to everyday traders. Built with modern financial modeling techniques and real-time data processing to democratize quantitative trading strategies.",
      story:
        "Started as a personal project to understand market patterns, but evolved into a full platform when I realized how inaccessible quantitative finance tools were for individual investors. The real breakthrough was implementing risk management algorithms that actually work in volatile markets.",
      impact: "Democratized quant trading",
      metrics: ["Real-time analysis", "Risk management", "Strategy backtesting", "Market insights"],
      tech: ["Python", "Financial APIs", "Statistics", "Machine Learning"],
      github: "https://github.com/aditya-pandey-ai/Quanto",
      demo: "#",
    },
    {
      id: "network-security",
      title: "EdgeNodes",
      subtitle: "Cybersecurity & MLOps Project",
      description:
        "EdgeNodes is a phishing detection system powered by machine learning, designed with a full MLOps pipeline and AWS cloud deployment for real-time security.",
      story:
        "I built EdgeNodes to tackle the growing issue of phishing websites. What started as a simple classifier turned into a complete MLOps-driven system with automated pipelines, experiment tracking, and cloud deployment.",
      impact: "End-to-end AI security pipeline",
      metrics: ["End-to-end MLOps pipeline","AWS cloud deployment","MLflow tracking","High accuracy classification"],
      tech: ["Python", "scikit-learn", "MLflow", "AWS (S3, ECR, EC2)", "Docker", "MLOps"],
      github: "https://github.com/aditya-pandey-ai/Network-Security",
      demo: "#"
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

      <div className="fixed inset-0 opacity-30 pointer-events-none overflow-hidden">
        {floatingIcons.map((icon, index) => (
          <AnimatedFloatingIcon key={icon.id} Component={icon.Component} index={index} />
        ))}
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-md border-b-4 border-stone-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <AnimatedName />
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-8 text-sm font-medium uppercase tracking-wide font-sans">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-stone-500 text-stone-700"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-stone-500 text-stone-700"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-stone-500 text-stone-700"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="transition-all duration-300 hover:scale-105 cursor-pointer hover:text-stone-500 text-stone-700"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section
        id="hero"
        className={`pt-32 pb-16 px-6 transition-all duration-1000 relative ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute inset-0 opacity-8 bg-gradient-to-br from-transparent via-stone-300 to-transparent"></div>
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
                    "I don't just build AI models—I craft intelligent systems that think, learn, and solve real problems. Every line of code is a step toward making machines truly understand our world."
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
                      href="mailto:pandey.aditya2304@gmail.com"
                      className="p-2 border border-stone-500 hover:border-stone-700 hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-110"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`border-2 p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl bg-stone-50 border-stone-600 hover:border-stone-500 cursor-pointer ${
                  visibleSections.has("projects") ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`border-b pb-4 mb-4 group border-stone-500`}>
                  <h3
                    className={`text-xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-stone-600 font-sans text-stone-800`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm font-medium uppercase tracking-wide text-stone-600 font-sans`}>
                    {project.subtitle}
                  </p>
                </div>

                <div className="mb-4">
                  <div
                    className={`px-3 py-1 inline-block mb-3 transform transition-all duration-300 hover:scale-110 bg-stone-100 text-stone-900 hover:bg-stone-200`}
                  >
                    <span className="font-bold text-xs font-mono">{project.impact}</span>
                  </div>
                  <p className={`leading-relaxed mb-3 text-sm text-stone-700 font-sans line-clamp-4`}>
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.slice(0, 4).map((metric, idx) => (
                    <div
                      key={idx}
                      className={`text-center border p-2 transform transition-all duration-300 hover:scale-105 border-stone-500 hover:bg-stone-700 hover:text-white hover:border-stone-700`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <span className="font-bold text-xs font-sans">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`bg-transparent transform transition-all duration-300 hover:scale-105 border-stone-600 text-stone-900 hover:bg-stone-700 hover:text-white flex-1 font-sans`}
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`transform transition-all duration-300 hover:scale-105 bg-stone-100 text-stone-900 hover:bg-stone-200 flex-1 font-sans`}
                    asChild
                  >
                    <Link href={`/projects/${project.id}`}>
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Details
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
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
                href: "mailto:pandey.aditya2304@gmail.com",
                icon: Mail,
                title: "EMAIL",
                subtitle: "pandey.aditya2304@gmail.com",
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
              // Fixed font consistency - using font-sans for contact buttons
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
            © 2024 Aditya Pandey • Built with precision and passion for AI • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
