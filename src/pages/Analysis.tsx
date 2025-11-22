import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles } from "lucide-react";
import { ScoreGauge } from "@/components/ScoreGauge";
import { CVPreview } from "@/components/CVPreview";

const Analysis = () => {
  const navigate = useNavigate();
  
  const actionItems = [
    { id: 1, text: "Ajouter un titre de profil", checked: false },
    { id: 2, text: "Quantifier les expériences (ex: +20% ventes)", checked: false },
    { id: 3, text: "Corriger les fautes d'orthographe", checked: true },
    { id: 4, text: "Ajouter des mots-clés du secteur", checked: false },
    { id: 5, text: "Restructurer les compétences", checked: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 text-center animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Analyse de votre CV
          </h1>
          <p className="text-muted-foreground">
            Voici les points d'amélioration détectés pour optimiser votre profil
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Score Section */}
          <div className="lg:col-span-3 animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
            <Card className="p-8 shadow-[var(--shadow-elevated)]">
              <ScoreGauge score={58} />
            </Card>
          </div>

          {/* CV Preview */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
            <CVPreview />
          </div>

          {/* Action Plan Sidebar */}
          <div className="lg:col-span-1 animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
            <Card className="p-6 shadow-[var(--shadow-card)] sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-1">
                Plan d'action
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Suivez ces recommandations
              </p>
              
              <div className="space-y-4 mb-6">
                {actionItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors animate-in fade-in slide-in-from-right-2 duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Checkbox 
                      id={`action-${item.id}`}
                      defaultChecked={item.checked}
                      className="mt-0.5"
                    />
                    <label
                      htmlFor={`action-${item.id}`}
                      className="text-sm text-foreground cursor-pointer leading-relaxed"
                    >
                      {item.text}
                    </label>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground mb-3">
                  Complétez ces actions pour améliorer votre score
                </p>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-warning to-success transition-all duration-500"
                    style={{ width: '20%' }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
          <Button
            size="lg"
            onClick={() => navigate("/interview")}
            className="gap-2 shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <Sparkles className="w-5 h-5" />
            Générer la lettre de motivation pour ce profil
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Analysis;
