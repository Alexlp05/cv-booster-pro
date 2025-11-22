import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export const CVPreview = () => {
  const highlights = [
    { type: "critical", top: "15%", left: "10%", width: "80%", text: "Titre de profil manquant" },
    { type: "good", top: "35%", left: "10%", width: "80%", text: "Bonne structure des expériences" },
    { type: "critical", top: "50%", left: "10%", width: "45%", text: "Manque de quantification" },
    { type: "good", top: "75%", left: "10%", width: "35%", text: "Compétences bien présentées" },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] overflow-hidden">
      <div className="p-6 border-b bg-muted/30">
        <h2 className="text-xl font-bold text-foreground mb-1">
          Aperçu de votre CV
        </h2>
        <p className="text-sm text-muted-foreground">
          Zones surlignées selon leur impact
        </p>
      </div>
      
      <div className="relative bg-card aspect-[1/1.4] overflow-y-auto">
        {/* CV mockup */}
        <div className="absolute inset-0 p-8 text-xs">
          <div className="space-y-6">
            {/* Header placeholder */}
            <div className="text-center py-4 border-b">
              <div className="h-4 bg-muted rounded w-48 mx-auto mb-2"></div>
              <div className="h-3 bg-muted rounded w-64 mx-auto"></div>
            </div>

            {/* Experience section */}
            <div>
              <div className="h-4 bg-muted rounded w-32 mb-3"></div>
              <div className="space-y-4">
                <div>
                  <div className="h-3 bg-muted rounded w-full mb-1"></div>
                  <div className="h-3 bg-muted rounded w-5/6 mb-1"></div>
                  <div className="h-3 bg-muted rounded w-4/6"></div>
                </div>
                <div>
                  <div className="h-3 bg-muted rounded w-full mb-1"></div>
                  <div className="h-3 bg-muted rounded w-5/6 mb-1"></div>
                  <div className="h-3 bg-muted rounded w-3/6"></div>
                </div>
              </div>
            </div>

            {/* Skills section */}
            <div>
              <div className="h-4 bg-muted rounded w-32 mb-3"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-muted rounded w-20"></div>
                <div className="h-6 bg-muted rounded w-24"></div>
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights overlay */}
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className={`absolute rounded border-2 transition-all duration-300 hover:scale-105 cursor-pointer group ${
              highlight.type === "critical"
                ? "border-critical bg-critical/10"
                : "border-success bg-success/10"
            }`}
            style={{
              top: highlight.top,
              left: highlight.left,
              width: highlight.width,
              height: "8%",
            }}
          >
            <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-card shadow-lg rounded-lg px-3 py-2 text-sm whitespace-nowrap flex items-center gap-2 border">
                {highlight.type === "critical" ? (
                  <AlertCircle className="w-4 h-4 text-critical" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                )}
                <span className="text-foreground font-medium">{highlight.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-muted/30 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-critical bg-critical/10"></div>
          <span className="text-muted-foreground">Critique</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-success bg-success/10"></div>
          <span className="text-muted-foreground">Bien</span>
        </div>
      </div>
    </Card>
  );
};
