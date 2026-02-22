import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, User, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

/**
 * Dashboard Page
 * User dashboard with order history and account settings
 */
export default function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Sample order data
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: "$599.00",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      total: "$299.00",
      status: "Processing",
    },
    {
      id: "ORD-003",
      date: "2024-01-25",
      total: "$879.00",
      status: "Shipped",
    },
  ];

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">
            My Dashboard
          </h1>
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl mb-8">
              Please log in to view your dashboard.
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
      {/* Dashboard Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">
          My Dashboard
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Welcome back! Here's your account overview.
        </p>

        {/* Dashboard Grid - Only Orders Card Remains */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
          {/* Orders Card */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ShoppingBag className="w-8 h-8 text-accent mr-3" />
              <h2 className="text-2xl font-semibold">Orders</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Track your recent orders and purchase history.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-none"
              onClick={() => navigate("/orders")}
            >
              View Orders
            </Button>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 font-semibold">Total</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr 
                    key={order.id} 
                    className="border-b hover:bg-muted/50 cursor-pointer"
                    onClick={() => navigate("/orders")}
                  >
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">{order.total}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => navigate("/home")}
            className="rounded-none"
          >
            ← Back to Home
          </Button>
          <Button
            onClick={() => navigate("/products")}
            className="rounded-none"
          >
            Continue Shopping →
          </Button>
        </div>
      </div>
    </div>
  );
}
