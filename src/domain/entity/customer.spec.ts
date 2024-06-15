import Customer from "./customer";

describe("Customer unit test", () => {
    it("Should throw error when id is null", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrow("Id is required");
    })

    it("Should deactivate customer", () => {
        expect(() => {
            let customer = new Customer("1", "John");
            customer.deactivate();
            expect(customer._active).toBe(false)
        })
    })

    it("Should activate customer", () => {
        expect(() => {
            let customer = new Customer("1", "John");
            customer.activate();
            expect(customer._active).toBe(true)
        })
    })
});
