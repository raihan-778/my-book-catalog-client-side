import { Button } from '../components/ui/button';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <HiOutlineShoppingCart size="25" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <h1>Total: 0</h1>
        </SheetHeader>
        <button>Extra button</button>
      </SheetContent>
    </Sheet>
  );
}
