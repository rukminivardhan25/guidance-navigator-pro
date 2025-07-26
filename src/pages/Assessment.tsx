import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Target } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: [
        { id: "collaborative", label: "Collaborative team environment" },
        { id: "independent", label: "Independent work with minimal supervision" },
        { id: "mixed", label: "Mix of both team and individual work" },
        { id: "leadership", label: "Leading and managing others" }
      ]
    },
    {
      id: 2,
      question: "Which activities do you find most engaging?",
      options: [
        { id: "problem-solving", label: "Solving complex problems" },
        { id: "creative", label: "Creative and artistic tasks" },
        { id: "helping", label: "Helping and supporting others" },
        { id: "analyzing", label: "Analyzing data and information" }
      ]
    },
    {
      id: 3,
      question: "What motivates you most in your work?",
      options: [
        { id: "impact", label: "Making a positive impact on society" },
        { id: "growth", label: "Personal and professional growth" },
        { id: "stability", label: "Job security and stability" },
        { id: "innovation", label: "Innovation and cutting-edge technology" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to communicate ideas?",
      options: [
        { id: "writing", label: "Through written documents and reports" },
        { id: "presenting", label: "Through presentations and public speaking" },
        { id: "visual", label: "Through visual designs and graphics" },
        { id: "discussion", label: "Through one-on-one discussions" }
      ]
    },
    {
      id: 5,
      question: "What type of challenges excite you most?",
      options: [
        { id: "technical", label: "Technical and engineering challenges" },
        { id: "strategic", label: "Strategic and business challenges" },
        { id: "interpersonal", label: "Interpersonal and relationship challenges" },
        { id: "creative-challenges", label: "Creative and design challenges" }
      ]
    },
    {
      id: 6,
      question: "Which work pace suits you best?",
      options: [
        { id: "fast-paced", label: "Fast-paced with tight deadlines" },
        { id: "steady", label: "Steady pace with consistent progress" },
        { id: "flexible", label: "Flexible pace based on project needs" },
        { id: "reflective", label: "Thoughtful pace allowing for deep thinking" }
      ]
    },
    {
      id: 7,
      question: "What type of learning do you prefer?",
      options: [
        { id: "hands-on", label: "Hands-on, practical learning" },
        { id: "theoretical", label: "Theoretical and conceptual learning" },
        { id: "collaborative-learning", label: "Learning through collaboration" },
        { id: "self-directed", label: "Self-directed research and study" }
      ]
    },
    {
      id: 8,
      question: "Which industry interests you most?",
      options: [
        { id: "technology", label: "Technology and Software" },
        { id: "healthcare", label: "Healthcare and Life Sciences" },
        { id: "finance", label: "Finance and Business" },
        { id: "education", label: "Education and Training" }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Process answers and navigate to recommendations
    console.log("Assessment answers:", answers);
    // In a real app, you would send this to your backend for processing
    navigate("/recommendations", { state: { assessmentAnswers: answers } });
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasCurrentAnswer = answers[currentQuestion];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4 gradient-hero">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Career Assessment</span>
            </div>
            <p className="text-muted-foreground">
              Answer these questions to discover your ideal career path
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="gradient-card border-0 shadow-hover mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary/50 transition-smooth cursor-pointer">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            {isLastQuestion ? (
              <Button
                variant="hero"
                onClick={handleSubmit}
                disabled={!hasCurrentAnswer}
                className="flex items-center space-x-2"
              >
                <span>Get My Recommendations</span>
                <Target className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="hero"
                onClick={handleNext}
                disabled={!hasCurrentAnswer}
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Question indicator dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentQuestion
                    ? "bg-primary"
                    : answers[index]
                    ? "bg-success"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Assessment;