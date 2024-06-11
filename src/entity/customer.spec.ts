import Customer from "./customer";

describe("Customer unit test", () => {
    it("Should throw error when id is null", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("Id is required");
    })
});
