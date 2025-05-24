# Yano

**Yano** is a full-stack web application featuring a Vue.js frontend and a Node.js backend. The app serves and displays rich article content structured in a JSON file. Built with modern tools like Vite and Vue 3, Yano offers a clean, modular codebase for expanding into more complex content platforms.

## Features

- **Backend**: Lightweight Express.js server serving content from a JSON file
- **Frontend**: Vue 3 app powered by Vite for fast development and builds
- Fetches and displays articles with metadata and rich content
- Modular and scalable structure

## Tech Stack

- **Frontend**: Vue.js 3, Vite, JavaScript, CSS
- **Backend**: Express.js
- **Data Format**: JSON

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vladischul/yano.git
   cd yano
   ```

2. **Start the backend server**

   ```bash
   cd backend
   npm install express
   node server.js
   ```

   The server will run at: [http://localhost:3002](http://localhost:3002)

## JSON Structure (`article.json`)

The backend serves data from `article.json`, which looks like:

```json
{
  "id": 1,
  "title": "Example Article",
  "linkUrl": "/articles/example-article",
  "date": "2024-04-01",
  "imageSrc": "/assets/images/example.jpg",
  "contentType": "article",
  "timeOfCreation": "2024-04-01T12:00:00Z",
  "content": [
    {
      "sectionTitle": "Introduction",
      "text": "This is the opening section of the article..."
    }
  ]
}
```
