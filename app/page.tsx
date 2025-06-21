import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { GitHubStats } from "@/components/github-stats"
import { Projects } from "@/components/projects"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ProjectStandards } from "@/components/project-standards"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <GitHubStats />
      <Projects />
      <Blog />
      <ProjectStandards />
      <Contact />
    </main>
  )
}
