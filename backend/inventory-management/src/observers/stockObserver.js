class StockObserver {
    constructor() {
        this.subscribers = []
    }

    subscribe(fn) {
        this.subscribers.push(fn)
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }

    notify(event, data) {
        this.subscribers.forEach(subscriber => subscriber(event, data))
    }
}

const stockObserver = new StockObserver()

export default stockObserver