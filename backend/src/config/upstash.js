import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const rateLimit = new Ratelimit({
  // Connect to Upstash Redis
  redis: Redis.fromEnv(),
  // 100 requests per 60 seconds
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default rateLimit;
