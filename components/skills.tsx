import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Brain } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "React.js",
        "Flask",
        "FastAPI",
        "Django",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "TensorFlow",
        "Scikit-learn",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Google Colab", "VS Code", "PyCharm", "Render", "Vercel", "Railway"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive set of technical skills spanning multiple programming languages, frameworks, and development
            tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
