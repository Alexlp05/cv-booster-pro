import { Card } from "@/components/ui/card";
import { Video, VideoOff } from "lucide-react";

interface CameraFeedProps {
  isRecording: boolean;
}

export const CameraFeed = ({ isRecording }: CameraFeedProps) => {
  return (
    <Card className="relative overflow-hidden shadow-[var(--shadow-elevated)]">
      <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-muted/80 flex items-center justify-center mx-auto mb-4">
            {isRecording ? (
              <Video className="w-8 h-8 text-critical animate-pulse" />
            ) : (
              <VideoOff className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <p className="text-muted-foreground font-medium">
            {isRecording ? "Enregistrement en cours..." : "Caméra miroir"}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {isRecording ? "Regardez la caméra" : "Préparez-vous pour votre réponse"}
          </p>
        </div>
      </div>

      {isRecording && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-critical/90 text-white px-3 py-1.5 rounded-full text-sm font-medium animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          REC
        </div>
      )}
    </Card>
  );
};
