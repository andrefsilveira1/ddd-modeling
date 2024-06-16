import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";
import CustomerRepository from "./customer";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import CustomerModel from "../db/sequelize/model/customer";

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
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "123456", "Natal");
        customer.address = address;
        await customerRepository.create(customer);

        const customerModel = await CustomerModel.findOne({ where: { id: "1"}});
        expect(customerModel.toJSON()).toStrictEqual({
            id: "1",
            name: customer.name,
            active: customer.isActive(),
            reward: customer.reward,
            street: address.street,
            number: address.number,
            zip: address.zip,
            city: address.city,
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
    });

    it("Should find a product on repository", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);

        await productRepository.create(product);
        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        
        const model = await productRepository.find("1");

        expect(productModel.toJSON()).toStrictEqual({
            id: model.id,
            name: model.name,
            price: model.price,
        });

    });

    it("Should find a product on repository", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        const product2 = new Product("2", "Product 2", 200);

        await productRepository.create(product);
        await productRepository.create(product2);

        const products = [product, product2]
        const models = await productRepository.list();

        expect(products).toEqual(models)
    });
})