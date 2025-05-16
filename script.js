const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. Open Ajio homepage
  await page.goto('https://www.ajio.com');
  console.log('✅ Opened AJIO homepage');

  // 2. Handle location popup 
  try {
    const locationCloseBtn = await page.waitForSelector('#closeBtn', { timeout: 5000 });
    await locationCloseBtn.click();
    console.log('✅ Closed location popup');
  } catch (e) {
    console.log('ℹ️ No location popup appeared');
  }

  // 3. Click on Women category
  const womenCategory = await page.waitForSelector('text=WOMEN', { timeout: 10000 });
  await womenCategory.click();
  console.log('✅ Clicked WOMEN category');

  // 4. Click on Dresses
  const dressesCategory = await page.waitForSelector('text=Dresses', { timeout: 10000 });
  await dressesCategory.click();
  console.log('✅ Clicked Dresses');

  // 5. Click the Price button 
  const priceButton = await page.waitForSelector('div.facet-head >> span[aria-label="price"]', { timeout: 10000 });
  await priceButton.click();
  console.log('✅ Clicked on Price button');

  //6
  // Type 1000 in Min price input and 2000 in Max price input**
  await page.fill('input#minPrice', '1000');
  await page.fill('input#maxPrice', '2000');

  console.log('✅ Typed min price = 1000 and max price = 2000');


  // Click the apply price filter arrow button
  const applyButton = await page.waitForSelector('button.rilrtl-button.ic-toparw[aria-label="Apply price filter"]', { timeout: 5000 });
  await applyButton.click();
  console.log('✅ Clicked apply price filter button');


  // 7.
  //  Click Ratings button and select 4+ stars
  const ratingButton = await page.waitForSelector('div.facet-head >> span[aria-label="rating"]', { timeout: 10000 });
  await ratingButton.click();
  console.log('✅ Clicked Ratings button');

  // Click the 4 star & above rating filter label to apply the filter
await page.click('label[for="4 star & above"]');
console.log('✅ Clicked on 4 star & above rating filter');

//8
// Click the Fabric facet to open fabric options
await page.click('div.facet-head >> span[aria-label="fabric"]');
console.log('✅ Clicked on Fabric to open options');

// Select Cotton fabric
await page.waitForSelector('label[for="Cotton"]', { timeout: 5000 });
await page.click('label[for="Cotton"]');
console.log('✅ Selected Cotton fabric');


//////////////////////
// Scrape the first 5 products
const products = await page.$$eval('.item', items => items.slice(0, 5).map(item => {
    const name = item.querySelector('.nameCls')?.textContent.trim() || 'N/A';
    const price = item.querySelector('.price strong')?.textContent.trim() || 'N/A';
    const rating = item.querySelector('._3I65V')?.textContent.trim() || 'N/A';
    return { name, price, rating };
  }));
  
  // Log the product details to the console
  console.log('Scraped Product Details:');
  products.forEach((product, index) => {
    console.log(`Product ${index + 1}:`);
    console.log(`  Name: ${product.name}`);
    console.log(`  Price: ${product.price}`);
    console.log(`  Rating: ${product.rating}`);
    console.log('-----------------------------');
  });
  
//////////////////////////

/////////////////////////

const fs = require('fs');
const path = require('path');
const { writeToPath } = require('fast-csv');

// Define the path to the CSV file
const csvFilePath = path.resolve(__dirname, 'ajio_products.csv');

// Write the products array to the CSV file
writeToPath(csvFilePath, products, { headers: true })
  .on('finish', () => {
    console.log('✅ CSV file successfully written as ajio_products.csv');
  })
  .on('error', (err) => {
    console.error('❌ Error writing CSV file:', err);
  });

///////////////////////
  



  // Keep browser open to see results
  // await browser.close();
})();
