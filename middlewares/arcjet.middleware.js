import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    // The tokenbucket rule is used to rate limit requests. In this app, the bucket has a capacity of 10 tokens
    // The requested param here is used to specify how many tokens a request costs. In this case, 1 token
    // SO each time someone makes any request, that's 1 token gone. If they make 10 requests in a short period of time
    // that's 10 tokens gone. Arcjet will block any further requests until the bucket refills

    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({
          success: false,
          message: "Too many requests. Please try again later.",
        });
      }
      if (decision.reason.isBot()) {
        return res.status(403).json({
          success: false,
          message: "Access denied. Bot traffic is not allowed.",
        });
      }

      return res.status(403).json({
        success: false,
        message: "Access denied. Please try again later.",
      });
    }

    next();
  } catch (error) {
    console.log("Arcjet Middleware Error:", error);
    next(error);
  }
};

export default arcjetMiddleware;
