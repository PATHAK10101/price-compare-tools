const express = require("express");
const cors = require("cors");
const { getJson } = require("serpapi");

const app = express();
const corsOptions = {
  origin: "https://price-compare-tools.vercel.app",
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Load environment variables manually
const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
console.log("🔐 Loaded API KEY:", process.env.SERP_API_KEY);

// 🌍 Currency Guess Utility
function guessCurrency(country) {
  const map = {
    US: "USD",
    IN: "INR",
    UK: "GBP",
    DE: "EUR",
    CA: "CAD",
    AU: "AUD",
    JP: "JPY",
    FR: "EUR",
    CN: "CNY",
    AE: "AED",
  };
  return map[country.toUpperCase()] || "USD";
}

app.post("/api/fetch-prices", async (req, res) => {
  const { query, country } = req.body;

  if (!query || !country) {
    return res.status(400).json({ error: "Missing query or country" });
  }

  try {
    console.log(`🌍 Using SerpAPI for ${country.toUpperCase()}...`);

    const params = {
      engine: "google_shopping",
      q: query,
      gl: country.toLowerCase(),
      api_key: process.env.SERP_API_KEY,
    };

    const response = await getJson("google_shopping", params);

    const results = [];

    if (response.shopping_results && response.shopping_results.length > 0) {
      for (const item of response.shopping_results) {
        if (item.title && (item.product_link || item.link || item.serpapi_product_api)) {
          const numericPrice =
            item.extracted_price ||
            parseFloat((item.price || "").replace(/[^\d.]/g, ""));

          results.push({
            productName: item.title,
            price: numericPrice,
            currency: guessCurrency(country),
            link: item.product_link || item.link || item.serpapi_product_api,
            source: item.source || "Unknown",
            thumbnail: item.thumbnail || null,
          });
        }
      }

      results.sort((a, b) => a.price - b.price);
    } else {
      console.warn("⚠️ No shopping results found from SerpAPI.");
    }

    res.json(results);
  } catch (err) {
    console.error(" SerpAPI Error:", err.message);
    res.status(500).json({ error: "Failed to fetch prices" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
