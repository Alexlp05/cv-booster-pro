import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export const FeedbackPanel = () => {
  const feedback = [
    { 
      type: "warning", 
      icon: AlertCircle,
      text: "Tu as dit 'euh' 12 fois", 
      tip: "Prenez une pause au lieu d'utiliser des mots de remplissage" 
    },
    { 
      type: "warning", 
      icon: TrendingUp,
      text: "Ton débit est un peu rapide", 
      tip: "Ralentissez légèrement pour plus de clarté" 
    },
    { 
      type: "success", 
      icon: CheckCircle2,
      text: "Bonne structure de réponse", 
      tip: "La méthode STAR est bien appliquée" 
    },
  ];

  return (
    <Card className="p-6 shadow-[var(--shadow-elevated)]">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Feedback de votre réponse
        </h2>
        <p className="text-muted-foreground">
          Analyse automatique de votre performance
        </p>
      </div>

      <div className="space-y-4">
        {feedback.map((item, index) => {
          const Icon = item.icon;
          const isWarning = item.type === "warning";
          
          return (
            <div 
              key={index}
              className={`p-4 rounded-lg border-2 transition-all animate-in fade-in slide-in-from-right-4 duration-300 ${
                isWarning
                  ? "border-warning/20 bg-warning/5"
                  : "border-success/20 bg-success/5"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className={`shrink-0 mt-0.5 ${isWarning ? "text-warning" : "text-success"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground mb-1">
                    {item.text}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.tip}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Score global</span>
          <span className="text-sm font-bold text-warning">7.5/10</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-warning to-success transition-all duration-500"
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </Card>
  );
};
