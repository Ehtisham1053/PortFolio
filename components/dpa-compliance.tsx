"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export function DPACompliance() {
  const complianceFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Protection",
      description: "All personal data is handled in accordance with GDPR and local data protection regulations.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Processing",
      description: "Implementation of appropriate technical and organizational measures to ensure data security.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Privacy by Design",
      description: "Privacy considerations are integrated into all data processing activities from the outset.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentation",
      description: "Comprehensive documentation of data processing activities and compliance measures.",
    },
  ]

  return (
    <section id="dpa" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Data Protection & Compliance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Committed to maintaining the highest standards of data protection and privacy compliance in all projects and
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceFeatures.map((feature, index) => (
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
              <CardTitle className="text-purple-400">Data Processing Principles</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Lawfulness:</strong> All data processing is based on legitimate legal grounds
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Purpose Limitation:</strong> Data is collected for specified, explicit purposes only
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Data Minimization:</strong> Only necessary data is collected and processed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Accuracy:</strong> Data is kept accurate and up to date
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Storage Limitation:</strong> Data is retained only as long as necessary
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Security:</strong> Appropriate security measures protect personal data
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Right to Information:</strong> Know how your data is being processed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Right of Access:</strong> Request copies of your personal data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Right to Rectification:</strong> Request correction of inaccurate data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Right to Portability:</strong> Receive your data in a structured format
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Right to Object:</strong> Object to processing of your personal data
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-purple-400">Contact for Data Protection Matters</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="mb-4">
              If you have any questions about how your personal data is handled or wish to exercise your data protection
              rights, please contact:
            </p>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <p>
                <strong>Email:</strong> ehtisham1053@gmail.com
              </p>
              <p>
                <strong>Subject:</strong> Data Protection Inquiry
              </p>
              <p className="mt-2 text-sm text-gray-400">
                All data protection inquiries will be responded to within 30 days as required by applicable regulations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
