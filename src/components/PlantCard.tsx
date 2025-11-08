import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Plant } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import { toast } from 'sonner';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard = ({ plant }: PlantCardProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
    toast.success(`${plant.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={plant.image} 
            alt={plant.name}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{plant.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{plant.category}</p>
          <p className="text-2xl font-bold text-primary">${plant.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={isInCart}
          className="w-full"
          variant={isInCart ? "secondary" : "default"}
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};
