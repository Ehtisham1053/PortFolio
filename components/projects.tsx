"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Code, Brain, Cpu } from "lucide-react"

export function Projects() {
  const projectCategories = [
    {
      title: "Python Projects",
      icon: <Code className="h-6 w-6" />,
      projects: [
        {
          title: "Medical Checkup Appointment Web Application",
          description:
            "Created a responsive web platform for scheduling and managing doctor appointments with authentication and admin dashboards. Integrated CRUD operations with a clean UI.",
          technologies: ["Python", "Streamlit", "SQL"],
          github: "https://github.com/Ehtisham1053/medical-appointment-system",
        },
        {
          title: "Mental Health Tracker",
          description:
            "A web app to track your mood through journal entries, visualize emotional trends with charts, and uncover thought patterns using dynamic word clouds.",
          technologies: ["Python", "Flask", "SQL", "OOP", "HTML/CSS"],
          github: "https://github.com/Ehtisham1053/Mental-Health-Tracker.git",
        },
        {
          title: "Bike Rental Application",
          description:
            "Developed a bike rental solution enabling users to book, track, and return bikes with cost calculation and time logging.",
          technologies: ["Python", "Flask", "MySQL"],
          github: "https://github.com/Ehtisham1053/bike-rental-app",
        },
        {
          title: "Library Management System",
          description:
            "A Python-based library management app built with Streamlit, offering separate interfaces for admins and students to manage books, users, and circulation — all without the need for a database server.",
          technologies: ["Python", "Flask", "PostgreSQL", "OOP", "Pandas"],
          github: "https://github.com/Ehtisham1053/Library-Management-System.git",
        },
      ],
    },
    {
      title: "Machine Learning Projects",
      icon: <Brain className="h-6 w-6" />,
      projects: [
        {
          title: "Demand Forecasting for Retail Store",
          description:
            "Developed a time series forecasting model using XGBoost to predict item-wise sales and optimize stock levels. Achieved a 20% reduction in overstock incidents.",
          technologies: ["Python", "Flask", "PostgreSQL", "Pandas", "Matplotlib"],
          github: "https://github.com/Ehtisham1053/demand-forecasting",
        },
        {
          title: "AI-Powered Supply Chain ERP for Retail Chain",
          description:
            "Engineered an end-to-end ML pipeline integrated into a supply chain ERP system to forecast demand, recommend restocking, and optimize warehouse utilization.",
          technologies: ["Python", "Flask", "PostgreSQL", "Pandas", "Matplotlib"],
          github: "https://github.com/Ehtisham1053/supply-chain-erp",
        },
        {
          title: "Medical Diagnosis Classification",
          description:
            "Built a classification model for early disease detection based on patient vitals and historical records, improving diagnostic accuracy through feature engineering and tuning.",
          technologies: ["Python", "Flask", "Classification Algorithm", "Matplotlib"],
          github: "https://github.com/Ehtisham1053/medical-diagnosis",
        },
        {
          title: "Prediction System (Flight Price / Loan Default)",
          description:
            "Implemented dual-use prediction systems: one to forecast dynamic flight pricing using regression, and another to classify loan default risk using supervised learning.",
          technologies: ["Python", "Flask", "Scikit-Learn", "Pandas"],
          github: "https://github.com/Ehtisham1053/prediction-systems",
        },
      ],
    },
    {
      title: "Deep Learning Projects",
      icon: <Cpu className="h-6 w-6" />,
      projects: [
        {
          title: "Brain Tumor Detection Using MRI Scans",
          description:
            "Built a CNN-based classifier to detect brain tumors from MRI images with 95% accuracy, using data augmentation techniques.",
          technologies: ["Python", "CNN", "TensorFlow", "Matplotlib"],
          github: "https://github.com/Ehtisham1053/brain-tumor-detection",
        },
        {
          title: "Speech Emotion Recognition System",
          description:
            "Trained a hybrid CNN-LSTM model to classify spoken emotions using MFCC features from audio inputs, with real-time voice input support.",
          technologies: ["Python", "Flask", "Librosa", "TensorFlow"],
          github: "https://github.com/Ehtisham1053/speech-emotion-recognition",
        },
        {
          title: "Image generation using Stable Diffusion",
          description:
            "Generate stunning images from text prompts using Hugging Face’s powerful diffusion models. Supports multiple styles including photorealism, anime, and digital art via a clean Gradio web interface. Built with PyTorch + Diffusers.",
          technologies: ["Python", "Diffusion Models", "Gradio", "PyTorch"],
          github: "https://github.com/Ehtisham1053/Image-generation-using-stable-diffusion.git",
        },
        {
          title: "Age and Gender Prediction from Images",
          description:
            "Designed a multi-output deep learning model to simultaneously predict a person's age and gender from facial images, deployed via a live webcam demo.",
          technologies: ["Python", "TensorFlow", "CNN"],
          github: "https://github.com/Ehtisham1053/age-gender-prediction",
        },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my work across different domains of data science, machine learning, and software development.
          </p>
        </div>

        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="text-purple-400 mr-3">{category.icon}</div>
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.projects.map((project, projectIndex) => (
                <Card
                  key={projectIndex}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                >
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
