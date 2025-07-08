# 🛒 Price Comparison Tool

[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://price-compare-tools.vercel.app)
[![Render](https://img.shields.io/badge/Backend-Render-007ACC?logo=render)](https://price-compare-tools.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🌐 Live Demo

* **Frontend**: [https://price-compare-tools.vercel.app](https://price-compare-tools.vercel.app)
* **Backend**: [https://price-compare-tools.onrender.com](https://price-compare-tools.onrender.com)

---

## 🧠 Features

* 🔍 Search for any product like *iPhone 16 Pro*, etc.
* 🌍 Select country to fetch regional prices
* 📈 Compare price, currency, source, and view links
* 🔐 Secured backend with SerpAPI and `.env`

---

## 🛠 Tech Stack

| Layer    | Tech             | Deployment |
| -------- | ---------------- | ---------- |
| Frontend | React, Axios     | Vercel     |
| Backend  | Node.js, Express | Render     |
| API      | SerpAPI          |            |

---

## 📁 Project Structure

```
price_tool/
├── client/         # React frontend
└── server/         # Node.js backend
```

---

## ⚙️ Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/PATHAK10101/price-compare-tools.git
cd price-compare-tools
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` in `server/`:

```
SERP_API_KEY=your_serpapi_key
PORT=5000
```

Start backend:

```bash
node index.js
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create `.env` in `client/`:

```
REACT_APP_API_BASE=http://localhost:5000
```

Start frontend:

```bash
npm start
```

---

## 🚀 Deployment

### Backend on Render

1. Create a new Web Service on Render
2. Select `server/` as root
3. Add environment variable: `SERP_API_KEY=your_key`
4. Build command: `npm install`
5. Start command: `node index.js`

### Frontend on Vercel

1. Import project in Vercel
2. Set root as `client/`
3. Add `REACT_APP_API_BASE=https://<your-render-backend>.onrender.com`
4. Framework: React
5. Click Deploy

---

## 🔒 Environment Variables

| Variable             | Location    | Example                                                    |
| -------------------- | ----------- | ---------------------------------------------------------- |
| `SERP_API_KEY`       | server/.env | your\_serpapi\_key\_here                                   |
| `REACT_APP_API_BASE` | client/.env | [http://localhost:5000](http://localhost:5000) (or Render) |

---

## 🖼 Screenshots (Optional)

Add screenshots here:

```
project_root/
└── screenshots/
    ├── home.png
    └── result.png
```

Embed in markdown:

```
![Home](./screenshots/home.png)
![Result](./screenshots/result.png)
```

---

> Built with ❤️ using React, Express, and SerpAPI.
