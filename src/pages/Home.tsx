import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Target, TrendingUp, ArrowRight, Brain, CheckCircle, Star } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const Home = () => {
  const targetAudience = [
    {
      title: "School Students",
      description: "Discover career paths that align with your interests and academic strengths",
      icon: GraduationCap,
      color: "text-blue-500"
    },
    {
      title: "College Students", 
      description: "Make informed decisions about your major and career trajectory",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Graduates",
      description: "Navigate the job market with confidence and clear direction",
      icon: Target,
      color: "text-purple-500"
    },
    {
      title: "Career Switchers",
      description: "Transition smoothly to a new field that matches your goals",
      icon: TrendingUp,
      color: "text-orange-500"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Take AI-powered Quiz",
      description: "Answer questions about your interests, skills, and preferences"
    },
    {
      step: "02", 
      title: "Get Tailored Recommendations",
      description: "Receive personalized career suggestions based on your unique profile"
    },
    {
      step: "03",
      title: "Explore Learning Paths",
      description: "Discover the skills and education needed for your chosen career"
    }
  ];

  const careerPaths = [
    "Software Engineer",
    "Data Analyst", 
    "Digital Marketing Specialist",
    "UX/UI Designer",
    "Product Manager",
    "Cybersecurity Specialist"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "CareerNav helped me discover my passion for coding. The assessment was incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "Data Analyst",
      content: "I was unsure about my career direction after graduation. CareerNav gave me the clarity I needed.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      content: "The learning path recommendations were spot-on. I'm now working at my dream company!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Navigate Your Learning Journey to the{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Right Career</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Personalized guidance for students, graduates, and professionals. 
            Discover your ideal career path with AI-powered assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/assessment">
                Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who is CareerNav For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who is CareerNav For?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're just starting out or looking to make a change, we provide guidance for every stage of your career journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-hover transition-smooth group">
                <CardHeader className="text-center">
                  <audience.icon className={`h-12 w-12 mx-auto mb-4 ${audience.color} group-hover:scale-110 transition-bounce`} />
                  <CardTitle className="text-xl font-semibold">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{audience.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple three-step process helps you discover your ideal career path
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-bounce shadow-card">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-1/2 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Career Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Career Paths</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of the most in-demand careers that our users discover
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-secondary hover:bg-primary hover:text-primary-foreground p-4 rounded-lg text-center font-medium transition-smooth cursor-pointer shadow-card hover:shadow-hover">
                {career}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/assessment">Discover Your Path</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who found their career direction with CareerNav
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;