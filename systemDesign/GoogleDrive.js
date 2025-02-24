/**
 * Design Google Drive (Cloud File Storage)
💡 Problem Statement:

Build a system to store, retrieve, and share files.
🔹 Key Components:

User Service - Authentication, storage limits.
File Storage Service - Manages file uploads.
Metadata Service - Tracks file ownership.
Sharing Service - Controls access permissions.
🔹 Tech Stack:

Backend: Node.js, Spring Boot
Database: PostgreSQL (User Data), MongoDB (File Metadata)
Storage: AWS S3 / GCS
Queue: Kafka (Background processing)
Security: OAuth 2.0
Scaling Considerations
✔ Chunked File Uploads for large files.
✔ CDN for Quick Downloads.
✔ Deduplication for Storage Optimization.


 */