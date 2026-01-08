import { useState } from 'react';
import Header from '@/components/Header';
import UploadZone from '@/components/UploadZone';
import AnalysisResults from '@/components/AnalysisResults';
import Features from '@/components/Features';

// Mock analysis results for demo
const mockResults = [
  {
    category: 'Contact Information',
    status: 'success' as const,
    description: 'Your contact details are complete and properly formatted.',
  },
  {
    category: 'Keywords & Skills',
    status: 'warning' as const,
    description: 'Some industry keywords are missing from your resume.',
    tips: [
      'Add more technical skills relevant to your target role',
      'Include certifications and tools you\'re proficient in',
      'Use keywords from job descriptions you\'re targeting',
    ],
  },
  {
    category: 'Work Experience',
    status: 'success' as const,
    description: 'Your experience section is well-structured with quantifiable achievements.',
  },
  {
    category: 'Formatting & Layout',
    status: 'warning' as const,
    description: 'Minor formatting improvements could enhance readability.',
    tips: [
      'Use consistent bullet point styles throughout',
      'Ensure adequate white space between sections',
      'Keep your resume to 1-2 pages maximum',
    ],
  },
  {
    category: 'Education',
    status: 'success' as const,
    description: 'Education section is properly formatted with relevant details.',
  },
  {
    category: 'ATS Compatibility',
    status: 'error' as const,
    description: 'Some elements may not parse correctly in ATS systems.',
    tips: [
      'Avoid using tables, graphics, or complex formatting',
      'Use standard section headers (Experience, Education, Skills)',
      'Save your resume as a .docx or simple PDF format',
    ],
  },
];

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Generate a random score between 55 and 95 for demo
    const randomScore = Math.floor(Math.random() * 40) + 55;
    setScore(randomScore);
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          {!showResults ? (
            <>
              <div className="max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                  Get Your Resume{' '}
                  <span className="text-gradient">ATS-Ready</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                  Upload your resume and get instant, AI-powered feedback to help you 
                  land more interviews.
                </p>
              </div>
              
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <UploadZone onFileSelect={handleFileSelect} isAnalyzing={isAnalyzing} />
              </div>
            </>
          ) : (
            <AnalysisResults 
              score={score} 
              results={mockResults} 
              onReset={handleReset} 
            />
          )}
        </div>
      </section>

      {/* Features Section - Only show when not showing results */}
      {!showResults && <Features />}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 ResumeCheck. Built to help you succeed.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
