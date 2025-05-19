# 🛍️ Ajio Product Scraper using Playwright

This project automates product searches on Ajio, applying filters like price, rating, and fabric using Playwright. It mimics user interactions to validate filter functionality and extracts the resulting product data into a CSV file, streamlining testing and data collection processes.

---

## 📸 Features

1. Opens Ajio homepage and handles popups.  
2. Navigates to **Women > Dresses** category.  
3. Applies filters:
   - **Price Range:** ₹1000 - ₹2000  
   - **Rating:** 4 stars and above  
   - **Fabric:** Cotton  
4. Extracts the **first 5 product details**:
   - Product Name  
   - Price  
   - Rating  
5. Saves the scraped data to a CSV file: `ajio_products.csv`.

---

## 🚀 Technologies Used

- Playwright  
- Node.js  
- fast-csv  
- JavaScript (ES6)

---

## 📦 Dependencies

```json
{
  "playwright": "^1.44.0",
  "fast-csv": "^4.3.6"
}
