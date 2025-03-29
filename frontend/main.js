document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#search-input");
    const button = document.querySelector("#search-button");
    const resultsContainer = document.querySelector(".results");
  
    button.addEventListener("click", async () => {
      const keyword = input.value.trim();
  
      if (!keyword) {
        alert("Por favor, digite uma palavra-chave!");
        return;
      }
  
      resultsContainer.innerHTML = "<p>🔍 Buscando livros...</p>";
  
      try {
        const response = await fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`);
        const data = await response.json();
  
        if (!data.length) {
          resultsContainer.innerHTML = "<p>😕 Nenhum resultado encontrado.</p>";
          return;
        }
  
        resultsContainer.innerHTML = "";
  
        data.forEach((book) => {
          const card = document.createElement("div");
          card.classList.add("result-card");
  
          card.innerHTML = `
            <img src="${book.image}" alt="Capa de ${book.title}" />
            <h3>${book.title}</h3>
            <p>${book.rating || "Sem nota"}</p>
            <p>${book.reviews ? `${book.reviews} reviews` : "0 avaliações"}</p>
          `;
  
          resultsContainer.appendChild(card);
        });
      } catch (err) {
        resultsContainer.innerHTML = "<p>❌ Erro ao buscar dados.</p>";
        console.error("Erro no front:", err);
      }
    });
  });
  