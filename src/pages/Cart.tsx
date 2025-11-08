import { Header } from '@/components/Header';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleCheckout = () => {
    toast.info('Checkout feature coming soon!');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mb-6" />
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Start adding some beautiful plants to your collection!</p>
            <Link to="/products">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Total Items:</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                >
                  Checkout
                </Button>
                
                <Link to="/products">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    size="lg"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
