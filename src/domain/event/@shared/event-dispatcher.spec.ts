import sendEmailWhenProductIsCreatedHandler from "../product/handlers/send-email";
import EventDispatcher from "./event-dispatcher";

describe("Domain Events tests", () => {
    it("Should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreated"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreated"][0]).toMatchObject(eventHandler)
    });

    it("Should unregister event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);

        eventDispatcher.unregister("ProductCreated", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreated"].length).toBe(0);
    });

    it("Should unregister event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new sendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeUndefined();
    });



});