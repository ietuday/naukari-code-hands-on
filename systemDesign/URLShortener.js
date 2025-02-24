/**
 * Design a URL Shortener (Bit.ly)
💡 Problem Statement:

Create a system to shorten URLs (e.g., bit.ly/xyz123).
🔹 Key Components:

Hashing Service - Generates unique short URLs.
Redirect Service - Redirects short URL to long URL.
Analytics Service - Tracks click counts.
🔹 Tech Stack:

Backend: Node.js, Express
Database: PostgreSQL (User data), Redis (URL caching)
Storage: AWS S3 (For analytics storage)
Scaling Considerations
✔ Base62 Encoding for compact URLs.
✔ Redis Caching for fast URL resolution.
✔ Rate Limiting to prevent abuse.


 */