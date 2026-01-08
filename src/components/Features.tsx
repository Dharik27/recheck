import { Zap, Shield, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Get comprehensive feedback on your resume in seconds, not hours.',
  },
  {
    icon: Target,
    title: 'ATS Optimization',
    description: 'Ensure your resume passes Applicant Tracking Systems with flying colors.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is processed securely and never stored on our servers.',
  },
  {
    icon: TrendingUp,
    title: 'Actionable Tips',
    description: 'Receive specific, actionable suggestions to improve your resume.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Use ResumeCheck?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered resume analyzer helps you stand out from the competition 
            and land more interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="result-card text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
