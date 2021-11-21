const createApiUrl = (req) => {
  return `${process.env.MARVEL_API_URI}${req.originalUrl}${
    req.originalUrl.includes("?") ? "&" : "?"
  }apiKey=${process.env.MARVEL_API_KEY}`;
};

module.exports = { createApiUrl };
