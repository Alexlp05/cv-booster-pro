import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, Video, Square, Clock } from "lucide-react";
import { CameraFeed } from "@/components/CameraFeed";
import { FeedbackPanel } from "@/components/FeedbackPanel";

const Interview = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const question = "Parlez-moi d'une situation où vous avez géré un conflit dans votre équipe.";

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setShowFeedback(false);
      
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setIsRecording(false);
            setShowFeedback(true);
            return 120;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsRecording(false);
      setShowFeedback(true);
      setTimeLeft(120);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* Question Card */}
        <Card className="p-6 mb-8 shadow-[var(--shadow-elevated)] animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Question {isRecording && "en cours"}
              </h2>
              <p className="text-foreground leading-relaxed">
                {question}
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(question);
                utterance.lang = 'fr-FR';
                window.speechSynthesis.speak(utterance);
              }}
            >
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Camera Feed */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
            <CameraFeed isRecording={isRecording} />
          </div>

          {/* Controls & Timer */}
          <div className="lg:col-span-1 space-y-4 animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center gap-2 text-3xl font-bold text-foreground mb-2">
                  <Clock className="w-6 h-6 text-muted-foreground" />
                  {formatTime(timeLeft)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isRecording ? "Temps restant" : "Durée maximale"}
                </p>
              </div>

              <Button
                size="lg"
                onClick={handleRecord}
                className={`w-full gap-2 transition-all duration-300 ${
                  isRecording 
                    ? "bg-critical hover:bg-critical/90" 
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isRecording ? (
                  <>
                    <Square className="w-5 h-5" />
                    Arrêter l'enregistrement
                  </>
                ) : (
                  <>
                    <Video className="w-5 h-5" />
                    Enregistrer ma réponse
                  </>
                )}
              </Button>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-sm text-foreground mb-3">
                  Conseils rapides
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Utilisez la méthode STAR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Soyez concis et précis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Maintenez le contact visuel</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Feedback Panel */}
        {showFeedback && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <FeedbackPanel />
          </div>
        )}
      </main>
    </div>
  );
};

export default Interview;