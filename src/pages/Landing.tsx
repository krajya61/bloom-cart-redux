import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-plants.jpg';
import { Leaf, ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
        
        <div className="relative z-10 container text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="h-12 w-12 text-primary" />
            <h1 className="text-6xl md:text-7xl font-bold text-foreground">
              Green Haven
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-foreground/90 leading-relaxed">
            Transform your space with our curated collection of premium houseplants. 
            From beginner-friendly varieties to exotic tropicals, we bring nature's beauty 
            directly to your doorstep. Each plant is carefully selected and nurtured to ensure 
            it thrives in your home.
          </p>
          
          <Link to="/products">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
