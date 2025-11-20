"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Code2, Database, Brain, Server, Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center space-y-8 z-10"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Building <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Intelligent</span> <br />
            Systems for the Future
          </motion.h1>

          <motion.p variants={item} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="font-semibold text-foreground">{portfolioData.personal.name}</span>.
            A {portfolioData.personal.title} specializing in AI Agents, Microservices, and Scalable Data Pipelines.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="px-8 h-12 text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex gap-6 justify-center pt-8 text-muted-foreground">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Github className="w-7 h-7" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Mail className="w-7 h-7" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              Work Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 space-y-12">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:flex justify-between items-start group">
                  <div className="hidden md:block w-5 h-5 bg-primary rounded-full absolute left-[-11px] top-1 ring-4 ring-white" />

                  <div className="md:w-5/12 md:text-right md:pr-12 mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                    <p className="text-primary font-medium">{job.role}</p>
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mt-1 hidden md:flex">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                  </div>

                  <div className="md:hidden absolute left-[-9px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-white" />

                  <div className="md:w-7/12 md:pl-12 border-l-0 md:border-l-2 border-slate-200 md:-ml-[2px] pb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 md:hidden">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                    <p className="text-slate-600 mb-4 italic">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Technical Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioData.personal.bio}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" /> Programming & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[...portfolioData.skills.programming, ...portfolioData.skills.frameworks].map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm text-slate-700 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" /> Data & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.dataTools.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm text-slate-700 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" /> DevOps & Cloud
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.devOps.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm text-slate-700 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl -rotate-6 transform scale-95 opacity-50" />
              <div className="relative bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-xl font-mono text-sm leading-relaxed border border-slate-800">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">AI_Engineer</span>:</p>
                <p className="pl-4">def <span className="text-blue-400">__init__</span>(self):</p>
                <p className="pl-8">self.name = <span className="text-green-400">"{portfolioData.personal.name}"</span></p>
                <p className="pl-8">self.role = <span className="text-green-400">"{portfolioData.personal.title}"</span></p>
                <p className="pl-8">self.education = <span className="text-green-400">"FAST NUCES"</span></p>
                <br />
                <p className="pl-4">def <span className="text-blue-400">get_stack</span>(self):</p>
                <p className="pl-8">return [</p>
                <p className="pl-12"><span className="text-green-400">"FastAPI"</span>, <span className="text-green-400">"LangChain"</span>,</p>
                <p className="pl-12"><span className="text-green-400">"Microservices"</span>, <span className="text-green-400">"RAG"</span></p>
                <p className="pl-8">]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
              <Code2 className="w-8 h-8 text-primary" />
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects demonstrating my expertise in AI, Data Engineering, and Full Stack Development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border group flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                      {project.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-6 flex-grow flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h2>
          </div>

          <div className="grid gap-8">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end mt-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <p key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {achievement}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities.
            If you're interested in building something great, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-12" onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              {portfolioData.personal.email}
            </Button>
            <Button variant="outline" size="lg" className="px-8 h-12" onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}>
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={portfolioData.personal.github} className="hover:text-foreground transition-colors">GitHub</a>
            <a href={portfolioData.personal.linkedin} className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
