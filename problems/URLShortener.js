class URLShortener {
    constructor() {
        this.map = new Map();
        this.baseUrl = "http://tinyurl.com/";
    }

    encode(longUrl) {
        let shortCode = Math.random().toString(36).substring(7);
        this.map.set(shortCode, longUrl);
        return this.baseUrl + shortCode;
    }

    decode(shortUrl) {
        let shortCode = shortUrl.replace(this.baseUrl, "");
        return this.map.get(shortCode);
    }
}

// Usage:
const shortener = new URLShortener();
const shortUrl = shortener.encode("https://www.google.com");
console.log(shortUrl);
console.log(shortener.decode(shortUrl)); // Output: https://www.google.com
    