"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Star, Eye } from "lucide-react"

export function GitHubStats() {
  return (
    <section id="github-stats" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">GitHub Statistics</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <Github className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">Active</div>
              <div className="text-gray-400 text-sm">Repositories</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">Growing</div>
              <div className="text-gray-400 text-sm">Community</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <Eye className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">Regular</div>
              <div className="text-gray-400 text-sm">Contributions</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">GitHub Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://github-readme-stats.vercel.app/api?username=Ehtisham1053&show_icons=true&theme=radical&hide_border=true&bg_color=1e293b&title_color=a855f7&icon_color=a855f7&text_color=e2e8f0"
                alt="GitHub Stats"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Most Used Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ehtisham1053&layout=compact&theme=radical&hide_border=true&bg_color=1e293b&title_color=a855f7&text_color=e2e8f0"
                alt="Top Languages"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Contribution Graph</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=Ehtisham1053&theme=react-dark&hide_border=true&bg_color=1e293b&color=a855f7&line=a855f7&point=e2e8f0"
                alt="Contribution Graph"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
