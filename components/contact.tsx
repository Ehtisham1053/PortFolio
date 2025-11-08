"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Calendar, Coffee, Lightbulb } from "lucide-react"

export function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Me",
      description: "Drop me a line for project discussions, collaborations, or just to say hello!",
      value: "ehtishamafzal14@gmail.com",
      action: "mailto:ehtishamafzal14@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Me",
      description: "Prefer talking? Give me a call to discuss your data science needs directly.",
      value: "+92-308-1061171",
      action: "tel:+923081061171",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Let's Chat",
      description: "Available for quick consultations and brainstorming sessions.",
      value: "WhatsApp / Telegram",
      action: "https://wa.me/923081061171",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ]

  const suggestions = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Project Consultation",
      description:
        "Have a data science project in mind? Let's discuss your requirements and explore possibilities.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Virtual Coffee Chat",
      description:
        "Interested in data science trends, career advice, or just want to connect? I'm always up for a good conversation.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Meeting",
      description:
        "Need a detailed discussion about your ML/AI needs? Let's schedule a proper meeting to dive deep.",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect & Collaborate</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Whether you have a groundbreaking data science project, need expert consultation, or simply want to explore
            the fascinating world of machine learning together, I'm here to help. Let's turn your data into meaningful
            insights and innovative solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`${method.bgColor} ${method.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{method.description}</p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <a href={method.action} target="_blank" rel="noopener noreferrer" aria-label={method.title}>
                    {method.value}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Can Discuss */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What We Can Discuss</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {suggestions.map((suggestion, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    {suggestion.icon}
                    <span className="ml-3">{suggestion.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{suggestion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">My Location & Availability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Pakistan</p>
                    <p className="text-sm text-gray-400">Available to relocate for onsite role or remote work</p>
                  </div>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-sm">
                    <strong className="text-white">Response Time:</strong> Usually within 24 hours
                  </p>
                  <p className="text-sm mt-2">
                    <strong className="text-white">Best Time to Call:</strong> 9 AM - 8 PM PKT (UTC+5)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Let's Build Something Amazing</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  I'm passionate about solving complex problems with data and always excited to take on new challenges.
                  Whether you're a startup looking to implement your first ML model or an enterprise seeking to optimize
                  existing systems, let's explore how we can work together.
                </p>
                <div className="flex space-x-4 pt-4">
                  <Button asChild size="icon" className="bg-purple-600 hover:bg-purple-700" aria-label="GitHub">
                    <a href="https://github.com/Ehtisham1053" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="icon" className="bg-purple-600 hover:bg-purple-700" aria-label="LinkedIn">
                    <a
                      href="https://www.linkedin.com/in/ehtisham-afzal-032009342"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
