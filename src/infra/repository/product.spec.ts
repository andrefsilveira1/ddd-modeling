import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import ProductService from "../../service/product.service";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";

describe("Product repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([ProductModel]);
        await sequelize.sync();

    });

    afterEach(async () => {
        await sequelize.close();
    }
    );

    it("Should create a product on repository", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1"}});
        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100,
        });
    });

    it("Should update a product on repository", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({where: {id: "1"}});
        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100,
        });

        product.changeName("New product");
        product.changePrice(300);

        await productRepository.update(product);
        const model = await ProductModel.findOne({where: {id: "1"}});
        expect(model.toJSON()).toStrictEqual({
            id: "1",
            name: "New product",
            price: 300
        });
    })
})