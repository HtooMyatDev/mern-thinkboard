import ratelimit from "../config/upstash.js";

// Rate limiter middleware
export const rateLimiter = async (req, res, next) => {
  try {
    // Limit the number of requests to 10 per 20 seconds using the "my-first-limiter" key
    const { success } = await ratelimit.limit("my-first-limiter");
    // If the request is not successful, return a 429 status code and a message
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error in rateLimiter middleware",
      error: error.message,
    });
    next(error);
  }
};
