/**
 * Design a Distributed Task Scheduler (Like Cron Jobs)
💡 Problem Statement:

Design a system that schedules and executes tasks at scale.
🔹 Key Components:

Job Scheduler - Queues tasks.
Worker Nodes - Execute scheduled jobs.
Failure Handling - Reassigns failed jobs.
🔹 Tech Stack:

Backend: Node.js, Celery (Task queue)
Database: PostgreSQL (Job storage), Redis (Caching)
Queue System: RabbitMQ/Kafka
Scaling Considerations
✔ Worker Pool Scaling to handle load.
✔ Job Prioritization (High vs Low priority jobs).
✔ Leader Election (Zookeeper) for fault tolerance.


 */