// 📦 Importa bibliotecas para fazer requisições HTTP e manipular HTML com DOM
// 📦 Imports libraries to make HTTP requests and manipulate HTML using DOM
import axios from "axios";
import { JSDOM } from "jsdom";

// 🔍 Função principal que faz o scraping baseado em uma palavra-chave
// 🔍 Main function that scrapes data based on a keyword
export async function scrapeBooks(keyword: string) {
  // 🌐 URL da primeira página do catálogo do site Books to Scrape
  // 🌐 URL of the first catalogue page of Books to Scrape website
  const baseUrl = "https://books.toscrape.com/";
  const catalogueUrl = `${baseUrl}catalogue/page-1.html`;
  let url = catalogueUrl;
  let shouldFilterByTitle = true;

  const homeResponse = await axios.get(baseUrl);
  const homeDom = new JSDOM(homeResponse.data);
  const categoryLink = Array.from(homeDom.window.document.querySelectorAll(".side_categories a"))
    .find((link) => link.textContent?.trim().toLowerCase() === keyword.toLowerCase());

  if (categoryLink) {
    const href = categoryLink.getAttribute("href");
    if (href) {
      url = new URL(href, baseUrl).toString();
      shouldFilterByTitle = false;
    }
  }

  // 📥 Requisição HTTP para obter o conteúdo HTML da página
  // 📥 HTTP request to fetch the HTML content of the page
  const response = await axios.get(url);
  const dom = new JSDOM(response.data);
  const document = dom.window.document;

  // ⭐ Dicionário para converter as classes de avaliação em estrelas visuais
  // ⭐ Dictionary to convert rating classes into visual stars
  const ratings: Record<string, string> = {
    One: "★☆☆☆☆",
    Two: "★★☆☆☆",
    Three: "★★★☆☆",
    Four: "★★★★☆",
    Five: "★★★★★",
  };

  // 🧩 Seleciona todos os produtos da página
  // 🧩 Selects all product elements on the page
  const items = document.querySelectorAll(".product_pod");

  // 🔁 Mapeia os livros encontrados e coleta os dados de cada um
  // 🔁 Maps each book found and collects its data
  return await Promise.all(
    Array.from(items).map(async (item) => {
      // 📘 Título do livro
      // 📘 Book title
      const title = item.querySelector("h3 a")?.getAttribute("title") || null;

      // ⭐ Classe de avaliação (ex: "Three") e conversão para estrelas
      // ⭐ Rating class (e.g., "Three") and conversion to stars
      const ratingClass = item.querySelector(".star-rating")?.classList[1] || "";
      const rating = ratings[ratingClass] || null;

      // 🖼️ URL da imagem de capa
      // 🖼️ Cover image URL
      const image = item.querySelector("img")?.getAttribute("src") || null;

      // 🔗 Link da página de detalhes do produto
      // 🔗 Link to the product detail page
      const productLink = item.querySelector("h3 a")?.getAttribute("href") || null;

      let reviews: string | null = null;

      // 📄 Se houver link do produto, abre a página de detalhes para obter os reviews
      // 📄 If product link exists, opens the detail page to fetch the number of reviews
      if (productLink) {
        const detailUrl = new URL(productLink, url).toString();
        try {
          const detailResponse = await axios.get(detailUrl);
          const detailDom = new JSDOM(detailResponse.data);
          const detailDoc = detailDom.window.document;

          // 🛠️ Percorre manualmente a tabela procurando a linha "Number of reviews"
          // 🛠️ Manually scan the table rows for "Number of reviews"
          if (!reviews) {
            const tableRows = detailDoc.querySelectorAll("table.table.table-striped tr");
            tableRows.forEach((row) => {
              const th = row.querySelector("th");
              const td = row.querySelector("td");
              if (th?.textContent?.trim() === "Number of reviews") {
                reviews = td?.textContent?.trim() || "0";
              }
            });
          }
        } catch {
          // ⚠️ Em caso de erro na requisição, mantém reviews como null
          // ⚠️ If request fails, keep reviews as null
          reviews = null;
        }
      }

      // ✅ Retorna os dados do livro
      // ✅ Returns book data
      return {
        title,
        rating,
        reviews,
        image: image ? new URL(image, url).toString() : null,
      };
    })
  // 🔍 Após coletar todos os livros, filtra os que contêm a palavra-chave no título
  // 🔍 After collecting all books, filter those whose title contains the keyword
  ).then(results => shouldFilterByTitle
    ? results.filter(p => p.title?.toLowerCase().includes(keyword.toLowerCase()))
    : results
  );
}
