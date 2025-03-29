🇺🇸 Read this documentation in [English](README.md)

# 📚 Projeto Book Scraper (Submissão de Tarefa)

Este projeto é um scraper simplificado, desenvolvido com fins **educacionais e avaliativos**. Ele busca livros da primeira página de resultados de uma palavra-chave fornecida pelo usuário.

---

## 🎯 Objetivo

O objetivo é demonstrar habilidades full-stack através de:

- Criação de um backend com **Bun + Express** que realiza scraping usando `axios` e `JSDOM`.
- Construção de um frontend com **Vite (HTML, CSS e JavaScript puro)** que interage com o backend.
- Exibição dos dados extraídos de forma clara e amigável ao usuário.
- Suporte multilíngue (Inglês, Português e Espanhol).

---

## 🚫 Nota sobre Ética

Por motivos éticos e legais, não utilizamos a Amazon (que possui fortes proteções anti-bot e proíbe scraping simples). O projeto foi adaptado para utilizar o site [Books to Scrape](https://books.toscrape.com), feito **especificamente para práticas de scraping**.

---

## 🧩 Tecnologias Utilizadas

- **Backend**: Bun, Express, Axios, JSDOM
- **Frontend**: Vite, HTML, CSS, JavaScript
- **Extras**: 🌐 Interface multilíngue usando JavaScript puro

---

## 🚀 Como Rodar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/task_project_test.git
cd task_project_test
```

### 2. Instale as Dependências do Backend

```bash
cd backend
bun install
bun app.js
```

✅ O backend estará disponível em `http://localhost:3000`

### 3. Inicie o Frontend

```bash
cd ../frontend
bun install
bun run dev
```

---

## 🔍 Como Funciona

1. O usuário digita uma palavra-chave (ex: `viagem`).
2. O frontend envia uma requisição para:  
   `http://localhost:3000/api/scrape?keyword=viagem`
3. O backend acessa a página  
   `https://books.toscrape.com/catalogue/page-1.html`, analisa o HTML com JSDOM, filtra os livros que correspondem à palavra-chave e retorna os dados em JSON.
4. O frontend exibe:

   - 📘 **Título do Livro**
   - ⭐ **Nota** (convertida para estrelas)
   - 🗣️ **Número de Avaliações**
   - 🖼️ **Imagem**

---

### 🌐 Suporte Multilíngue

O usuário pode mudar dinamicamente o idioma da interface. Todos os textos (títulos, botões, placeholders e resultados) são traduzidos.

#### 🌍 Idiomas Disponíveis

- 🇬🇧 **Inglês** (padrão)
- 🇧🇷 **Português**
- 🇪🇸 **Espanhol**

---

## 🛡️ Tratamento de Erros

- Se nenhuma palavra-chave for fornecida, o backend retorna um erro `400` com mensagem explicativa.
- Se o scraping falhar, retorna um erro `500`.
- O frontend trata esses erros de forma amigável e informa o usuário.

---

## 📌 Considerações Finais

- ✅ Esta solução segue **rigorosamente todos os requisitos** da tarefa.
- 💡 O código está **comentado** e é fácil de entender.
- 🧱 O projeto é modular e pode ser expandido para outros sites ou funcionalidades.

---

## ✨ Autoria

Desenvolvido com 💜 por **Carolina**