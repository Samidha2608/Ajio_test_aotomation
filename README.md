🛍️ Ajio Product Scraper
A powerful web scraping tool built with Playwright that automates navigation through Ajio.com, applies filters, extracts product data from the "Women > Dresses" section, and exports the results to CSV.
Show Image
✨ Features

🤖 Fully Automated - End-to-end navigation with zero manual intervention
🔍 Smart Filtering - Applies price range, ratings, and fabric filters
📊 Data Extraction - Collects product names, prices, and ratings
📁 CSV Export - Neatly organizes scraped data in a structured format
🖥️ Visual Mode - Runs in non-headless mode for easy debugging

🚀 Quick Start
Prerequisites

Node.js (v14 or newer)
npm or yarn package manager

Installation

Clone the repository

bashgit clone https://github.com/your-username/ajio-scraper.git
cd ajio-scraper

Install dependencies

bashnpm install
# or
yarn install

Run the scraper

bashnode index.js
📋 How It Works

Initialization: Launches Chromium browser with GUI enabled
Navigation: Accesses Ajio homepage and handles location popup
Category Selection: Clicks through WOMEN → Dresses category
Filter Application:

Price Range: ₹1000 to ₹2000
Rating: 4 stars and above
Fabric: Cotton


Data Extraction: Captures product name, price, and rating for top 5 products
Export: Saves data to ajio_products.csv in the root directory

📁 Output Example
The ajio_products.csv file will contain data structured like this:
NamePriceRatingEmbellished Tiered Dress₹1,2994.1Floral Print Midi Dress₹1,2004.0Solid Cotton Fit & Flare Dress₹1,4994.2Embroidered A-line Cotton Dress₹1,8004.3Gingham Checkered Cotton Dress₹1,6004.4
🛠️ Technical Details
Dependencies
json{
  "dependencies": {
    "playwright": "^1.44.0",
    "fast-csv": "^4.3.6"
  }
}
Core Technologies

Playwright: Modern web automation library that handles browser interactions
fast-csv: Efficient CSV parsing/writing library
JavaScript (ES6+): Leverages async/await for smooth asynchronous operations

⚠️ Important Notes

Selectors are specific to Ajio's current website structure and may require updates if their DOM changes
A stable internet connection is recommended to avoid timeouts during scraping
The script is configured to extract only the first 5 products (easily modifiable)

🔮 Future Improvements

 Add pagination support to scrape more products
 Implement CLI arguments for dynamic filtering options
 Support additional export formats (JSON, Excel)
 Include product images and detail page URLs
 Add error handling and retry mechanisms

👩‍💻 Author
Samidha Killedar
📧 samidhakilledar2608@example.com
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: This tool is intended for educational purposes only. Always respect Ajio's terms of service and robots.txt directives when using web scrapers.
