import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-foreground">Green Haven</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/products" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Shop
          </Link>
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {totalItems}
              </Badge>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
