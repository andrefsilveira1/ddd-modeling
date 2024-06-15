import OrderItem from "../entity/items"
import Order from "../entity/order";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
    it("Should get total of all orders", () => {
        const item = new OrderItem("1", "item 1", 100);
        const item2 = new OrderItem("2", "item 2", 100);
        
        const order = new Order("1", "1", [item], 200, "1", 2);
        const order2 = new Order("2", "2", [item2], 200, "1", 2);
        
        const total = OrderService.total([order,order2]);
    });
})