"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BarChart3, Code, Database, Cog, TrendingUp } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Machine Learning Solutions",
      icon: <Brain className="h-8 w-8" />,
      description:
        "End-to-end ML pipeline development including model training, validation, and deployment using Python, TensorFlow, and scikit-learn.",
      features: ["Predictive Modeling", "Classification & Regression", "Model Optimization", "Hyperparameter Tuning"],
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="h-8 w-8" />,
      description:
        "Comprehensive data analysis with statistical insights and interactive visualizations to drive business decisions.",
      features: ["Exploratory Data Analysis", "Statistical Testing", "Data Visualization", "Business Intelligence"],
    },
    {
      title: "End-to-End AI Solutions",
      icon: <Code className="h-8 w-8" />,
      description:
        "Design and deploy scalable AI systems that automate workflows, optimize operations, and enable data-driven decision-making across domains like supply chain and business analytics.",
      features: ["Predictive Analytics","AI-Powered Automation","Supply Chain Optimization","Model Deployment & Monitoring"],
    },
    {
      title: "Database Design & Management",
      icon: <Database className="h-8 w-8" />,
      description: "Database architecture, optimization, and management for efficient data storage and retrieval.",
      features: ["SQL Optimization", "Schema Design", "Data Modeling", "Performance Tuning"],
    },
    {
      title: "Deep Learning Solutions",
      icon: <Cog className="h-8 w-8" />,
      description: "Advanced deep learning models for computer vision, NLP, and complex pattern recognition tasks.",
      features: ["Artificial Neural Networks", "Image Classification", "Transfer Learning", "LSTM and GRU Models"],
    },
    {
      title: "Generative AI & NLP",
      icon: <Brain className="h-8 w-8" />,
      description:
        "Leverage advanced AI and transformer-based models to extract insights, generate content, and automate intelligence workflows.",
      features: [
        "Natural Language Processing (NLP)",
        "Generative AI Applications",
        "LLM Fine-Tuning (BERT, GPT, RAG)",
        "AI Agents & LangChain Integration",
      ],
    },

  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Comprehensive data science and machine learning services to help businesses leverage their data for
            strategic advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400">
                      • {feature}
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
