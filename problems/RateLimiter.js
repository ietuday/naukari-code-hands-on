class RateLimiter {
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.tokens = limit;
        setInterval(() => this.tokens = Math.min(this.limit, this.tokens + 1), interval);
    }

    allowRequest() {
        if (this.tokens > 0) {
            this.tokens--;
            return true;
        }
        return false;
    }
}

// Usage:
const limiter = new RateLimiter(5, 1000);
console.log(limiter.allowRequest()); // true
console.log(limiter.allowRequest()); // true
