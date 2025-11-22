import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Sparkles, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      handleFileUpload();
    } else {
      toast({
        title: "Format invalide",
        description: "Veuillez déposer un fichier PDF",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = () => {
    toast({
      title: "CV téléchargé !",
      description: "Analyse en cours...",
    });

    setTimeout(() => {
      navigate("/analysis");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[var(--shadow-primary)]">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Career<span className="text-primary">Boost</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Optimisez votre CV et préparez vos entretiens avec l'intelligence artificielle
          </p>
        </header>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <Card
            className={`p-12 transition-all duration-300 cursor-pointer shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-primary)] ${isDragging ? "border-primary border-2 bg-primary/5 scale-105" : ""
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <div className="text-center">
              <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-all ${isDragging
                  ? "bg-primary text-primary-foreground scale-110"
                  : "bg-muted text-muted-foreground"
                }`}>
                {isDragging ? (
                  <FileText className="w-10 h-10" />
                ) : (
                  <Upload className="w-10 h-10" />
                )}
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">
                Déposez votre CV ici
              </h2>
              <p className="text-muted-foreground mb-6">
                ou cliquez pour sélectionner un fichier PDF
              </p>

              <Button size="lg" className="gap-2">
                <Upload className="w-5 h-5" />
                Analyse mon CV gratuitement
              </Button>

              <input
                id="file-input"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleFileUpload();
                  }
                }}
              />
            </div>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card shadow-[var(--shadow-card)] border">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">
              Déjà 10 000 CVs optimisés
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">
              Analyse intelligente
            </h3>
            <p className="text-sm text-muted-foreground">
              Notre IA analyse votre CV et identifie les points d'amélioration en temps réel
            </p>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-bold text-foreground mb-2">
              Plan d'action personnalisé
            </h3>
            <p className="text-sm text-muted-foreground">
              Recevez des recommandations concrètes pour optimiser chaque section
            </p>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-bold text-foreground mb-2">
              Entraînement entretien
            </h3>
            <p className="text-sm text-muted-foreground">
              Préparez-vous avec des questions d'entretien et des feedbacks instantanés
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
