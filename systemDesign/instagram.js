/**
Design Instagram (Photo Sharing Platform)
💡 Problem Statement:

Build a system that allows users to upload, view, like, and comment on photos.
Should support millions of users.
🔹 Key Components:

User Service - Handles user registration, authentication.
Photo Storage Service - Stores images in a scalable manner.
Feed Generation Service - Renders the user’s homepage feed.
Like/Comment Service - Manages likes and comments.
CDN (Content Delivery Network) - To serve images fast.
🔹 Tech Stack:

Frontend: React, Next.js
Backend: Node.js, Express
Database: MySQL (User metadata), Cassandra (Photos & Comments)
Storage: Amazon S3 (Photo storage)
Caching: Redis (User feed caching)
CDN: Cloudflare
Scaling Considerations
✔ Database Sharding - To handle large-scale reads/writes.
✔ Asynchronous Processing - Move image resizing & feed updates to a message queue (Kafka).
✔ Graph Database (Neo4j) - To manage social connections (followers/following).

 */