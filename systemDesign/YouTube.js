/**
 * Design YouTube (Video Streaming Platform)
💡 Problem Statement:

Build a system to upload, store, and stream videos.
🔹 Key Components:

User Service - Handles authentication.
Video Processing Service - Converts videos to multiple resolutions.
CDN Service - Delivers videos quickly.
Recommendation Service - Suggests related videos.
🔹 Tech Stack:

Frontend: React, Next.js
Backend: Node.js, FFmpeg (Video encoding)
Database: MySQL (User metadata), MongoDB (Video metadata)
Storage: AWS S3 (Video files)
CDN: Cloudflare
AI Models: TensorFlow (Recommendation Engine)
Scaling Considerations
✔ Chunk-based Video Streaming using HLS/DASH.
✔ Pre-fetching Video Thumbnails for a smoother UI.
✔ Load Balancing with Multi-Region Deployment.


 */