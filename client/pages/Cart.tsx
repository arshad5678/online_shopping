import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Trash2, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

/**
 * Shopping Cart Page
 * Displays all items in the cart with ability to remove items and view total
 */
export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = getTotal();
  const tax = total * 0.1;
  const grandTotal = total + tax; // Shipping is free

  const handleCheckout = () => {
    if (!isAuthenticated || !user) {
      toast({
        title: "Please login",
        description: "You need to be logged in to proceed to checkout.",
        variant: "destructive",
      });
      navigate("/shopping-login");
      return;
    }
    navigate("/checkout");
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">
            Shopping Cart
          </h1>
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl mb-8">
              Please log in to view your cart.
            </p>
            <Button
              onClick={() => navigate("/shopping-login")}
              className="rounded-none"
            >
              Login to Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Cart Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">
          Shopping Cart
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
        </p>

        {cart.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl mb-8">
              Your cart is empty. Start shopping!
            </p>
            <Button
              onClick={() => navigate("/products")}
              className="rounded-none"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          // Cart with Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 border-b pb-6 hover:bg-muted/50 p-4 rounded-lg transition-colors"
                  >
                    {/* Product Image - Clickable */}
                    <div
                      className="w-24 h-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/products/${item.id}`)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3
                        className="text-lg font-semibold mb-2 cursor-pointer hover:text-rose-500 transition-colors"
                        onClick={() => navigate(`/products/${item.id}`)}
                      >
                        {item.name}
                      </h3>
                      <p className="text-accent text-lg font-medium mb-4">
                        {item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 hover:bg-muted transition-colors"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 hover:bg-muted transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-destructive hover:text-destructive/80 transition-colors flex items-center gap-2"
                          aria-label="Remove from cart"
                        >
                          <Trash2 size={20} />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Item Subtotal */}
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-2">
                        Subtotal
                      </p>
                      <p className="text-xl font-semibold">
                        $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Button */}
              <Button
                variant="outline"
                onClick={() => navigate("/products")}
                className="mt-8 rounded-none"
              >
                ← Continue Shopping
              </Button>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                {/* Subtotal */}
                <div className="flex justify-between mb-4 pb-4 border-b">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between mb-4 pb-4 border-b">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>

                {/* Tax */}
                <div className="flex justify-between mb-6 pb-6 border-b">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                {/* Total */}
                <div className="flex justify-between mb-6 text-xl font-bold">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <Button
                  className="w-full rounded-none mb-3 h-12"
                  onClick={handleCheckout}
                  disabled={isSubmitting}
                >
                  Proceed to Checkout
                </Button>

                {/* Clear Cart Button */}
                <Button
                  variant="outline"
                  className="w-full rounded-none"
                  onClick={clearCart}
                  disabled={isSubmitting}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
