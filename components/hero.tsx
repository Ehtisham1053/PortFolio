"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Data Scientist & ML Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                {/* Replace this with your actual image */}
                <img
                  src="/ehtisham.jpg"
                  alt="Ehtisham Afzal"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Ehtisham Afzal
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Data Scientist skilled in machine learning, deep learning, and end-to-end production solutions. Experienced in EDA, predictive modeling, and scalable ML pipelines. Proficient in NLP, Generative AI, transformer-based LLMs (BERT, GPT, RAG), and AI agents using LangChain. Adept at delivering insight-driven analytics and transforming raw data into actionable business intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="https://github.com/Ehtisham1053" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <a href="http://www.linkedin.com/in/ehtisham-afzal-22553a373" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <a href="mailto:ehtisham1053@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <a href="/resume.pdf" download="Ehtisham_Afzal_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>

          </div>

          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto">
              <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
