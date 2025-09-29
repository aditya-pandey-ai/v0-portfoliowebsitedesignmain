"use client"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft, Calendar, Code2, ImageIcon } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

const projects = [
  {
    id: "cricket-ball-detection",
    title: "Real-Time Cricket Ball Tracking",
    subtitle: "Computer Vision Project",
    description:
      "A real-time cricket ball tracking system using YOLOv8 for detection and SORT for tracking. The system detects the ball, assigns unique IDs, and visualizes its trajectory in live video.",
    fullDescription: `This project applies deep learning and object tracking to one of the toughest problems in sports vision: tracking a cricket ball moving at professional speeds.

The system is built on:
- YOLOv8 for real-time ball detection
- SORT (Simple Online and Realtime Tracking) for maintaining ball identity
- Trajectory plotting to visualize the ball's movement across frames

It achieves smooth real-time performance on consumer hardware, making it suitable for sports analytics, live broadcast overlays, and research in motion prediction.`,
    story:
      "I built this project to push the limits of computer vision in sports. Cricket poses a unique challenge with motion blur, occlusion by players, and high-speed movement. After training a YOLOv8 model and integrating SORT, I achieved robust tracking and trajectory visualization.",
    impact: "Real-time cricket ball trajectory visualization with YOLOv8 and SORT",
    metrics: ["YOLOv8 detection", "SORT tracking", "Trajectory prediction", "Real-time visualization"],
    detailedMetrics: [
      { label: "FPS", value: "25+", description: "Processes video streams in real time" },
      { label: "Detection Model", value: "YOLOv8", description: "Optimized for cricket ball detection" },
      { label: "Tracking", value: "SORT", description: "Maintains identity across frames" },
      { label: "Trajectory", value: "Plotted", description: "Real-time trajectory visualization" },
    ],
    tech: ["YOLOv8", "Python", "OpenCV", "PyTorch", "SORT"],
    features: [
      "Real-time ball detection with YOLOv8",
      "SORT-based object tracking",
      "Trajectory prediction and plotting",
      "Webcam and video file support",
      "Modular code structure",
      "Extendable for speed and 3D prediction",
    ],
    challenges: [
      "Handling motion blur at high speeds",
      "Tracking through player occlusions",
      "Maintaining accuracy on low-quality video",
      "Balancing detection accuracy with real-time FPS",
    ],
    github: "https://github.com/aditya-pandey-ai/Ball-Tracking-Trajectory",
    demo: "#",
    date: "2024",
    duration: "3 months",
    category: "Computer Vision",
    media: {
      type: "gif",
      url: "/assets/projects/cricket-ball-detection/trajectory-demo.gif",
      alt: "Cricket ball trajectory visualization in real-time video",
      caption: "Real-time cricket ball tracking with YOLOv8 detection and SORT trajectory visualization",
    },
  },

  {
    id: "elt-pipeline",
    title: "End-to-End ELT Pipeline for TPCH Dataset",
    subtitle: "Data Engineering Project",
    description:
      "Building a data pipeline sounds straightforward until you're dealing with 1M+ rows and everything breaks. This project taught me that data engineering is 20% coding and 80% debugging why your pipeline failed at 3 AM. I learned to love (and hate) Apache Airflow in equal measure.",
    fullDescription: `A comprehensive data engineering solution built around the TPC-H benchmark dataset, demonstrating enterprise-grade ELT (Extract, Load, Transform) pipeline architecture.

The pipeline handles over 1 million rows of transactional data, implementing modern data engineering best practices including data quality checks, automated testing, and comprehensive monitoring. Built using Snowflake as the data warehouse, DBT for transformations, and Apache Airflow for orchestration.

The system features automated data validation, error handling, and recovery mechanisms. It includes comprehensive logging and monitoring to ensure data integrity and pipeline reliability. The architecture is designed to scale horizontally and handle increasing data volumes.

Performance optimizations include parallel processing, incremental loading strategies, and intelligent caching mechanisms that reduced processing time by 95% compared to traditional batch processing approaches.`,
    story:
      "I was studying for my Data Warehouse exam when it hit me—if I ever wanted to build a model that handles millions of data points, a simple API fetch or basic database just wouldn't cut it. I’d need something production-grade. That’s when I thought, why not build a project around this and really learn the ins and outs of Data Engineering?",
    impact: "95% efficiency improvement",
    metrics: ["1M+ rows processed", "100% test coverage", "95% workload reduction", "Automated DAGs"],
    detailedMetrics: [
      { label: "Data Volume", value: "1M+", description: "Rows processed daily" },
      { label: "Test Coverage", value: "100%", description: "Comprehensive automated testing" },
      { label: "Efficiency Gain", value: "95%", description: "Reduction in manual processing time" },
      { label: "Pipeline Reliability", value: "99.9%", description: "Uptime and success rate" },
      { label: "Data Quality", value: "99.8%", description: "Accuracy of processed data" },
      { label: "Processing Speed", value: "10x", description: "Faster than previous solution" },
    ],
    tech: ["Snowflake", "DBT", "Apache Airflow", "SQL", "Python", "Docker"],
    features: [
      "Automated data extraction from multiple sources",
      "Real-time data quality monitoring",
      "Incremental loading strategies",
      "Comprehensive error handling and recovery",
      "Automated testing and validation",
      "Performance monitoring and alerting",
    ],
    challenges: [
      "Handling timezone complexities in distributed systems",
      "Implementing robust error handling and recovery",
      "Optimizing for large-scale data processing",
      "Ensuring data quality and consistency",
      "Managing complex dependencies in DAGs",
    ],
    github: "https://github.com/aditya-pandey-ai",
    demo: "#",
    date: "2024",
    duration: "4 months",
    category: "Data Engineering",
    media: {
      type: "image",
      url: "/assets/projects/elt-pipeline/first.png",
      alt: "ELT pipeline architecture diagram showing data flow and processing stages",
      caption: "Comprehensive ELT pipeline architecture with real-time monitoring and automated data quality checks",
    },
  },
  {
    id: "ai-marketing-agent",
    title: "AI Marketing Automation Agent",
    subtitle: "Agentic AI System",
    description:
      "What if an AI could manage marketing campaigns better than humans? I built an autonomous agent that makes real-time decisions about budget allocation and campaign optimization. The scary part? It actually works better than manual management, making decisions in milliseconds that would take humans hours.",
    fullDescription: `An autonomous AI agent system designed to revolutionize digital marketing campaign management through intelligent automation and real-time decision making.

The agent uses advanced machine learning algorithms to analyze campaign performance, market trends, and user behavior patterns. It makes autonomous decisions about budget allocation, audience targeting, and campaign optimization without human intervention.

Built using LangChain for agent orchestration and Streamlit for the user interface, the system processes over 100 campaigns daily, making thousands of micro-optimizations that would be impossible for human marketers to manage manually.

The agent's decision-making process is transparent and explainable, providing detailed reasoning for each action taken. This builds trust with marketing teams while delivering superior performance compared to traditional manual campaign management.`,
    story:
      "The 'aha' moment came when I watched the agent pause a underperforming campaign and reallocate budget to a high-performer—all while I was sleeping. It had analyzed performance patterns I completely missed and made the optimal decision autonomously.",
    impact: "40% performance boost",
    metrics: ["40% optimization", "100+ daily campaigns", "AI-powered insights", "Real-time analysis"],
    detailedMetrics: [
      { label: "Performance Improvement", value: "40%", description: "Average campaign optimization gain" },
      { label: "Daily Campaigns", value: "100+", description: "Campaigns managed simultaneously" },
      { label: "Decision Speed", value: "<1s", description: "Time to make optimization decisions" },
      { label: "Cost Reduction", value: "25%", description: "Reduction in wasted ad spend" },
      { label: "ROI Improvement", value: "60%", description: "Return on investment increase" },
      { label: "Automation Rate", value: "95%", description: "Tasks automated vs manual" },
    ],
    tech: ["LangChain", "Streamlit", "Python", "AI Agents", "OpenAI API", "Pandas"],
    features: [
      "Autonomous budget allocation and reallocation",
      "Real-time campaign performance monitoring",
      "Predictive analytics for campaign success",
      "Automated A/B testing and optimization",
      "Intelligent audience targeting",
      "Comprehensive reporting and insights",
    ],
    challenges: [
      "Building trust in autonomous decision-making",
      "Handling edge cases in campaign management",
      "Ensuring explainable AI decisions",
      "Managing multiple campaign objectives simultaneously",
      "Integrating with various marketing platforms",
    ],
    github: "https://github.com/aditya-pandey-ai",
    demo: "#",
    date: "2024",
    duration: "2 months",
    category: "AI Agents",
    media: {
      type: "image",
      url: "/ai-marketing-dashboard-with-campaign-analytics.jpg",
      alt: "AI marketing agent dashboard showing campaign performance and automated decisions",
      caption: "AI marketing automation dashboard with real-time campaign optimization and performance analytics",
    },
  },
  {
    id: "neocypher",
    title: "NeoCypher",
    subtitle: "AI-Powered Multi-Database Query System",
    description:
      "NeoCypher is an AI-powered natural language interface for querying and managing multiple databases with a single prompt. It supports SQL, NoSQL, and graph databases with visualization dashboards and full CRUD capabilities.",
    fullDescription: `NeoCypher bridges the gap between natural language and complex database systems. Instead of writing SQL, Cypher, or MongoDB queries, users can describe what they want in plain English and NeoCypher translates it into executable queries.

It supports a wide range of databases:
- SQL (MySQL, PostgreSQL, SQLite)
- NoSQL (MongoDB)
- Graph databases (Neo4j)

Beyond querying, NeoCypher enables CRUD operations and automatically generates interactive visualizations, making insights accessible even to non-technical users. The architecture is modular, with a pipeline that processes input → NLP → Query Parsing → Execution → Visualization.`,
    story:
      "I wanted to make databases more accessible by removing the barrier of query languages. NeoCypher started as an experiment to map English prompts to SQL queries, but quickly grew into a full multi-database platform with visualization support.",
    impact: "Democratizing database access with AI",
    metrics: ["Multi-DB support", "CRUD operations", "Auto-visualization", "NLP-driven queries"],
    detailedMetrics: [
      { label: "Supported Databases", value: "5", description: "MySQL, PostgreSQL, SQLite, MongoDB, Neo4j" },
      { label: "Visualization", value: "Auto", description: "Interactive dashboards generated automatically" },
      { label: "NLP Parsing", value: "Yes", description: "Transforms English prompts into queries" },
      {
        label: "Architecture",
        value: "Modular",
        description: "Input → NLP → Query Parsing → Execution → Visualization",
      },
    ],
    tech: ["Python", "Streamlit", "Neo4j", "SQLAlchemy", "PyMongo", "Plotly", "spaCy/OpenAI"],
    features: [
      "Query databases using natural language",
      "CRUD operations across SQL, NoSQL, and Graph DBs",
      "Auto-generated interactive visualizations",
      "Unified multi-database interface",
      "Secure and extendable modular design",
    ],
    challenges: [
      "Mapping natural language to multiple query syntaxes",
      "Supporting different database types seamlessly",
      "Building an intuitive visualization pipeline",
      "Ensuring performance across large datasets",
    ],
    github: "https://github.com/aditya-pandey-ai/NeoCypher",
    demo: "#",
    date: "2024",
    duration: "5 months",
    category: "Database + AI",
    media: {
      type: "gif",
      url: "/assets/projects/neocypher/demo.gif",
      alt: "NeoCypher interface showing natural language query results with visualization",
      caption: "Querying multiple databases with a single natural language prompt",
    },
  },
  {
    id: "mclaren-f1-dashboard",
    title: "McLaren F1 Dashboard",
    subtitle: "Formula 1 Telemetry & Analytics",
    description:
      "An interactive dashboard that visualizes McLaren Formula 1 race telemetry and performance metrics using FastF1 and Streamlit. Provides real-time insights into lap times, sector speeds, tire strategies, and race analytics.",
    fullDescription: `The McLaren F1 Dashboard is a data visualization platform built to analyze and explore Formula 1 race telemetry with a focus on McLaren drivers. 

It integrates the FastF1 library to fetch real race weekend data and transforms it into interactive, insightful visualizations. The dashboard allows fans, analysts, and engineers to study lap performance, speed traces, pit stop strategies, and driver comparisons in an intuitive way.

By leveraging Python, Pandas, Plotly, and Streamlit, the dashboard delivers a clean and responsive interface, making complex F1 telemetry data accessible to a wider audience.`,
    story:
      "Started as an exploration into Formula 1 telemetry with FastF1, the project evolved into a full analytics dashboard to study McLaren's race performance in detail. The main challenge was transforming raw telemetry into meaningful and interactive visuals for real-time insights.",
    impact: "Made F1 telemetry data accessible and engaging for fans, students, and analysts.",
    metrics: ["Telemetry visualization", "Lap time analysis", "Driver comparisons", "Pit stop insights"],
    detailedMetrics: [
      { label: "Data Sources", value: "FastF1", description: "Official F1 race weekend telemetry" },
      { label: "Visualization", value: "10+", description: "Interactive charts and graphs" },
      { label: "Driver Comparison", value: "Yes", description: "Side-by-side lap and speed analysis" },
      { label: "Strategy Insights", value: "Yes", description: "Tire and pit stop strategy breakdowns" },
      { label: "Real-time Mode", value: "Supported", description: "Live telemetry data fetching" },
    ],
    tech: ["Python", "FastF1", "Pandas", "Plotly", "Streamlit"],
    features: [
      "Lap time and sector speed visualization",
      "Driver vs. driver performance comparison",
      "Pit stop and tire strategy breakdowns",
      "Speed traces and telemetry overlays",
      "Interactive Streamlit dashboard",
    ],
    challenges: [
      "Processing large race telemetry datasets",
      "Synchronizing driver data for fair comparisons",
      "Building intuitive visualizations for complex racing metrics",
      "Ensuring real-time responsiveness of the dashboard",
    ],
    github: "https://github.com/aditya-pandey-ai/mclaren-f1-dashboard",
    demo: "#",
    date: "2024",
    duration: "2 months",
    category: "Data Visualization / Sports Analytics",
    media: {
      type: "image",
      url: "/assets/projects/mclaren-f1-dashboard/dashboard-screenshot.png",
      alt: "McLaren F1 telemetry dashboard with lap time, speed trace, and pit strategy visualizations",
      caption: "Interactive dashboard analyzing McLaren F1 race telemetry and performance metrics",
    },
  },

  {
    id: "network-security",
    title: "EdgeNodes",
    subtitle: "Phishing Detection & Network Security System",
    description:
      "EdgeNodes is a machine learning-based phishing detection system that secures edge networks from malicious websites. It integrates a full MLOps pipeline with AWS deployment for real-time inference.",
    fullDescription: `EdgeNodes is an AI-powered cybersecurity platform designed to detect and prevent phishing attacks in real-time.  
It leverages machine learning models trained on URL and website behavior features to classify sites as legitimate or malicious.

The project implements a complete MLOps pipeline:
- Data ingestion, validation, and transformation
- Model training and evaluation (precision, recall, F1, AUC)
- Experiment tracking and versioning with MLflow
- Automated deployment to AWS Cloud (S3, ECR, EC2)
- Artifact management for reproducibility and monitoring

By combining robust ML algorithms with cloud-native deployment, EdgeNodes ensures scalable, reliable, and adaptive protection for modern networks.`,
    story:
      "I wanted to address the growing issue of phishing threats by building an end-to-end ML security system. EdgeNodes evolved into a full MLOps-driven platform with AWS integration for real-time protection.",
    impact: "AI-powered phishing detection for network security",
    metrics: ["MLOps pipeline", "MLflow tracking", "AWS deployment", "High model accuracy"],
    detailedMetrics: [
      { label: "Dataset Size", value: "11,055", description: "Samples with 30 URL/website features" },
      { label: "Best Model", value: "RandomForestClassifier", description: "Selected for accuracy and recall" },
      { label: "Train F1-score", value: "0.9910", description: "Strong performance on training data" },
      { label: "Test F1-score", value: "0.9776", description: "High generalization on unseen data" },
      { label: "Test Recall", value: "0.9836", description: "Effective at catching phishing attempts" },
    ],
    tech: ["Python", "scikit-learn", "MLflow", "AWS (S3, ECR, EC2)", "Docker", "MLOps"],
    features: [
      "Automated data pipeline with validation and transformation",
      "ML-based phishing website classification",
      "Experiment tracking and versioning with MLflow",
      "Model deployment to AWS for real-time inference",
      "Artifacts management for reproducibility",
      "Scalable, modular MLOps architecture",
    ],
    challenges: [
      "Building a robust pipeline for end-to-end ML lifecycle",
      "Balancing precision and recall to minimize false positives",
      "Integrating MLflow for tracking and deployment",
      "Scaling deployments on AWS for real-time inference",
    ],
    github: "https://github.com/aditya-pandey-ai/Network-Security",
    demo: "#",
    date: "2024",
    duration: "4 months",
    category: "Cybersecurity & MLOps",
    media: {
      type: "image",
      url: "/assets/projects/edgenodes/architecture.png",
      alt: "EdgeNodes architecture showing MLOps pipeline and AWS deployment",
      caption: "End-to-end phishing detection pipeline with MLflow tracking and AWS cloud deployment",
    },
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "Machine Learning & Business Analytics",
    description:
      "A comprehensive machine learning solution that predicts customer churn using advanced analytics and feature engineering. Built to help businesses identify at-risk customers and implement retention strategies before it's too late.",
    fullDescription: `Customer churn prediction is critical for business sustainability, as acquiring new customers costs 5-25 times more than retaining existing ones. This project implements a complete machine learning pipeline to predict customer churn with high accuracy.

The system analyzes customer behavior patterns, transaction history, engagement metrics, and demographic data to identify customers likely to churn. It uses advanced feature engineering techniques to extract meaningful insights from raw data and applies multiple machine learning algorithms to achieve optimal prediction performance.

Key components include:
- Comprehensive data preprocessing and feature engineering
- Multiple ML algorithms comparison (Random Forest, XGBoost, SVM, Neural Networks)
- Advanced model evaluation with cross-validation and performance metrics
- Feature importance analysis to understand churn drivers
- Business-ready insights and actionable recommendations

The solution provides businesses with early warning systems and actionable insights to implement targeted retention strategies, ultimately reducing churn rates and increasing customer lifetime value.`,
    story:
      "Customer retention costs 5x less than acquisition, but most companies only realize a customer is leaving after they're gone. I built this predictive system to give businesses a crystal ball into customer behavior, using historical data to predict future churn with high accuracy.",
    impact: "Proactive customer retention through predictive analytics",
    metrics: ["High prediction accuracy", "Feature importance analysis", "Business insights", "Retention strategies"],
    detailedMetrics: [
      { label: "Model Accuracy", value: "92%", description: "Overall prediction accuracy on test data" },
      { label: "Precision", value: "89%", description: "Accuracy of positive churn predictions" },
      { label: "Recall", value: "94%", description: "Percentage of actual churners identified" },
      { label: "F1-Score", value: "91%", description: "Balanced performance metric" },
      { label: "ROC-AUC", value: "0.96", description: "Model's discriminative ability" },
      { label: "Features Analyzed", value: "25+", description: "Customer behavior and demographic features" },
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "XGBoost", "Feature Engineering"],
    features: [
      "Advanced feature engineering and selection",
      "Multiple ML algorithm comparison and optimization",
      "Comprehensive model evaluation and validation",
      "Feature importance analysis and interpretation",
      "Business insights and actionable recommendations",
      "Scalable prediction pipeline for real-time inference",
    ],
    challenges: [
      "Handling imbalanced dataset with proper sampling techniques",
      "Feature engineering from complex customer behavior data",
      "Selecting optimal model while avoiding overfitting",
      "Translating model predictions into business actionable insights",
      "Ensuring model interpretability for business stakeholders",
    ],
    github: "https://github.com/aditya-pandey-ai/Customer-Churn-Prediction",
    demo: "#",
    date: "2024",
    duration: "3 months",
    category: "Machine Learning & Business Analytics",
    media: {
      type: "image",
      url: "/customer-churn-prediction-dashboard-with-analytics.jpg",
      alt: "Customer churn prediction dashboard showing model performance and feature importance",
      caption: "Comprehensive churn prediction analytics with model performance metrics and business insights",
    },
  },
  {
    id: "student-grade-predictor",
    title: "Student Grade Predictor",
    subtitle: "Educational Analytics & Machine Learning",
    description:
      "An intelligent system that predicts student academic performance using machine learning algorithms. Analyzes study patterns, attendance, and demographic factors to forecast grades and identify students who need additional support.",
    fullDescription: `The Student Grade Predictor leverages machine learning to transform educational data into actionable insights for improving student outcomes. By analyzing multiple factors that influence academic performance, the system provides early warning signals for students at risk of poor performance.

The system processes various data sources:
- Academic history and previous performance
- Attendance patterns and engagement metrics
- Study habits and time allocation
- Demographic and socioeconomic factors
- Extracurricular activities and social factors

Using advanced machine learning techniques, the predictor identifies complex patterns and relationships that human analysis might miss. The system provides not just predictions, but explanations of the key factors influencing each student's projected performance.

Key features include:
- Multi-factor analysis of student performance drivers
- Early intervention recommendations for at-risk students
- Personalized learning path suggestions
- Performance trend analysis and forecasting
- Comprehensive reporting for educators and administrators

The solution empowers educators to make data-driven decisions, implement timely interventions, and personalize learning experiences to maximize student success.`,
    story:
      "Education should be personalized, but teachers often lack the tools to identify struggling students early. This predictor analyzes multiple factors—from study time to family background—to forecast academic performance and enable timely interventions.",
    impact: "Early intervention system for student academic success",
    metrics: ["Performance prediction", "Risk identification", "Educational insights", "Intervention recommendations"],
    detailedMetrics: [
      { label: "Prediction Accuracy", value: "88%", description: "Accuracy in predicting final grades" },
      { label: "Early Detection", value: "85%", description: "Success rate in identifying at-risk students" },
      { label: "Features Analyzed", value: "20+", description: "Academic, behavioral, and demographic factors" },
      { label: "Intervention Success", value: "73%", description: "Improvement rate after recommended interventions" },
      { label: "Model Interpretability", value: "High", description: "Clear explanations of prediction factors" },
      { label: "Processing Speed", value: "<2s", description: "Real-time prediction generation" },
    ],
    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Data Visualization",
      "Statistical Modeling",
      "Feature Engineering",
    ],
    features: [
      "Multi-dimensional student performance analysis",
      "Early warning system for academic risk identification",
      "Personalized intervention recommendations",
      "Comprehensive performance trend analysis",
      "Interactive dashboards for educators",
      "Automated reporting and insights generation",
    ],
    challenges: [
      "Handling sensitive student data with privacy considerations",
      "Balancing multiple performance factors with varying importance",
      "Creating interpretable models for educational stakeholders",
      "Ensuring fairness and avoiding bias in predictions",
      "Integrating diverse data sources and formats",
    ],
    github: "https://github.com/aditya-pandey-ai/Student-Grade-Predictor",
    demo: "#",
    date: "2024",
    duration: "3 months",
    category: "Educational Analytics & Machine Learning",
    media: {
      type: "image",
      url: "/student-grade-prediction-dashboard-with-performanc.jpg",
      alt: "Student grade predictor dashboard showing performance analytics and risk assessment",
      caption: "Educational analytics dashboard with grade predictions and student performance insights",
    },
  },
]
export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const [showMediaModal, setShowMediaModal] = useState(false)

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-sans">Project Not Found</h1>
          <Link href="/">
            <Button className="bg-stone-700 text-white hover:bg-stone-600 font-sans">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
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

      {showMediaModal && project.media && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setShowMediaModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-stone-300 text-xl font-bold"
            >
              ✕ Close
            </button>
            <img
              src={project.media.url || "/placeholder.svg"}
              alt={project.media.alt}
              className="max-w-full max-h-full object-contain"
            />
            <p className="text-white text-center mt-4 font-sans">{project.media.caption}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-stone-50/95 backdrop-blur-md border-b-4 border-stone-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="outline"
                className="border-stone-600 text-stone-700 hover:bg-stone-700 hover:text-white bg-transparent font-sans"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-stone-600 text-stone-700 hover:bg-stone-700 hover:text-white bg-transparent font-sans"
                asChild
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button className="bg-stone-700 text-white hover:bg-stone-600 font-sans">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="border-l-4 border-stone-600 pl-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-stone-200 text-stone-800 text-sm font-medium uppercase tracking-wide font-sans">
                    {project.category}
                  </span>
                  <div className="flex items-center text-sm text-stone-600 font-sans">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-stone-800 font-sans">
                  {project.title}
                </h1>
                <p className="text-xl text-stone-600 mb-6 font-sans">{project.subtitle}</p>
                <div className="px-4 py-2 bg-stone-700 text-white inline-block">
                  <span className="font-bold text-lg font-sans">{project.impact}</span>
                </div>
              </div>

              <div className="prose prose-stone max-w-none">
                <p className="text-lg leading-relaxed text-stone-700 font-sans">{project.fullDescription}</p>
              </div>

              {project.media && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4 font-sans">Project Media</h3>
                  <div className="relative group cursor-pointer" onClick={() => setShowMediaModal(true)}>
                    <img
                      src={project.media.url || "/placeholder.svg"}
                      alt={project.media.alt}
                      className="w-full h-64 object-cover border-2 border-stone-600 hover:border-stone-500 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ImageIcon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 mt-2 font-sans">{project.media.caption}</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-stone-50 border-2 border-stone-600 p-6">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide font-sans">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-stone-600" />
                    <div>
                      <p className="font-medium font-sans">Duration</p>
                      <p className="text-sm text-stone-600 font-sans">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Code2 className="w-5 h-5 mr-3 text-stone-600" />
                    <div>
                      <p className="font-medium font-sans">Category</p>
                      <p className="text-sm text-stone-600 font-sans">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-stone-50 border-2 border-stone-600 p-6">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide font-sans">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-stone-200 text-stone-800 text-sm font-medium border border-stone-400 font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans">Performance Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.detailedMetrics.map((metric, index) => (
              <div key={index} className="bg-white border-2 border-stone-600 p-6 text-center">
                <div className="text-3xl font-bold text-stone-800 mb-2 font-sans">{metric.value}</div>
                <div className="font-medium text-stone-700 mb-2 font-sans">{metric.label}</div>
                <div className="text-sm text-stone-600 font-sans">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Challenges */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-stone-600 pb-4 font-sans">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-stone-700 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-stone-600 pb-4 font-sans">
                Technical Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-stone-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-stone-700 font-sans">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans">The Story Behind the Project</h2>
          <div className="bg-white border-2 border-stone-600 p-8">
            <blockquote className="text-lg italic text-stone-700 leading-relaxed font-sans">
              "{project.story}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-stone-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans">Interested in This Project?</h2>
          <p className="text-xl mb-8 opacity-90 font-sans">
            Want to learn more about the technical implementation or discuss similar projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-stone-700 hover:bg-stone-100 font-sans" asChild>
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-700 bg-transparent font-sans"
              asChild
            >
              <a href="mailto:pandey.aditya2304@gmail.com">
                <ExternalLink className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-stone-600 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-wide font-sans">
            © 2024 Aditya Pandey • Built with precision and passion for AI • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
