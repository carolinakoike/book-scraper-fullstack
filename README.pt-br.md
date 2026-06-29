🇺🇸 Read this documentation in [English](README.md)

# 📚 Book Scraper Full-Stack

Scraper full-stack de livros desenvolvido com **Bun**, **Express**, **Axios**, **JSDOM** e **Vite**.

Este projeto foi desenvolvido como parte de um desafio técnico e adaptado para utilizar o [Books to Scrape](https://books.toscrape.com), um site público criado especificamente para a prática segura de web scraping.

---

## 🎯 Objetivo

O objetivo deste projeto é demonstrar habilidades de desenvolvimento full-stack por meio de:

- Criação de uma API backend com **Bun + Express**;
- Extração de dados de livros utilizando **Axios** e **JSDOM**;
- Construção de um frontend com **Vite**, **HTML**, **CSS** e **JavaScript puro**;
- Integração entre frontend e backend;
- Exibição dos dados extraídos em uma interface simples e amigável;
- Suporte multilíngue em inglês, português e espanhol.

---

## 🚫 Nota sobre Scraping Ético

A proposta original do desafio envolvia realizar scraping em resultados de busca da Amazon.

No entanto, a Amazon possui proteções anti-bot e não permite scraping por meio de clientes HTTP simples. Por motivos éticos, legais e técnicos, este projeto foi adaptado para utilizar o **Books to Scrape**, um site criado intencionalmente para a prática de scraping.

Essa decisão mantém o objetivo técnico do desafio, demonstrando a lógica de scraping sem direcionar requisições automatizadas para uma plataforma comercial real.

---

## 🧩 Tecnologias Utilizadas

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

### Recursos extras

- Interface multilíngue com JavaScript puro
- Tratamento de erros para palavra-chave ausente e falhas no scraping

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/carolinakoike/project_task.git
```

```bash
cd project_task
```

### 2. Execute o backend

```bash
cd backend
bun install
bun run start
```

O backend estará disponível em:

```text
http://localhost:3000
```

### 3. Execute o frontend

Em outro terminal, a partir da raiz do projeto:

```bash
cd frontend
bun install
bun run dev
```

O frontend estará disponível em:

```text
http://localhost:5173
```

---

## 🔍 Como Funciona

1. O usuário digita uma palavra-chave, como `travel`.
2. O frontend envia uma requisição para o backend:

```http
GET http://localhost:3000/api/scrape?keyword=travel
```

3. O backend verifica se a palavra-chave corresponde a uma categoria do Books to Scrape.
4. Se a categoria existir, o backend faz scraping da página dessa categoria.
5. Se a categoria não existir, o backend acessa a primeira página do catálogo e filtra os livros pelo título.
6. O backend retorna os dados extraídos em formato JSON.
7. O frontend exibe os resultados na interface.

---

## 📦 Endpoint da API

### Buscar livros

```http
GET /api/scrape?keyword=travel
```

Exemplo de resposta:

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

### Resposta de erro

Quando nenhuma palavra-chave é informada:

```http
GET /api/scrape
```

O backend retorna:

```json
{
  "error": "Keyword is required"
}
```

---

## 🌐 Suporte Multilíngue

O usuário pode alterar dinamicamente o idioma da interface.

Idiomas disponíveis:

- Inglês
- Português
- Espanhol

A tradução da interface inclui títulos, botões, placeholders, mensagens e rótulos dos resultados.

---

## 🛡️ Tratamento de Erros

O projeto trata cenários comuns de erro, como:

- Parâmetro de palavra-chave ausente;
- Nenhum livro encontrado para a palavra-chave informada;
- Falhas durante o scraping;
- Erros de comunicação com o backend.

---

## 📁 Estrutura do Projeto

```text
project_task/
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

## ✅ Validação

O projeto foi revisado e validado com os seguintes testes:

- Backend rodando em `http://localhost:3000`;
- Frontend rodando em `http://localhost:5173`;
- `GET /api/scrape?keyword=travel` retornando `200`;
- `GET /api/scrape` retornando `400` para palavra-chave ausente;
- Frontend se comunicando corretamente com o backend.

---

## 📌 Status

Projeto concluído como desafio técnico e mantido como projeto de portfólio.

Melhorias futuras podem incluir paginação, testes automatizados, estados de carregamento e suporte a mais fontes de scraping.

---

## ✨ Autoria

Desenvolvido por **Carolina Koike**.
