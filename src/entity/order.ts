import OrderItem from "./items";

export default class Order {
    private _id: string;
    private _productId: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;
    private _quantity: number;

    constructor(id: string, customerId: string, items: OrderItem[], total: number, productId: string, quantity: number) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = total;
        this._productId = productId;
        this._quantity = quantity;
        this.validate();
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item._price,0);
    }

    validate() {
        if(this._id.length === 0) {
            throw new Error("Id is required")
        }

        if(this._customerId.length === 0) {
            throw new Error("Customer Id is required")
        }

        if(this._items.length === 0) {
            throw new Error("Items are required")
            
        }

    }
}