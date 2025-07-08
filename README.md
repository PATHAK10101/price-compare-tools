# 🛒 Price Comparison Tool

[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://price-compare-tools.vercel.app)
[![Render](https://img.shields.io/badge/Backend-Render-007ACC?logo=render)](https://price-compare-tools.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🌐 Live Demo

- 🔗 **Frontend (Vercel)**: [https://price-compare-tools.vercel.app](https://price-compare-tools.vercel.app)  
- 🔗 **Backend (Render)**: [https://price-compare-tools.onrender.com](https://price-compare-tools.onrender.com)

---

## 🧠 Features

- 🔍 Search any product like *iPhone 16 Pro*, *Sony headphones*, etc.
- 🌍 Select a country (US, IN, UK, CA, etc.) to get local prices
- 📉 Automatically sorts results from lowest to highest price
- 🔗 View product links directly to sellers
- 💡 Easy to use UI, responsive design
- 🔐 Uses SerpAPI securely via `.env`

---

## 🛠 Tech Stack

| Frontend          | Backend             | Deployment      |
|-------------------|---------------------|-----------------|
| React + Axios     | Node.js + Express   | Vercel (Client) |
| Tailwind (opt.)   | dotenv + SerpAPI    | Render (Server) |

---

## 📁 Project Structure
price_tool/
├── client/ # React frontend
└── server/ # Node.js backend
---

## ⚙️ Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/PATHAK10101/price-compare-tools.git
cd price-compare-tools


2. Backend Setup (server/)
cd server
npm install
Create a .env file:
SERP_API_KEY=your_serpapi_key_here
PORT=5000

Start backend:
node index.js


