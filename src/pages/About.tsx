import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp, Lightbulb, Award } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/150/150",
      description: "Former career counselor with 15+ years in educational psychology"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "/api/placeholder/150/150", 
      description: "AI/ML expert specializing in personality and career assessment algorithms"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      image: "/api/placeholder/150/150",
      description: "Career development specialist with expertise in learning path design"
    },
    {
      name: "David Kim",
      role: "Head of Design",
      image: "/api/placeholder/150/150",
      description: "UX researcher focused on creating intuitive career exploration experiences"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We use advanced algorithms and data science to provide accurate, personalized career recommendations."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand that career decisions are deeply personal and approach each user's journey with care."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Career guidance should be available to everyone, regardless of background or circumstances."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to evolving our platform to meet the changing needs of the modern workforce."
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Users guided to their ideal careers" },
    { number: "95%", label: "User satisfaction rate" },
    { number: "500+", label: "Career paths in our database" },
    { number: "50+", label: "Industry partnerships" }
  ];

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About CareerNav
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to help everyone find their ideal career path through 
              personalized guidance, cutting-edge technology, and human expertise.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize career guidance by providing intelligent, personalized recommendations 
                  that help individuals at every stage of their journey discover fulfilling career paths 
                  aligned with their unique strengths, interests, and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where everyone has access to the guidance and resources they need to build 
                  meaningful careers that contribute to both personal fulfillment and societal progress.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="gradient-card border-0 shadow-card text-center group hover:shadow-hover transition-smooth">
                  <CardHeader>
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-bounce" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="gradient-card border-0 shadow-card text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                    <p className="text-muted-foreground text-sm">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="gradient-card border-0 shadow-card text-center group hover:shadow-hover transition-smooth">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story */}
          <Card className="gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                CareerNav was born from the recognition that too many talented individuals struggle 
                to find their ideal career path. Our founder, Dr. Sarah Johnson, spent over a decade 
                as a career counselor witnessing bright students and professionals feel lost in their 
                career decisions. She envisioned a platform that could combine the personal touch of 
                traditional career counseling with the power of modern technology and data science.
                <br /><br />
                Today, we're proud to have helped thousands of individuals discover careers that not 
                only match their skills and interests but also provide the fulfillment and growth 
                they seek. Our AI-powered assessment tools, combined with expert human insight, 
                create a unique experience that adapts to each user's individual journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;