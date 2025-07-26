import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Target, TrendingUp, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const LearningStages = () => {
  const stages = [
    {
      title: "School Students",
      description: "Explore your interests and discover potential career paths early in your academic journey.",
      icon: GraduationCap,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      features: [
        "Interest exploration assessments",
        "Subject-career connection mapping",
        "Early career awareness activities",
        "Study plan guidance"
      ],
      nextSteps: [
        "Take our career interest quiz",
        "Explore different academic paths",
        "Connect with career counselors",
        "Join relevant clubs and activities"
      ]
    },
    {
      title: "College Students",
      description: "Make informed decisions about your major and prepare for your future career while in college.",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-50",
      features: [
        "Major-career alignment analysis",
        "Internship opportunity matching",
        "Skills gap identification",
        "Network building guidance"
      ],
      nextSteps: [
        "Assess major-career fit",
        "Search for relevant internships",
        "Build professional network",
        "Develop in-demand skills"
      ]
    },
    {
      title: "Fresh Graduates",
      description: "Navigate the job market with confidence and launch your career on the right track.",
      icon: Target,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      features: [
        "Job market analysis",
        "Resume and portfolio optimization",
        "Interview preparation support",
        "Salary negotiation guidance"
      ],
      nextSteps: [
        "Optimize your resume",
        "Practice interview skills",
        "Research target companies",
        "Apply strategic job search"
      ]
    },
    {
      title: "Career Switchers",
      description: "Successfully transition to a new field that better aligns with your goals and interests.",
      icon: TrendingUp,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      features: [
        "Transferable skills analysis",
        "Career transition planning",
        "Reskilling recommendations",
        "Industry insights and trends"
      ],
      nextSteps: [
        "Identify transferable skills",
        "Create transition timeline",
        "Acquire new certifications",
        "Build industry connections"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learning Stages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored career guidance for every stage of your learning journey. 
              Find resources and support that match exactly where you are right now.
            </p>
          </div>

          {/* Stages Grid */}
          <div className="space-y-12">
            {stages.map((stage, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-hover transition-smooth overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg ${stage.bgColor}`}>
                          <stage.icon className={`h-8 w-8 ${stage.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{stage.title}</CardTitle>
                          <CardDescription className="text-base mt-2">
                            {stage.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          What We Offer:
                        </h4>
                        <ul className="space-y-2">
                          {stage.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="hero" className="w-full lg:w-auto">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>

                  {/* Next Steps Side */}
                  <div className="bg-muted/20 p-8 flex flex-col justify-center">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Your Next Steps:
                    </h4>
                    <ul className="space-y-3">
                      {stage.nextSteps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="gradient-card border-0 shadow-card max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Take our comprehensive career assessment to get personalized recommendations 
                  based on your current stage and goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/assessment">
                      Take Assessment Now
                      <Target className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Speak with Advisor
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearningStages;