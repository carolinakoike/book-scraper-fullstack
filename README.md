🇧🇷 Read this documentation in [Portuguese](README.pt-br.md)

# 📚 Book Scraper Full-Stack

A full-stack book scraper built with **Bun**, **Express**, **Axios**, **JSDOM** and **Vite**.

This project was developed as part of a technical challenge and adapted to use [Books to Scrape](https://books.toscrape.com), a public website designed for practicing web scraping techniques safely.

---

## 🎯 Objective

The goal of this project is to demonstrate full-stack development skills by:

- Building a backend API with **Bun + Express**;
- Scraping book data using **Axios** and **JSDOM**;
- Creating a frontend with **Vite**, **HTML**, **CSS** and **Vanilla JavaScript**;
- Connecting the frontend to the backend API;
- Displaying scraped book data in a user-friendly interface;
- Providing multilingual support in English, Portuguese and Spanish.

---

## 🚫 Note on Ethical Scraping

The original challenge proposal involved scraping Amazon search results.

However, Amazon uses anti-bot protections and does not allow scraping through simple HTTP clients. For ethical, legal and technical reasons, this project was adapted to use **Books to Scrape**, a website intentionally created for practicing scraping.

This decision keeps the project aligned with the goal of demonstrating scraping logic without targeting a real commercial platform.

---

## 🧩 Tech Stack

### Backend

- Bun
- Express
- Axios
- JSDOM

### Frontend

- Vite
- HTML
- CSS
- JavaScript

### Extra Features

- Multilingual interface using pure JavaScript
- Error handling for missing keywords and scraping failures

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/carolinakoike/book-scraper-fullstack.git
```

```bash
cd book-scraper-fullstack
```

### 2. Run the backend

```bash
cd backend
bun install
bun run start
```

The backend will be available at:

```text
http://localhost:3000
```

### 3. Run the frontend

In another terminal, from the project root:

```bash
cd frontend
bun install
bun run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## 🔍 How It Works

1. The user enters a keyword, such as `travel`.
2. The frontend sends a request to the backend:

```http
GET http://localhost:3000/api/scrape?keyword=travel
```

3. The backend checks whether the keyword matches a Books to Scrape category.
4. If the category exists, the backend scrapes the category page.
5. If the category does not exist, the backend fetches the first catalogue page and filters books by title.
6. The backend returns the scraped data as JSON.
7. The frontend displays the results in the interface.

---

## 📦 API Endpoint

### Scrape books

```http
GET /api/scrape?keyword=travel
```

Example response:

```json
[
  {
    "title": "It's Only the Himalayas",
    "rating": "Two",
    "image": "https://books.toscrape.com/...",
    "link": "https://books.toscrape.com/..."
  }
]
```

### Error response

When no keyword is provided:

```http
GET /api/scrape
```

The backend returns:

```json
{
  "error": "Keyword is required"
}
```

---

## 🌐 Multilingual Support

The user can switch the interface language dynamically.

Supported languages:

- English
- Portuguese
- Spanish

The translated interface includes headings, buttons, placeholders, messages and search result labels.

---

## 🛡️ Error Handling

The project handles common error scenarios, such as:

- Missing keyword parameter;
- No books found for the provided keyword;
- Scraping failures;
- Backend communication errors.

---

## 📁 Project Structure

```text
book-scraper-fullstack/
├── backend/
│   ├── scraper/
│   ├── app.js
│   ├── package.json
│   └── bun.lock
├── frontend/
│   ├── index.html
│   ├── main.js
│   ├── style.css
│   ├── package.json
│   └── bun.lock
├── README.md
├── README.pt-br.md
└── .gitignore
```

---

## ✅ Validation

The project was reviewed and validated with the following checks:

- Backend running on `http://localhost:3000`;
- Frontend running on `http://localhost:5173`;
- `GET /api/scrape?keyword=travel` returning `200`;
- `GET /api/scrape` returning `400` for missing keyword;
- Frontend communicating with the backend successfully.

---

## 📌 Status

Project completed as a technical challenge and kept as a portfolio project.

Future improvements may include pagination, automated tests, loading states, and support for more scraping targets.

---

## ✨ Author

Developed by **Carolina Koike**.
