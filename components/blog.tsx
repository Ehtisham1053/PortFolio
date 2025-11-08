"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Clock } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "Understanding the Machine Learning Pipeline: From Data Ingestion to Prediction and Deployment",
      excerpt:
        "A comprehensive guide to building end-to-end machine learning pipelines that scale in production environments.",
      date: "2025-07-31",
      readTime: "4 min read",
      url: "https://medium.com/@ehtishamafzal14/understanding-the-machine-learning-pipeline-from-data-ingestion-to-production-a447ac87a095",
      tags: ["Machine Learning", "Python"],
    },
    {
      title: "Deep Dive into Exploratory Data Analysis with Python",
      excerpt:
        "Learn advanced EDA techniques to uncover hidden patterns and insights in your datasets using pandas and seaborn.",
      date: "2024-01-10",
      readTime: "12 min read",
      url: "https://medium.com/@ehtisham1053/eda-python-guide",
      tags: ["Data Science", "Python", "EDA"],
    },
    {
      title: "How AI is Reshaping Supply Chain Management: A Data Scientist’s Perspective",
      excerpt:
        "In this blog, I’ll walk you through how AI is transforming the supply chain landscape not with vague theory, but through the lens of a data scientist who has seen these technologies in action.",
      date: "2024-08-04",
      readTime: "10 min read",
      url: "https://medium.com/@ehtishamafzal14/how-ai-is-reshaping-supply-chain-management-a-data-scientists-perspective-95f9f3416207",
      tags: ["Flask", "API", "Deployment"],
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences in data science, machine learning, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read on Medium
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <a href="https://medium.com/@ehtisham1053" target="_blank" rel="noopener noreferrer">
              View All Posts on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
