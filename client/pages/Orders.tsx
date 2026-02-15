import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface OrderItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
    image: string;
}

interface Order {
    _id: string;
    items: OrderItem[];
    totalAmount: number;
    status: string;
    createdAt: string;
}

export default function Orders() {
    const { user, isAuthenticated } = useAuth();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        if (isAuthenticated && user) {
            fetchOrders();
        } else {
            setLoading(false);
        }
    }, [isAuthenticated, user]);

    const fetchOrders = async () => {
        try {
            // Use the user.email as the userId for now, since that's what we have reliable access to 
            // and it's unique enough for this demo. Ideally we'd use user.id but the local storage 
            // user ID might not match what the backend expects if we were using a real auth system.
            // However, the implementation plan said to use userId. 
            // Let's use user.id (which is likely a string from localStorage).
            // Wait, in useAuth.ts: id: Date.now().toString() or "demo-user".
            // This is fine.
            const response = await fetch(`/api/orders/${user!.id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch orders");
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error("Error fetching orders:", error);
            toast({
                title: "Error",
                description: "Failed to load your orders. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card>
                    <CardContent className="pt-6 text-center">
                        <p className="text-muted-foreground">Please log in to view your orders.</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
            {orders.length === 0 ? (
                <Card>
                    <CardContent className="pt-6 text-center">
                        <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <Card key={order._id}>
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-lg">
                                        Order #{order._id.slice(-6).toUpperCase()}
                                    </CardTitle>
                                    <span className={`px-3 py-1 rounded-full text-sm capitalize ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                        order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString()}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-full">
                                    <div className="space-y-4">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-16 h-16 object-cover rounded"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <p className="font-medium">{item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                                <div className="mt-4 flex justify-between items-center pt-4 border-t">
                                    <span className="font-semibold">Total Amount</span>
                                    <span className="text-xl font-bold">${order.totalAmount.toFixed(2)}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
