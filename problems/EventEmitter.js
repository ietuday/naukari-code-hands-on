class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }

    off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(fn => fn !== listener);
    }

    emit(event, ...args) {
        if (!this.events[event]) return;
        this.events[event].forEach(fn => fn(...args));
    }

    once(event, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}

// Usage:
const emitter = new EventEmitter();
emitter.on("data", msg => console.log("Received:", msg));
emitter.emit("data", "Hello World"); // Output: Received: Hello World
