import Order from "../../domain/entity/order";
import CustomerModel from "../db/sequelize/model/customer";
import ItemModel from "../db/sequelize/model/items";

export default class OrderRepository {
    async create(order: Order): Promise<void> {
        await CustomerModel.create({
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
            include: [{ model: ItemModel}]
        }
    );
    }

}