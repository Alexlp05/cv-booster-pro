import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, BookOpen, Briefcase, Users, Lightbulb } from "lucide-react";

const Questions = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const questionCategories = [
    { id: "all", label: "Toutes", icon: BookOpen },
    { id: "behavioral", label: "Comportementales", icon: Users },
    { id: "technical", label: "Techniques", icon: Briefcase },
    { id: "situational", label: "Situationnelles", icon: Lightbulb },
  ];

  const questions = [
    {
      id: 1,
      category: "behavioral",
      difficulty: "Moyen",
      question: "Parlez-moi d'une situation où vous avez géré un conflit dans votre équipe",
      tips: ["Utilisez la méthode STAR", "Focalisez sur votre rôle", "Montrez l'impact positif"],
      practiced: false,
    },
    {
      id: 2,
      category: "behavioral",
      difficulty: "Facile",
      question: "Quelles sont vos plus grandes forces et faiblesses ?",
      tips: ["Soyez honnête et authentique", "Montrez votre auto-conscience", "Liez au poste visé"],
      practiced: true,
    },
    {
      id: 3,
      category: "technical",
      difficulty: "Difficile",
      question: "Comment optimiseriez-vous les performances d'une application web ?",
      tips: ["Citez des exemples concrets", "Montrez votre expertise", "Parlez de métriques"],
      practiced: false,
    },
    {
      id: 4,
      category: "situational",
      difficulty: "Moyen",
      question: "Que feriez-vous si un projet important prend du retard ?",
      tips: ["Montrez votre capacité d'adaptation", "Expliquez votre processus", "Parlez de communication"],
      practiced: false,
    },
    {
      id: 5,
      category: "behavioral",
      difficulty: "Moyen",
      question: "Décrivez une fois où vous avez dû apprendre quelque chose de nouveau rapidement",
      tips: ["Montrez votre agilité d'apprentissage", "Détaillez votre méthode", "Résultats mesurables"],
      practiced: true,
    },
    {
      id: 6,
      category: "technical",
      difficulty: "Facile",
      question: "Expliquez votre expérience avec les méthodologies agiles",
      tips: ["Donnez des exemples précis", "Mentionnez les outils utilisés", "Parlez des bénéfices"],
      practiced: false,
    },
  ];

  const filteredQuestions = selectedCategory === "all" 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "success";
      case "Moyen": return "warning";
      case "Difficile": return "critical";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bibliothèque de questions
          </h1>
          <p className="text-muted-foreground">
            Préparez-vous avec plus de 100 questions d'entretien
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 h-auto">
            {questionCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="flex flex-col gap-2 py-3"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{cat.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredQuestions.map((q, index) => (
            <Card 
              key={q.id}
              className="p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-2">
                  <Badge 
                    variant="outline"
                    className={`text-${getDifficultyColor(q.difficulty)}`}
                  >
                    {q.difficulty}
                  </Badge>
                  {q.practiced && (
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      Pratiqué
                    </Badge>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                {q.question}
              </h3>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Conseils clés :
                </h4>
                <ul className="space-y-1">
                  {q.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full gap-2"
                onClick={() => navigate("/interview")}
              >
                <Video className="w-4 h-4" />
                S'entraîner avec cette question
              </Button>
            </Card>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <Card className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Aucune question disponible
            </h3>
            <p className="text-muted-foreground">
              Essayez une autre catégorie
            </p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Questions;
