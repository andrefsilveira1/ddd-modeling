import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import OrderItem from "./domain/entity/items";
import Order from "./domain/entity/order";

let customer = new Customer("123", "André");
const address = new Address("Rua um", 2, "1456-78", "Natal");

customer.address = address;
customer.activate();


const item1 = new OrderItem("1", "Item 1", 150);
const item2 = new OrderItem("2", "Item 2", 980);
const items = [item1, item2];
const order = new Order("1", "12345", items)