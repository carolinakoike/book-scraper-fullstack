// 📦 Importa o Express para criar a API e a função de scraping
// 📦 Import Express to create the API and the scrapeBooks function
import express from "express";
import { scrapeBooks } from "./scraper/bookScraper.ts";

// 🚀 Inicializa o app Express e define a porta
// 🚀 Initialize the Express app and set the port
const app = express();
const port = 3000;

// 🌍 Middleware para permitir requisições de qualquer origem (CORS)
// 🌍 Middleware to allow requests from any origin (CORS)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// 📡 Endpoint de API: /api/scrape
// 📡 API endpoint: /api/scrape
app.get("/api/scrape", async (req, res) => {
  // 📥 Extrai a palavra-chave da query string (ex: ?keyword=python)
  // 📥 Extract the keyword from the query string (e.g., ?keyword=python)
  const keyword = req.query.keyword;

  // ⚠️ Valida se a palavra-chave foi fornecida
  // ⚠️ Validate if the keyword was provided
  if (!keyword) {
    return res.status(400).json({ error: "Faltando o parâmetro ?keyword=" });
    // return res.status(400).json({ error: "Missing ?keyword= parameter" });
  }

  try {
    // 🔍 Executa a função de scraping passando a palavra-chave
    // 🔍 Execute the scraping function with the given keyword
    const results = await scrapeBooks(keyword);
    res.json(results); // ✅ Retorna os dados como JSON
  } catch (err) {
    // ❌ Em caso de erro, retorna erro 500 e loga no terminal
    // ❌ In case of error, return HTTP 500 and log to terminal
    console.error("❌ Erro ao fazer scraping:", err);
    res.status(500).json({ error: "Erro interno ao fazer scraping" });
    // res.status(500).json({ error: "Internal error during scraping" });
  }
});

// 🖥️ Inicia o servidor local na porta especificada
// 🖥️ Starts the local server on the specified port
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  // console.log(`🚀 Server running at http://localhost:${port}`);
});
