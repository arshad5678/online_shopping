import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
    image: string;
}

export interface IOrder extends Document {
    userId: string;
    items: IOrderItem[];
    totalAmount: number;
    shippingDetails: {
        name: string;
        phone: string;
        address: string;
    };
    paymentMethod: 'COD' | 'UPI';
    upiId?: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: Date;
}

const OrderItemSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true }
});

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    shippingDetails: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'UPI'],
        required: true
    },
    upiId: { type: String },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

export const Order = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
