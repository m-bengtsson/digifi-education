# DigiFi Education - E-commerce Project

This is an educational repository containing a mock API and TanStack Start frontend. Your task is to rebuild the project to match the category and product page design from [GörDetMedRW](https://gordetmedrw.se/) as closely as possible.

## 🎯 Project Goal

Rebuild an e-commerce application that closely matches the design and functionality of the category and product page on [gordetmedrw.se](https://gordetmedrw.se/). Images and assets can be taken from the reference site to achieve a similar look and feel.

## 📋 What to Build

### 1. Header and Footer
- **Header**: Build a complete header component with navigation, logo, search functionality, and cart icon
- **Footer**: Create a footer with links, company information, and social media links
- **Note**: All content can be mocked - focus on structure and design

### 2. Category Page
- Display products belonging to a specific category based on the API structure
- Show product listings with images, names, prices, and stock status
- Display category description and rich text content (`descriptionBel` field)
- Match the visual design and layout from the reference site

### 3. Product Page
- Create a detailed product page showing:
  - Product images (support multiple images)
  - Product name, SKU, and price
  - Rich text description (HTML formatted)
  - Stock status with color indicators
  - Reviews and ratings
  - Related products/recommended accessories
  - Security data sheet links (if available)
  - Instruction video links (if available)
- Match the design as closely as possible to the reference site

## 🛠️ Tech Stack

- **Frontend**: TanStack Start (React Router)
- **Backend**: Mock API using json-server
- **Language**: TypeScript
- **Styling**: Any CSS framework or library of your choice
- **External Libraries**: Feel free to use any external libraries that help achieve the desired functionality

## 📁 Project Structure

```
digifi-education/
├── edu-api/          # Mock API server
│   ├── db.json       # Database with products, categories, etc.
│   ├── server.js     # Custom server with additional endpoints
│   └── routes.json   # API route configuration
└── edu-ecommerce/    # TanStack Start frontend
    ├── src/
    │   ├── components/
    │   ├── routes/
    │   └── ...
    └── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Install dependencies for the API:**
   ```bash
   cd edu-api
   npm install
   ```

2. **Start the mock API server:**
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3050`

3. **Install dependencies for the frontend:**
   ```bash
   cd edu-ecommerce
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📡 API Endpoints

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get a specific product
- `GET /products/search?q=searchterm` - Search products by name
- `GET /products?categoryId=:id` - Get products by category

### Categories
- `GET /categories` - Get all categories
- `GET /categories/:id` - Get a specific category

### Stock Statuses
- `GET /stock-statuses` - Get available stock statuses with color codes

## 🎨 Design Reference

Visit [https://gordetmedrw.se/](https://gordetmedrw.se/) to see the reference design. Focus on:
- Category page layout and product grid
- Product detail page structure
- Header and footer design
- Color scheme and typography
- Responsive design patterns

## 📝 Notes

- All product images and assets can be sourced from the reference website
- Focus on matching the visual design and user experience
- Use the provided API structure - no need to modify the backend
- Feel free to use any CSS framework or styling library
- External libraries are allowed and encouraged if they help achieve the goal

**Happy coding! 🚀**
