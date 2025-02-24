/**
 * Design Uber (Ride-Hailing System)
💡 Problem Statement:

Build a system that matches drivers with riders in real-time.
🔹 Key Components:

User Service - Manages riders & drivers.
Matching Service - Finds the nearest driver.
Payment Service - Handles transactions.
Location Service - Tracks real-time location.
🔹 Tech Stack:

Backend: Node.js, gRPC for fast service-to-service calls
Database: PostgreSQL (User data), Cassandra (Trip history)
Storage: AWS S3 (Receipts, invoices)
Mapping: Google Maps API
Caching: Redis (Active drivers list)
Scaling Considerations
✔ Geo-indexing (QuadTrees) to efficiently match riders & drivers.
✔ Distributed Load Balancing for request routing.
✔ Surge Pricing Algorithm for dynamic fare calculation.


 */