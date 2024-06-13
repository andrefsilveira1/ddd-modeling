import Product from "./product";

describe("Product unit tests", () => {
    it("Should throw error when id is empty", () => {
        expect(() => {
            let product = new Product("", "Product", 100);
        }).toThrow("Id is required")
    });

    it("Should throw error when name is empty", () => {
        expect(() => {
            let product = new Product("1", "", 100);
        }).toThrow("Name is required")
    });

    it("Should throw error when price is negative", () => {
        expect(() => {
            let product = new Product("1", "43", -25);
        }).toThrow("Name is required")
    });

});