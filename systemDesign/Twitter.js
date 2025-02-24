/**
 * Design Twitter (Microblogging System)
💡 Problem Statement:

Build a scalable system for posting, liking, and retweeting tweets.
🔹 Key Components:

User Service - Registration, authentication.
Tweet Service - Stores tweets.
Timeline Service - Shows the user’s feed.
Notification Service - Notifies when someone follows/likes/retweets.
🔹 Tech Stack:

Backend: Node.js, Kafka (Event Queue)
Database: MySQL (User data), Cassandra (Tweets)
Storage: AWS S3 (Media uploads)
Caching: Redis (User feed cache)
Scaling Considerations
✔ Fan-out on Write vs Read (Optimized Feed Generation).
✔ Distributed Caching for Faster Timeline Updates.
✔ Sharded Databases for Tweet Storage.


 */