import axios from "axios";
import { JSDOM } from "jsdom";

export async function scrapeBooks(keyword: string) {
  const url = `https://books.toscrape.com/catalogue/page-1.html`;
  const response = await axios.get(url);
  const dom = new JSDOM(response.data);
  const document = dom.window.document;

  const ratings: Record<string, string> = {
    One: "★☆☆☆☆",
    Two: "★★☆☆☆",
    Three: "★★★☆☆",
    Four: "★★★★☆",
    Five: "★★★★★",
  };

  const items = document.querySelectorAll(".product_pod");

  return await Promise.all(
    Array.from(items).map(async (item) => {
      const title = item.querySelector("h3 a")?.getAttribute("title") || null;
      const ratingClass = item.querySelector(".star-rating")?.classList[1] || "";
      const rating = ratings[ratingClass] || null;
      const image = item.querySelector("img")?.getAttribute("src") || null;
      const productLink = item.querySelector("h3 a")?.getAttribute("href") || null;

      let reviews: string | null = null;

      if (productLink) {
        const detailUrl = `https://books.toscrape.com/catalogue/${productLink.replace("../", "")}`;
        try {
          const detailResponse = await axios.get(detailUrl);
          const detailDom = new JSDOM(detailResponse.data);
          const detailDoc = detailDom.window.document;
          reviews = detailDoc.querySelector("th:contains('Number of reviews')")?.nextElementSibling?.textContent?.trim() || "0";
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
          reviews = null;
        }
      }

      return {
        title,
        rating,
        reviews,
        image: image ? `https://books.toscrape.com/${image.replace("../", "")}` : null,
      };
    })
  ).then(results => results.filter(p => p.title?.toLowerCase().includes(keyword.toLowerCase())));
}
