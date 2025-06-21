"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Database, GitBranch, BarChart3, Settings } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python"],
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "Model Development (Regression, Classification, Forecasting)",
        "Model Evaluation & Validation",
        "Hyperparameter Tuning (Grid Search, Random Search)",
        "Model Deployment (Flask APIs, Docker, Streamlit)",
        "TensorFlow, scikit-learn",
      ],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        "Data Preprocessing & Cleaning",
        "Feature Engineering & Selection",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization (Matplotlib, Seaborn)",
        "Statistical Analysis & Hypothesis Testing",
        "Predictive Analytics & Business Intelligence",
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL (MySQL, PostgreSQL)", "Data Modeling & Schema Design"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["GitHub"],
    },
    {
      title: "Project Management & Software Engineering",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        "Software Design Principles",
        "Software Design Patterns",
        "Full SDLC Understanding (Requirement Analysis → Deployment)",
        "Agile Methodologies (Scrum)",
        "Sprint Planning & Stand-ups",
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
