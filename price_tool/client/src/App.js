import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const countries = [
  { code: "US", name: "United States" },
  { code: "IN", name: "India" },
  { code: "UK", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
  { code: "FR", name: "France" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "CN", name: "China" },
];

// ✅ Use environment variable or fallback to localhost
const API_BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:5000";

function App() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("US");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      console.log("🔍 Sending request:", { query, country });
      const res = await axios.post(`${API_BASE_URL}/api/fetch-prices`, {
        query,
        country,
      });
      console.log("✅ Received response:", res.data);
      setResults(res.data);
    } catch (err) {
      console.error("❌ Error fetching prices:", err);
      alert("Failed to fetch prices. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🛒 Global Product Price Comparison</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="e.g., iPhone 16 Pro, 128GB"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name} ({c.code})
            </option>
          ))}
        </select>

        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {!loading && results.length === 0 && (
        <p style={{ color: "#f87171" }}>No results found.</p>
      )}

      {results.length > 0 && (
        <>
          <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#94a3b8" }}>
            Sorted by price (low to high)
          </p>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Currency</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {results
                .sort((a, b) => a.price - b.price)
                .map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.currency}</td>
                    <td>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
