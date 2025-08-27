"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/EswarTelagamsetti",
      url: "https://github.com/EswarTelagamsetti",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/satya-sai-eswar-telagamsetti",
      url: "https://www.linkedin.com/in/satya-sai-eswar-telagamsetti-7aa40b2bb/",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "eswartelagamsetti1234@gmail.com",
      url: "mailto:eswartelagamsetti1234@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Chennai, India",
      url: null,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Contact Information</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's connect! Feel free to reach out through any of these platforms.
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full text-primary flex-shrink-0">{info.icon}</div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground">{info.label}</p>
                    {info.url ? (
                      <a
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
