import { CheckCircle2, AlertCircle, XCircle, LucideIcon } from 'lucide-react';

interface ResultCardProps {
  title: string;
  status: 'success' | 'warning' | 'error';
  description: string;
  tips?: string[];
  delay?: number;
}

const statusConfig: Record<string, { icon: LucideIcon; colorClass: string }> = {
  success: { icon: CheckCircle2, colorClass: 'text-success' },
  warning: { icon: AlertCircle, colorClass: 'text-warning' },
  error: { icon: XCircle, colorClass: 'text-destructive' },
};

const ResultCard = ({ title, status, description, tips, delay = 0 }: ResultCardProps) => {
  const { icon: Icon, colorClass } = statusConfig[status];

  return (
    <div 
      className="result-card opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start gap-4">
        <div className={`mt-0.5 ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          <p className="text-muted-foreground mt-1">{description}</p>
          
          {tips && tips.length > 0 && (
            <ul className="mt-4 space-y-2">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
