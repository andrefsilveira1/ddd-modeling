import Order from "./order";

describe("Order unit tests", () => {
    it("Should throw error when empty", () => {
        expect(() => {
            let order = new Order("", "aaa", [],0, "prod1", 5);
        }).toThrow("Id is required")
    });

    it("Should throw error when empty", () => {
        expect(() => {
            let order = new Order("123", "", [],0, "prod2", 1);
        }).toThrow("Customer Id is required")
    });

    it("Should throw error when empty", () => {
        expect(() => {
            let order = new Order("123", "124", [],0, "prod3", 4);
        }).toThrow("Items are required")
    });

});