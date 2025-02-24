/**
 * Design a Distributed Notification System
💡 Problem Statement:

Build a system to send push, email, and SMS notifications.
🔹 Key Components:

User Preferences Service - Stores notification settings.
Queue System - Ensures messages are processed asynchronously.
Push Notification Service - Sends app notifications.
Email & SMS Gateway - Routes messages.
🔹 Tech Stack:

Backend: Node.js, Kafka
Database: PostgreSQL (User Data)
Queue: RabbitMQ / SQS
Notification APIs: Firebase (Push), Twilio (SMS), SendGrid (Email)
Scaling Considerations
✔ Batch Processing for Email/SMS to reduce API costs.
✔ Retry Mechanism for Failed Messages.
✔ Rate Limiting to Prevent Spam.


 */