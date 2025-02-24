/**
 * Design a Stock Trading System (Robinhood, Zerodha)
💡 Problem Statement:

Build a real-time stock trading platform.
🔹 Key Components:

User Service - Authentication, KYC verification.
Stock Market Data Service - Fetches live prices.
Order Matching Engine - Matches buy/sell orders.
Portfolio Management - Tracks investments.
Risk & Compliance Service - Monitors fraud.
🔹 Tech Stack:

Backend: Node.js, Kafka
Database: PostgreSQL (User data), Cassandra (Market Data)
Streaming: WebSockets (Live prices)
Queue: RabbitMQ (Order Processing)
Security: OAuth + JWT
Scaling Considerations
✔ Low Latency Order Matching (use in-memory processing).
✔ Market Data Caching (Redis).
✔ High-Frequency Trading Protection (Rate Limiting).


 */