import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/store/cartSlice';
import { CartItem as CartItemType } from '@/store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
          <img 
            src={item.image} 
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => dispatch(decrementQuantity(item.id))}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              <Button
                variant="destructive"
                size="icon"
                className="h-8 w-8"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
