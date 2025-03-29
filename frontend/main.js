// Executa o código após o carregamento completo da página
// Runs the code after the full page has loaded
document.addEventListener("DOMContentLoaded", () => {
  // 🎯 Seletores dos elementos da interface
  // 🎯 Interface element selectors
  const input = document.querySelector("#search-input");
  const button = document.querySelector("#search-button");
  const resultsContainer = document.querySelector(".results");
  const languageSelect = document.querySelector("#language");
  const title = document.querySelector("#title");

  // 🌍 Textos traduzidos por idioma
  // 🌍 Translations for supported languages
  const translations = {
    en: {
      title: "📚 Book Scraper",
      placeholder: "Enter a book title...",
      button: "Search",
      searching: "🔍 Searching books...",
      noResults: "😕 No results found.",
      noRating: "No rating",
      reviews: "reviews",
      error: "❌ Error while fetching data.",
      alert: "Please enter a keyword!",
    },
    pt: {
      title: "📚 Buscador de Livros",
      placeholder: "Digite o nome do livro...",
      button: "Buscar",
      searching: "🔍 Buscando livros...",
      noResults: "😕 Nenhum resultado encontrado.",
      noRating: "Sem nota",
      reviews: "avaliações",
      error: "❌ Erro ao buscar dados.",
      alert: "Por favor, digite uma palavra-chave!",
    },
    es: {
      title: "📚 Buscador de Libros",
      placeholder: "Escribe el nombre del libro...",
      button: "Buscar",
      searching: "🔍 Buscando libros...",
      noResults: "😕 No se encontraron resultados.",
      noRating: "Sin puntuación",
      reviews: "reseñas",
      error: "❌ Error al buscar datos.",
      alert: "¡Por favor, ingrese una palabra clave!",
    },
  };

  // 🔠 Idioma atual e último resultado
  // 🔠 Current language and last search result
  let currentLang = "en";
  let lastResults = [];

  // 📝 Atualiza todos os textos da interface
  // 📝 Updates all texts based on selected language
  function updateTexts() {
    const t = translations[currentLang];
    title.textContent = t.title;
    input.placeholder = t.placeholder;
    button.textContent = t.button;

    // 🔁 Atualiza também os resultados, se houver
    // 🔁 Also re-renders results if any
    if (lastResults.length) {
      renderResults(lastResults);
    }
  }

  // 🖼️ Função que monta o HTML de cada card de resultado
  // 🖼️ Function that creates each result card
  function renderResults(data) {
    const t = translations[currentLang];
    resultsContainer.innerHTML = "";

    data.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("result-card");

      card.innerHTML = `
        <img src="${book.image}" alt="Cover of ${book.title}" />
        <h3>${book.title}</h3>
        <p>${book.rating || t.noRating}</p>
        <p>${book.reviews ? `${book.reviews} ${t.reviews}` : `0 ${t.reviews}`}</p>
      `;

      resultsContainer.appendChild(card);
    });
  }

  // 🔍 Realiza a requisição para o backend com a palavra-chave
  // 🔍 Sends request to backend using the entered keyword
  async function searchBooks() {
    const keyword = input.value.trim();
    const t = translations[currentLang];

    if (!keyword) {
      alert(t.alert);
      return;
    }

    // ⏳ Exibe mensagem de busca
    // ⏳ Displays loading message
    resultsContainer.innerHTML = `<p>${t.searching}</p>`;

    try {
      const response = await fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`);
      const data = await response.json();

      lastResults = data;

      if (!data.length) {
        resultsContainer.innerHTML = `<p>${t.noResults}</p>`;
        return;
      }

      renderResults(data);
    } catch (err) {
      resultsContainer.innerHTML = `<p>${t.error}</p>`;
      console.error("Erro no front:", err);
    }
  }

  // 🧠 Eventos: clique no botão e troca de idioma
  // 🧠 Event listeners: button click and language change
  button.addEventListener("click", searchBooks);
  languageSelect.addEventListener("change", () => {
    currentLang = languageSelect.value;
    updateTexts();
  });

  // 🚀 Inicia com os textos no idioma padrão
  // 🚀 Initialize with default language texts
  updateTexts();
});
