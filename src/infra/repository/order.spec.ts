import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";
import CustomerRepository from "./customer";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import CustomerModel from "../db/sequelize/model/customer";
import OrderModel from "../db/sequelize/model/order";
import ItemModel from "../db/sequelize/model/items";
import OrderItem from "../../domain/entity/items";
import Order from "../../domain/entity/order";
import OrderRepository from "./order";

describe("Order repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([OrderModel, CustomerModel, ProductModel, ItemModel]);
        await sequelize.sync();

    });

    afterEach(async () => {
        await sequelize.close();
    }
    );

    it("Should create a new order", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "123456", "Natal");
        customer.address = address;
        await customerRepository.create(customer);

        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);

        const orderRepository = new OrderRepository();
        const orderItem = new OrderItem("1",
            product.name,
            product.price,
            product.id,
            2
        );

        const order = new Order("1", "1", [orderItem])

        orderRepository.create(order);

        const orderModel = await OrderModel.findOne({
            where: { id: order.id },
            include: ["items"],
        });

        expect(orderModel.toJSON().toStrictEqual({
            id: "1",
            customer_id: "1",
            total: order.total(),
            items: [
                {
                    id: orderItem.id,
                    name: orderItem.name,
                    price: orderItem.price,
                    quantity: orderItem.quantity,
                    order_id: "1",
                    product_id: "1"
                }
            ]
        }))
    })

});
