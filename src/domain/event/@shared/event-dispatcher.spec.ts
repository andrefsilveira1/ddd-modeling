import sendEmailWhenProductIsCreatedHandler from "../product/handlers/send-email";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain Events tests", () => {
    it("Should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler)
    });

    it("Should unregister event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
    });

    it("Should unregister event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();
    });


    it("Should notify event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();
        const spyEvent = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        const productCreatedEvent = new ProductCreatedEvent({
            name: "Product 1",
            description: "Description from product 1",
            price: 10.0,
        });

        eventDispatcher.notify(productCreatedEvent);
        
        expect(spyEvent).toHaveBeenCalled();
    });
});