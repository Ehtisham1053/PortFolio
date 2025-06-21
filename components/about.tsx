"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Science in Information Technology</h3>
                  <p className="text-purple-400">Quaid-i-Azam University, Islamabad</p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <Calendar className="mr-2 h-4 w-4" />
                    2021-2025
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-400">
                    <MapPin className="mr-2 h-4 w-4" />
                    CGPA: 3.2
                  </div>
                </div>

                <div className="border-t border-slate-600 pt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Project Management</h3>
                      <p className="text-purple-400">Coursera</p>
                      <div className="flex items-center mt-1 text-sm text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        2023
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">Microsoft Technologies Certification</h3>
                      <p className="text-purple-400">Pak Finland Capacity Building Project (MUXBAY)</p>
                      <div className="flex items-center mt-1 text-sm text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <Briefcase className="mr-3 h-6 w-6" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white">Freelance Data Scientist</h3>
                <p className="text-purple-400">Remote | Project-based via Digital Agencies</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    • Performed Exploratory Data Analysis (EDA) on structured datasets to uncover trends, identify
                    outliers, and inform feature engineering decisions using Pandas, Seaborn, and Matplotlib
                  </li>
                  <li>
                    • Conducted statistical hypothesis testing and applied descriptive/inferential statistical
                    techniques to validate assumptions and improve data quality
                  </li>
                  <li>
                    • Built and evaluated predictive models using Linear Regression, Logistic Regression, Decision
                    Trees, and Ensemble methods for both regression and classification problems
                  </li>
                  <li>
                    • Developed and compared models using performance metrics such as accuracy, precision, recall,
                    F1-score, RMSE, and AUC-ROC
                  </li>
                  <li>
                    • Tuned hyperparameters using GridSearchCV and RandomizedSearchCV to optimize model performance
                    across multiple cross-validation folds
                  </li>
                  <li>
                    • Created modular and reusable scripts for data preprocessing, feature scaling, encoding, and
                    train-test splitting to streamline experimentation
                  </li>
                  <li>
                    • Documented entire project workflows, including assumptions, model selection rationale, and
                    evaluation results for stakeholders and team sharing
                  </li>
                  <li>
                    • Assisted clients by debugging Python code, enhancing academic assignments, and developing
                    small-scale machine learning and data analysis projects
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
