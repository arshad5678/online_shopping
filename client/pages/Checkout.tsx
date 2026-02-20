import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function Checkout() {
    const navigate = useNavigate();
    const { cart, clearCart, getTotal } = useCart();
    const { user } = useAuth();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
    });
    const [paymentMethod, setPaymentMethod] = useState<"COD" | "UPI">("COD");
    const [upiId, setUpiId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const total = getTotal();
    const tax = total * 0.1;
    const grandTotal = total + tax;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Full Name is required";
        if (!formData.phone.trim()) return "Phone Number is required";
        if (!formData.address.trim()) return "Address is required";
        if (paymentMethod === "UPI") {
            if (!upiId.trim()) return "UPI ID is required";
            if (!/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(upiId)) {
                return "Invalid UPI ID format";
            }
        }
        return null;
    };

    const handlePlaceOrder = async () => {
        const error = validateForm();
        if (error) {
            toast({
                title: "Validation Error",
                description: error,
                variant: "destructive",
            });
            return;
        }

        if (!user) {
            toast({
                title: "Authentication Error",
                description: "You must be logged in to place an order.",
                variant: "destructive",
            });
            navigate("/shopping-login");
            return;
        }

        setIsSubmitting(true);

        try {
            const orderData = {
                userId: user.id,
                items: cart,
                totalAmount: grandTotal,
                shippingDetails: formData,
                paymentMethod,
                upiId: paymentMethod === "UPI" ? upiId : undefined,
            };

            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to place order");
            }

            await response.json();

            clearCart();
            toast({
                title: "Order placed successfully!",
                description: "Thank you for your purchase.",
            });
            navigate("/orders");
        } catch (error: any) {
            console.error("Checkout error:", error);
            toast({
                title: "Checkout failed",
                description: error.message || "There was a problem placing your order.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Shipping & Payment Form */}
                    <div className="space-y-8">
                        {/* Shipping Details */}
                        <div className="bg-card border rounded-lg p-6 space-y-4">
                            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    placeholder="Enter your delivery address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-card border rounded-lg p-6 space-y-4">
                            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                            <RadioGroup
                                value={paymentMethod}
                                onValueChange={(value) => setPaymentMethod(value as "COD" | "UPI")}
                            >
                                <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-muted/50 transition-colors">
                                    <RadioGroupItem value="COD" id="cod" />
                                    <Label htmlFor="cod" className="cursor-pointer flex-grow">Cash on Delivery (COD)</Label>
                                </div>

                                <div className="border p-3 rounded-md space-y-3">
                                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-muted/50 transition-colors">
                                        <RadioGroupItem value="UPI" id="upi" />
                                        <Label htmlFor="upi" className="cursor-pointer flex-grow">UPI</Label>
                                    </div>

                                    {paymentMethod === "UPI" && (
                                        <div className="ml-6 mt-2">
                                            <Input
                                                placeholder="Enter UPI ID (e.g., user@upi)"
                                                value={upiId}
                                                onChange={(e) => setUpiId(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </RadioGroup>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-card border rounded-lg p-6 sticky top-24">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-muted rounded overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-medium truncate max-w-[150px]">{item.name}</p>
                                                <p className="text-muted-foreground">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span>
                                            ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 border-t pt-4">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Tax (10%)</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold border-t pt-4 mt-2">
                                    <span>Total</span>
                                    <span>${grandTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                className="w-full mt-8 h-12 text-lg"
                                onClick={handlePlaceOrder}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    `Place Order - $${grandTotal.toFixed(2)}`
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
