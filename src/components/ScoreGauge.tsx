import { useEffect, useState } from "react";

interface ScoreGaugeProps {
  score: number;
}

export const ScoreGauge = ({ score }: ScoreGaugeProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "hsl(var(--score-excellent))";
    if (score >= 60) return "hsl(var(--score-good))";
    if (score >= 40) return "hsl(var(--score-average))";
    return "hsl(var(--score-poor))";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Bon";
    if (score >= 40) return "Moyen";
    return "À améliorer";
  };

  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-6">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="12"
          />
          {/* Animated score circle */}
          <circle
            cx="96"
            cy="96"
            r="80"
            fill="none"
            stroke={getScoreColor(score)}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 8px ${getScoreColor(score)})` }}
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-foreground transition-all duration-1000">
            {animatedScore}
          </div>
          <div className="text-lg text-muted-foreground">/100</div>
        </div>
      </div>

      <div className="text-center">
        <div 
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-2"
          style={{ 
            backgroundColor: getScoreColor(score),
            color: 'white'
          }}
        >
          {getScoreLabel(score)}
        </div>
        <p className="text-muted-foreground max-w-md">
          Votre CV présente de bonnes bases, mais quelques améliorations clés augmenteront significativement vos chances.
        </p>
      </div>
    </div>
  );
};
