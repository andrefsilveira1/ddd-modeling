import Customer from "../domain/entity/customer";
import OrderItem from "../domain/entity/items"
import Order from "../domain/entity/order";
import OrderService from "./order.service";

describe("Order service unit tests", () => {

    it("should place an order", () => {
        const customer = new Customer("1", "Customer 1");
        const item = new OrderItem("1", "Item1", 10);

        const order = OrderService.placeOrder(customer, [item]);

        expect(customer.reward).toBe(5);
        expect(order.total).toBe(5);
    })

    it("Should get total of all orders", () => {
        const item = new OrderItem("1", "item 1", 100);
        const item2 = new OrderItem("2", "item 2", 100);
        
        const order = new Order("1", "1", [item], 200, "1", 2);
        const order2 = new Order("2", "2", [item2], 200, "1", 2);
        
        const total = OrderService.total([order,order2]);
    });
})