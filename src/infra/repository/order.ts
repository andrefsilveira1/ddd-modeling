import Order from "../../domain/entity/order";
import ItemModel from "../db/sequelize/model/items";
import OrderModel from "../db/sequelize/model/order";

export default class OrderRepository {
    async create(order: Order): Promise<void> {
        await OrderModel.create({
            id: order.id,
            customer_id: order.customerId,
            total: order.total(),
            items: order.items.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity,
            }))
        },
        {
            include: [{ model: ItemModel }]
        }
    );
    }

}