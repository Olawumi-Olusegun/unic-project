import axios from "axios";
import * as cheerio from 'cheerio';


export async function scrapeWebsite(url: string): Promise<string | null> {

  try {
    // Fetch the website content
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML content into cheerio
    const $ = cheerio.load(html);

    // Remove script and style tags
    $('script, style').remove();

    // Get the text content and remove extra whitespace
    const rawText = $('body').text().replace(/\s+/g, ' ').trim();

    return rawText;
  } catch (error: any) {
    console.error('Error scraping website:', error.message);
    throw error;
  }
}


export async function fetchAndProcessWebsite(url: string) {
    try {
      const content = await scrapeWebsite(url);
      return content;
    } catch (error: any) {
      console.error('Error occurred while fetching and processing the website:', error?.message);
    }
  }

