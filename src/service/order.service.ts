import Customer from "../entity/customer";
import OrderItem from "../entity/items";
import Order from "../entity/order";

export default class OrderService {
    static total(orders: Order[]): number {
        return orders.reduce((acc, order) => acc + order.total(), 0);
    }

    static placeOrder(customer: Customer, items: OrderItem[]): Order {
        if(items.length === 0) {
            throw new Error("Order can't be empty");
        }

        const order = new Order("1", customer.id, items, 1, "1", 0);
        customer.addReward(order.total()/2);
        return  order
    }
}