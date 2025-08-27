import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Briefcase } from "lucide-react"

export function Education() {
  const experience = [
    {
      title: "Full Stack Developer Intern",
      company: "Insient",
      period: "March 2025 — July 2025",
      description:
        "Developed and deployed 3 full-stack web applications using Flask, JavaScript, and MySQL. Enhanced frontend responsiveness and reduced backend response time by 25% through optimized database queries.",
      achievements: ["25% Backend Performance Improvement", "3 Full-Stack Applications", "Database Query Optimization"],
    },
    {
      title: "AIML Intern",
      company: "SRMIST CCAM Labs",
      period: "June 2025 — July 2025",
      description:
        "Contributed to an ISRO-affiliated AIML project focused on sputtering phenomena. Created a custom dataset from 25+ research papers and built machine learning models to automate classification, achieving 87% accuracy.",
      achievements: [
        "87% ML Model Accuracy",
        "ISRO-Affiliated Project",
        "Custom Dataset Creation",
        "25+ Research Papers",
      ],
    },
  ]

  const education = [
    {
      level: "B.Tech (CSE - AI & ML)",
      institution: "SRM Institute of Technology, Chennai",
      period: "August 2023 - May 2027",
      status: "Currently Pursuing",
    },
    {
      level: "Intermediate (MPC)",
      institution: "Narayana Junior College, Vijayawada",
      period: "2021 - 2023",
      status: "Completed",
    },
    {
      level: "School (7-10)",
      institution: "Sri Chaitanya School, Narsapur",
      period: "2016 - 2020",
      status: "Completed",
    },
    {
      level: "School (1-6)",
      institution: "J.Sikile CBSE School, Narsapur",
      period: "2011 - 2016",
      status: "Completed",
    },
  ]

  const achievements = [
    "Second place in Ossome Hacks 2.0 – a 36-hour hackathon",
    "Third place in the JavaSprint Hackathon",
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional experience, academic journey, and achievements that showcase my technical expertise.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Professional Experience</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <Card key={index} className="h-full border-0 bg-card/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 text-primary">{exp.title}</CardTitle>
                      <p className="text-foreground font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-primary">
                      <Award className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <Badge
                          key={achIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-1">{edu.level}</h4>
                      <p className="text-foreground font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-primary">Achievements</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10"
                >
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
