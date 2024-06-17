import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product";
import Product from "../../domain/entity/product";
import ProductRepository from "./product";
import CustomerRepository from "./customer";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import CustomerModel from "../db/sequelize/model/customer";
import OrderModel from "../db/sequelize/model/order";

describe("Order repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([OrderModel]);
        await sequelize.sync();

    });

    afterEach(async () => {
        await sequelize.close();
    }
    );

   
});
