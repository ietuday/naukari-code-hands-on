/**
 * Design WhatsApp (Chat System)
💡 Problem Statement:

Build a real-time chat system with one-on-one and group messaging.
🔹 Key Components:

User Service - Authentication, profile management.
Message Queue - Ensures real-time message delivery.
Delivery Service - Stores messages until received by the user.
Push Notification Service - Notifies users of new messages.
🔹 Tech Stack:

Backend: Node.js, WebSockets, RabbitMQ
Database: MySQL (User metadata), MongoDB (Chat messages)
Storage: Amazon S3 (Media messages)
Caching: Redis (Last seen, active status)
Scaling Considerations
✔ WebSockets for real-time communication.
✔ End-to-End Encryption (AES-256) for privacy.
✔ Replication & Partitioning for fast message retrieval.


 */