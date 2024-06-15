import Address from "./address";

export default class Customer {
    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = true;
    _reward: number = 0;

    constructor(id: string, name: string) {
        this._id = id,
        this._name = name,
        this.validate()
    }

    validate() {
        if(this._id.length === 0) {
            throw new Error("Id is required")
        }

        if(this._name.length === 0) {
            throw new Error("Name is required")
        }

    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): Address {
        return this._address;
    }

    set name(name: string) {
        this._name = name;
    }

    set address(address: Address) {
        this._address = address;
    }

    get reward(): number {
        return this._reward
    }

    changeName(name: string) {
        this._name = name;
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false
    }

    addReward(points: number) {
        this._reward += points;
    }
}