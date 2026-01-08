import ScoreRing from './ScoreRing';
import ResultCard from './ResultCard';
import { Button } from '@/components/ui/button';
import { RotateCcw, Download } from 'lucide-react';

interface AnalysisResult {
  category: string;
  status: 'success' | 'warning' | 'error';
  description: string;
  tips?: string[];
}

interface AnalysisResultsProps {
  score: number;
  results: AnalysisResult[];
  onReset: () => void;
}

const AnalysisResults = ({ score, results, onReset }: AnalysisResultsProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Score Section */}
      <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h2 className="text-2xl font-bold text-foreground mb-8">Your Resume Score</h2>
        <div className="flex justify-center mb-6">
          <ScoreRing score={score} />
        </div>
        <p className="text-muted-foreground max-w-md mx-auto">
          {score >= 80 
            ? "Great job! Your resume is well-optimized and ready to impress recruiters."
            : score >= 60
            ? "Your resume is good, but there's room for improvement. Check the suggestions below."
            : "Your resume needs some work. Follow our tips to make it stand out."}
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        {results.map((result, index) => (
          <ResultCard
            key={result.category}
            title={result.category}
            status={result.status}
            description={result.description}
            tips={result.tips}
            delay={200 + index * 100}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
        <Button variant="outline" size="lg" onClick={onReset}>
          <RotateCcw className="w-4 h-4" />
          Analyze Another Resume
        </Button>
        <Button variant="accent" size="lg">
          <Download className="w-4 h-4" />
          Download Report
        </Button>
      </div>
    </div>
  );
};

export default AnalysisResults;
