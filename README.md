# 🛍️ Ajio Product Scraper using Playwright
This project automates product searches on Ajio, applying filters like price, rating, and fabric using Playwright. It mimics user interactions to validate filter functionality and extracts the resulting product data into a CSV file, streamlining testing and data collection processes.


# 📸 Features
 1) Opens Ajio homepage and handles popups.
 2) Navigates to Women > Dresses category.
 3) Applies filters:
      Price Range: ₹1000 - ₹2000
      Rating: 4 stars and above
      Fabric: Cotton
 4) Extracts the first 5 product details:
      Product Name
      Price
      Rating 
 5) Saves the scraped data to a CSV file: ajio_products.csv.

# 🚀 Technologies Used
   Playwright
   Node.js
   fast-csv
   JavaScript (ES6)

# 📦 Dependencies
  {
  "playwright": "^1.44.0", 
  "fast-csv": "^4.3.6"
}

# 📦 Installation
 Clone the repo

bash

git clone https://github.com/your-username/ajio-scraper.git
cd ajio-scraper


Install dependencies

bash

npm install playwright fast-csv
Run the scraper

bash

node index.js


# 📁 Output
A file named ajio_products.csv will be generated in the root directory with the scraped product data.

name	                                                    price	                     rating
Embellished Round-Neck Tiered Dress                   	₹1,190.00	                      4
Embellished & Embroidered Gown Dress                   	₹1,400.00                    	4.1
Embellished Gown Dress	                                ₹1,470.00	                      4
Women Floral Print Tiered Dress                        	₹1,299.00	                    4.3
Embroidered Gown Dress	                                ₹1,400.00	                    4.1

# ⚠️ Notes
  1) Keep the browser open for manual verification/debugging (headless: false is used).

  2) Scraping dynamic websites like Ajio may break if their HTML structure or selectors change. Always check selectors before reusing.

  3) Ensure a stable internet connection to avoid timeout errors.

# 🙌 Acknowledgements
Thanks to Playwright and fast-csv for simplifying web automation and data export!






