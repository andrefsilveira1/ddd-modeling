import Order from "./order";

describe("Order unit tests", () => {
    it("Should throw error when empty", () => {
        expect(() => {
            let order = new Order("", "aaa", [],0);
        }).toThrow("Id is required")
    });

    it("Should throw error when empty", () => {
        expect(() => {
            let order = new Order("123", "", [],0);
        }).toThrow("Customer Id is required")
    });

    it("Should throw error when empty", () => {
        expect(() => {
            let order = new Order("123", "124", [],0);
        }).toThrow("Items are required")
    });

});