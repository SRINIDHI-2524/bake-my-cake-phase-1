# 🎂 Bake My Cake — Phase I

A modern, responsive React SPA for an online cake & bakery shop. Browse 54+ products across 8 categories, search, filter, add to cart, and checkout — all with smooth Framer Motion animations.

---

## 🖼️ Screenshots

| Home | Filtered View |
|------|--------------|
| ![Home](../screenshots/Bake-My-Cake.png) | ![Brownies](../screenshots/Bake-My-Cake-filtered-brownies.png) |

---

## ✨ Features

- 🛍️ **54 products** across 8 categories (Cakes, Cupcakes, Cookies, Brownies, Chocolates, Muffins, Cheesecakes)
- 🔍 **Search by name** — live filtering as you type
- 🗂️ **Category filter** — animated navbar with active underline indicator
- 🃏 **Flip-card product gallery** — hover to reveal description + Add to Cart
- 🛒 **Shopping cart** — add, remove, quantity control, persistent state
- 💳 **Checkout flow** — delivery address + dummy card payment form
- 🎉 **Order success screen** — animated confirmation with order ID
- 📱 **Fully responsive** — mobile-first design
- ⚡ **Framer Motion** — smooth page & card animations
- 🌐 **json-server REST API** — backend served on `localhost:5000`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Framer Motion, Axios |
| Backend | json-server (REST mock API) |
| Styling | Custom CSS (no framework) |
| Data | 54-item `cakes.json` dataset |

---

## 📁 Folder Structure

```
bake-my-cake-phase-1/
├── bake-my-cake/          # React frontend (CRA)
│   ├── public/
│   │   ├── images/        # Product images
│   │   └── data/
│   └── src/
│       └── Components/
│           ├── Header.js      # Logo + cart icon
│           ├── Navbar.js      # Category filter buttons
│           ├── MainContent.js # Hero + product grid
│           ├── MainList.js    # Flip product card
│           ├── Cart.js        # Slide-in cart drawer
│           ├── Checkout.js    # Checkout modal
│           └── Footer.js
├── data/
│   └── cakes.json         # json-server data source
├── package.json           # json-server config
└── routes.json
```

---

## ⚡ Quick Start

### 1. Start the Backend (json-server)

```bash
cd bake-my-cake-phase-1
npm install
npm start
# API running at http://localhost:5000/cakes
```

### 2. Start the Frontend (React)

```bash
cd bake-my-cake
npm install
npm start
# App running at http://localhost:3000
```

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cakes` | Get all products |
| GET | `/cakes?category=brownies` | Filter by category |
| GET | `/cakes/:id` | Get single product |

---

## 📦 Sample Data Categories

| Category | Count |
|----------|-------|
| Cakes | 10 |
| Cheese Cakes | 6 |
| Cup Cakes | 8 |
| Brownies | 6 |
| Muffins | 6 |
| Cookies | 6 |
| Chocolates | 6 |

---

## 🚀 Deployment

### Frontend → GitHub Pages / Netlify

```bash
cd bake-my-cake
npm run build
# Deploy the /build folder to Netlify or GitHub Pages
```

### Backend → Railway / Render

```bash
# Push the root bake-my-cake-phase-1 folder
# Set start command: npm start
# json-server will serve on the assigned PORT
```

---

## 👨‍💻 Author

**Srinidhi** · [GitHub](https://github.com/SRINIDHI-2524)

---

> Built as **Course End Project — Phase I** | React · json-server · Framer Motion
