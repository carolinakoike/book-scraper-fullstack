🇧🇷 Leia esta documentação em [Português](README.pt-br.md)

# 📚 Book Scraper Project (Task Submission)

This project is a simplified scraper designed for educational and evaluation purposes. It fetches product listings (books) from the first page of search results based on a keyword provided by the user.

---

## 🎯 Objective

The goal is to demonstrate full-stack skills by:

- Creating a backend with **Bun + Express** that performs web scraping using `axios` and `JSDOM`.
- Building a frontend with **Vite (HTML, CSS, and Vanilla JavaScript)** that interacts with the backend.
- Displaying the extracted data in a user-friendly format.
- Providing multilingual support (English, Portuguese and Spanish).

---

## 🚫 Note on Ethics

Due to ethical and legal concerns around scraping Amazon (which uses anti-bot protections and does not allow scraping through simple HTTP clients), this project was adapted to use [Books to Scrape](https://books.toscrape.com) — a public website intentionally designed for practicing scraping techniques.

---

## 🧩 Tech Stack

- **Backend**: Bun, Express, Axios, JSDOM
- **Frontend**: Vite, HTML, CSS, JavaScript
- **Extras**: 🌐 Multilingual interface using pure JS

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task_project_test.git
cd task_project_test
```

### 2. Install Backend Dependencies

```bash
cd backend
bun install
bun app.js
```

✅ The backend will be available at `http://localhost:3000`

### 3. Start the Frontend

```bash
cd ../frontend
bun install
bun run dev
```

---

## 🔍 How It Works

1. User enters a keyword (e.g., `travel`) in the input field.
2. Frontend sends a request to:  
   `http://localhost:3000/api/scrape?keyword=travel`
3. The backend fetches the HTML of  
   `https://books.toscrape.com/catalogue/page-1.html`, parses it with JSDOM, filters books that match the keyword, and returns the result as JSON.
4. Frontend displays:

   - 📘 **Book Title**
   - ⭐ **Rating** (converted from text to stars)
   - 🗣️ **Number of Reviews**
   - 🖼️ **Image**

---

### 🌐 Multilingual Support

The user can dynamically switch the website's language. All interface texts (headings, buttons, placeholders, and search results) are translated.

#### 🌍 Languages Supported

- 🇬🇧 **English** (default)
- 🇧🇷 **Portuguese**
- 🇪🇸 **Spanish**

---

## 🛡️ Error Handling

- If no keyword is provided, the backend returns a `400` error with a descriptive message.
- If scraping fails, a `500` error is returned.
- The frontend also handles errors gracefully and informs the user.

---

## 📌 Final Notes

- ✅ This solution strictly follows **all task requirements**.
- 💡 The code is **commented** and easy to understand.
- 🧱 The project is modular and can be extended to other websites or features.

---

## ✨ Author

Developed with 💜 by **Carolina**