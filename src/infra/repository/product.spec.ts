import { Sequelize } from "sequelize"
import ProductModel from "../db/sequelize/model/product";

describe("Product repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true },
        });

        // sequelize.addModels({ProductModel}) Find why this does not work

        afterEach(async () => {
            await sequelize.close();
        }
        )
    });
})