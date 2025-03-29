import express from "express";
import { scrapeBooks } from "./scraper/bookScraper.ts";

const app = express();
const port = 3000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Faltando o parâmetro ?keyword=" });
  }

  try {
    const results = await scrapeBooks(keyword);
    res.json(results);
  } catch (err) {
    console.error("❌ Erro ao fazer scraping:", err);
    res.status(500).json({ error: "Erro interno ao fazer scraping" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
