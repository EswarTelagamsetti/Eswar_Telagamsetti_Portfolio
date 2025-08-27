import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Social Keep",
      description:
        "Built a smart survey system with Admin and Participant roles, featuring secure user management, custom survey scheduling, and token-based reward tracking.",
      image: "/survey-management-dashboard-interface.png",
      technologies: ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/EswarTelagamsetti/social-keep-survey-app.git",
    },
    {
      title: "Prawn Aquaculture",
      description:
        "Designed an IoT-based system for aquaculture farmers to estimate prawn counts, recommend medicines, and monitor water quality, improving farm efficiency and productivity.",
      image: "/iot-aquaculture-monitoring-system-dashboard.png",
      technologies: ["Python", "IoT", "Machine Learning", "Data Analytics"],
      githubUrl: "https://github.com/EswarTelagamsetti/shrimp-git.git",
    },
    {
      title: "Deep Learning-Driven Brain Tumor Detection",
      description:
        "Developed a deep learning pipeline to detect and classify brain tumors with high precision. Visualized tumor boundaries and automated classification using convolutional neural networks.",
      image: "/medical-brain-tumor-detection-ai-interface.png",
      technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Medical Imaging"],
      githubUrl: "https://github.com/satyasaieswar/brain-tumor-detection",
    },
    {
      title: "Election Management System",
      description:
        "Engineered a secure, role-based online election platform supporting Admin, Voter, and Candidate functionalities. Included real-time result updates and MySQL integration for data consistency.",
      image: "/secure-election-management-system-interface.png",
      technologies: ["Python", "Flask", "MySQL", "Security", "Real-time Updates"],
      githubUrl: "https://github.com/EswarTelagamsetti/election-management-system.git",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work spanning web development, IoT systems, machine learning, and secure
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
