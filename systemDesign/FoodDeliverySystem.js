/**
 * Design a Food Delivery System (Zomato, Uber Eats)
💡 Problem Statement:

Design a system where users can order food from restaurants.
🔹 Key Components:

User Service - Authentication, profile management.
Restaurant Service - Manages restaurants and menus.
Order & Delivery Service - Handles order processing.
Driver Matching Service - Assigns a driver for delivery.
Payment Service - Handles transactions.
🔹 Tech Stack:

Backend: Node.js, gRPC
Database: PostgreSQL (Users, Orders), Cassandra (Delivery Tracking)
Mapping: Google Maps API
Caching: Redis (Popular Restaurants)
Queue: Kafka (Real-time driver updates)
Scaling Considerations
✔ Geo-indexing (QuadTree) for driver allocation.
✔ Caching Frequently Ordered Items using Redis.
✔ Load Balancing APIs across multiple regions.


 */