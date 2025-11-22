import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Eye, Trash2, Clock } from "lucide-react";

const History = () => {
  const navigate = useNavigate();

  const cvHistory = [
    {
      id: 1,
      name: "CV_Marketing_2024.pdf",
      date: "2024-01-15",
      score: 58,
      status: "analyzed",
    },
    {
      id: 2,
      name: "CV_Dev_Senior.pdf",
      date: "2024-01-10",
      score: 72,
      status: "analyzed",
    },
    {
      id: 3,
      name: "CV_Project_Manager.pdf",
      date: "2024-01-05",
      score: 45,
      status: "analyzed",
    },
    {
      id: 4,
      name: "CV_Designer_UX.pdf",
      date: "2023-12-28",
      score: 81,
      status: "analyzed",
    },
  ];

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    if (score >= 40) return "outline";
    return "destructive";
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-primary";
    if (score >= 40) return "text-warning";
    return "text-critical";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Historique des analyses
          </h1>
          <p className="text-muted-foreground">
            Retrouvez tous vos CVs analysés et leurs résultats
          </p>
        </div>

        <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          {cvHistory.map((cv, index) => (
            <Card 
              key={cv.id} 
              className="p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 truncate">
                      {cv.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(cv.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <Badge variant={getScoreBadgeVariant(cv.score)}>
                        {cv.status === "analyzed" ? "Analysé" : "En cours"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">
                      Score
                    </div>
                    <div className={`text-2xl font-bold ${getScoreColor(cv.score)}`}>
                      {cv.score}/100
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => navigate("/analysis")}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-critical hover:text-critical hover:bg-critical/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {cvHistory.length === 0 && (
          <Card className="p-12 text-center">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Aucun CV analysé
            </h3>
            <p className="text-muted-foreground mb-6">
              Commencez par analyser votre premier CV
            </p>
            <Button onClick={() => navigate("/")}>
              Analyser un CV
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default History;
