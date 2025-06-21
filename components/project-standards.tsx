"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, FileText, Zap, Users, Target } from "lucide-react"

export function ProjectStandards() {
  const standardsFeatures = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ML/DL Excellence",
      description: "High-standard machine learning and deep learning projects with optimized performance and accuracy.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Python Code",
      description: "Well-structured, maintainable Python code following PEP 8 standards and best practices.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Documentation",
      description: "Detailed documentation including API docs, user guides, and technical specifications.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimized",
      description: "Efficient algorithms and optimized code for maximum performance and scalability.",
    },
  ]

  return (
    <section id="standards" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Project Standards & Development</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Delivering high-quality machine learning and Python projects with industry-standard practices and
            comprehensive documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {standardsFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 text-center"
            >
              <CardHeader>
                <div className="text-purple-400 mx-auto mb-2">{feature.icon}</div>
                <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Software Development Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Agile Methodology:</strong> Iterative development with regular sprint planning and reviews
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Test-Driven Development:</strong> Comprehensive testing with unit tests and integration
                    tests
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Version Control:</strong> Git-based workflow with feature branches and code reviews
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>CI/CD Pipeline:</strong> Automated testing and deployment for reliable releases
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Code Quality:</strong> Static analysis, linting, and adherence to coding standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Documentation First:</strong> Clear documentation throughout the development process
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Project Deliverables
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Production-Ready Code:</strong> Scalable, maintainable code ready for deployment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Model Performance Reports:</strong> Detailed analysis of model accuracy and metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>API Documentation:</strong> Complete REST API documentation with examples
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Deployment Guides:</strong> Step-by-step deployment instructions and configurations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Training Materials:</strong> User guides and training documentation for end users
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Ongoing Support:</strong> Post-delivery support and maintenance recommendations
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-purple-400">Quality Assurance & Standards</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Code Quality</h4>
                <ul className="space-y-2 text-sm">
                  <li>• PEP 8 compliance</li>
                  <li>• Type hints and annotations</li>
                  <li>• Comprehensive error handling</li>
                  <li>• Memory optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">ML Best Practices</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-validation techniques</li>
                  <li>• Feature engineering pipelines</li>
                  <li>• Model versioning</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Documentation</h4>
                <ul className="space-y-2 text-sm">
                  <li>• README with setup instructions</li>
                  <li>• Inline code comments</li>
                  <li>• API reference documentation</li>
                  <li>• Architecture diagrams</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
