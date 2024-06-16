import Product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product";

export default class ProductRepository implements ProductRepositoryInterface{
    async create(product: Product): Promise<void> {
        throw new Error("Method not implemented yet");
    }

    async update(product: Product): Promise<void> {
        throw new Error("Method not implemented yet");
    }

    async find(productId: string): Promise<Product> {
        throw new Error("Method not implemented yet");
    }

    async list(): Promise<Product[]> {
        throw new Error("Method not implemented yet");
    }
}