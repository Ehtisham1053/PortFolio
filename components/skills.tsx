"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Database, BarChart3, Settings, Sparkles } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming, Tools & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "Python",
        "Jupyter Notebook",
        "scikit-learn",
        "TensorFlow",
        "PyTorch",
        "SQL (MySQL, PostgreSQL)",
        "Data Modeling & Schema Design",
        "Git & GitHub",
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "Model Development (Regression, Classification, Forecasting)",
        "Feature Engineering & Model Optimization",
        "Model Evaluation & Validation",
        "Hyperparameter Tuning (Grid/Random Search)",
        "Model Deployment (Flask APIs, Docker, Streamlit)",
        "Deep Neural Networks (CNN, RNN, LSTM)",
      ],
    },
    {
      title: "Generative AI & LLMs",
      icon: <Sparkles className="h-6 w-6" />,
      skills: [
        "Large Language Models (BERT, GPT, RAG)",
        "LangChain Framework",
        "Prompt Engineering & Fine-tuning",
        "Agentic AI Systems",
        "Retrieval-Augmented Generation (RAG)",
        "AI-Powered Automation & Knowledge Systems",
      ],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        "Data Preprocessing & Cleaning",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis & Hypothesis Testing",
        "Data Visualization (Matplotlib, Seaborn)",
        "Predictive Analytics & Business Intelligence",
      ],
    },
    {
      title: "Project Management & Software Engineering",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        "Software Design Principles & Patterns",
        "Full SDLC (Requirement → Deployment)",
        "Agile Methodologies (Scrum)",
        "Sprint Planning & Daily Stand-ups",
        "Task Management (ClickUp)",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-purple-400">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
