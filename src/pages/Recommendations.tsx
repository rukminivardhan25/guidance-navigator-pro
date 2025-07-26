import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Clock, DollarSign, Users, BookOpen } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const Recommendations = () => {
  const location = useLocation();
  const assessmentAnswers = location.state?.assessmentAnswers || {};

  // Mock career recommendations based on assessment
  const recommendations = [
    {
      title: "Software Engineer",
      description: "Design, develop, and maintain software applications and systems. Work with cutting-edge technologies to solve complex problems.",
      match: 95,
      skills: ["Programming", "Problem Solving", "Logical Thinking", "Teamwork"],
      averageSalary: "$95,000",
      jobGrowth: "+22%",
      education: "Bachelor's in Computer Science",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Data Analyst",
      description: "Analyze complex data sets to help organizations make informed business decisions. Transform raw data into actionable insights.",
      match: 88,
      skills: ["Data Analysis", "Statistical Analysis", "SQL", "Visualization"],
      averageSalary: "$75,000",
      jobGrowth: "+25%",
      education: "Bachelor's in Statistics/Math",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "UX/UI Designer",
      description: "Create intuitive and visually appealing user interfaces. Research user needs and design solutions that enhance user experience.",
      match: 82,
      skills: ["Design Thinking", "Prototyping", "User Research", "Creativity"],
      averageSalary: "$80,000",
      jobGrowth: "+13%",
      education: "Bachelor's in Design/HCI",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Product Manager",
      description: "Lead product development from conception to launch. Coordinate between technical teams and business stakeholders.",
      match: 78,
      skills: ["Strategic Thinking", "Communication", "Leadership", "Analysis"],
      averageSalary: "$115,000",
      jobGrowth: "+19%",
      education: "Bachelor's in Business/Engineering",
      icon: BookOpen,
      color: "text-orange-500"
    }
  ];

  const userStrengths = [
    "Strong analytical and problem-solving abilities",
    "Excellent communication and collaboration skills",
    "Interest in technology and innovation",
    "Motivation for continuous learning and growth"
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Your Career Recommendations</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based on your assessment, we've identified career paths that align with your interests, skills, and goals.
            </p>
          </div>

          {/* User Strengths Summary */}
          <Card className="gradient-card border-0 shadow-card mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Your Key Strengths</span>
              </CardTitle>
              <CardDescription>
                Based on your assessment responses, here are your standout qualities:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Career Recommendations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Career Paths</h2>
            
            {recommendations.map((career, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <career.icon className={`h-8 w-8 ${career.color}`} />
                      <div>
                        <CardTitle className="text-xl">{career.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {career.match}% Match
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{career.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <div>
                        <p className="text-xs text-muted-foreground">Avg. Salary</p>
                        <p className="font-semibold">{career.averageSalary}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <div>
                        <p className="text-xs text-muted-foreground">Job Growth</p>
                        <p className="font-semibold">{career.jobGrowth}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Education</p>
                        <p className="font-semibold text-xs">{career.education}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-warning" />
                      <div>
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="font-semibold">2-4 years</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Skills Required:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="bg-secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="hero" className="flex-1">
                      View Learning Path
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Steps */}
          <Card className="gradient-card border-0 shadow-card mt-12">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                Ready to start your career journey? Here's what you can do next:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Explore Learning Paths</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover the skills and education needed for your chosen career
                  </p>
                  <Button variant="outline" size="sm">
                    View Paths
                  </Button>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Connect with Mentors</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get guidance from professionals in your field of interest
                  </p>
                  <Button variant="outline" size="sm">
                    Find Mentors
                  </Button>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Retake Assessment</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get updated recommendations as your interests evolve
                  </p>
                  <Button variant="outline" size="sm">
                    Retake Quiz
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Recommendations;