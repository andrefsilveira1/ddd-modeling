import { Model, Column, PrimaryKey, Table, ForeignKey, BelongsTo, AllowNull } from "sequelize-typescript";
import CustomerModel from "./customer";
import ProductModel from "./product";

@Table({
    tableName: "items",
    timestamps: false,
})

export default class ItemModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => ProductModel)
    @Column({allowNull: false})
    declare product_id: string;

    @BelongsTo(() => ProductModel)
    declare product: ProductModel;

    @Column({ allowNull: false })
    declare total: number;
    
}