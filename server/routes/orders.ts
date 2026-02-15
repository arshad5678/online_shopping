import express from "express";
import { Order } from "../models/Order";

const router = express.Router();

// Create new order
router.post("/", async (req, res) => {
    try {
        const { userId, items, totalAmount } = req.body;

        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            status: 'pending' // Default status
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Error creating order", error });
    }
});

// Get orders by userId
router.get("/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

export { router as orderRoutes };
