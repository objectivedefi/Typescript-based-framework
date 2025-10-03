import axios from "axios";
import * as cheerio from "cheerio";

export interface ScrapeResult {
  url: string;
  status: number;
  title?: string;
  textContent?: string;
  error?: string;
}

export async function scrapeUrl(url: string): Promise<ScrapeResult> {
  try {
    console.log(`Scraping: ${url}`);
    
    const response = await axios.get(url, { 
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
      }
    });
    
    const html = response.data as string;
    const $ = cheerio.load(html);
    
    // Remove script, style, and navigation elements
    $('script, style, nav, footer, header, .cookie-banner, .popup, .advertisement').remove();
    
    const title = $("title").first().text().trim();
    
    // Extract text content with better structure preservation
    let textContent = "";
    
    // Try to get main content areas first
    const mainSelectors = [
      'main', 
      '[role="main"]', 
      '.main-content', 
      '.content', 
      'article',
      '.documentation',
      '.docs-content',
      '#content'
    ];
    
    let mainContent = null;
    for (const selector of mainSelectors) {
      const element = $(selector);
      if (element.length > 0 && element.text().trim().length > 200) {
        mainContent = element;
        break;
      }
    }
    
    // If no main content found, use body
    const contentElement = mainContent || $("body");
    
    // Extract structured text with headings preserved
    contentElement.find('h1, h2, h3, h4, h5, h6, p, li, td, .description, .summary, pre, code').each((_, el) => {
      const tagName = el.tagName?.toLowerCase();
      const text = $(el).text().trim();
      
      if (text && text.length > 5) {
        if (tagName?.match(/^h[1-6]$/)) {
          textContent += `\n\n## ${text}\n`;
        } else {
          textContent += `${text} `;
        }
      }
    });
    
    // Fallback to all text if structured extraction didn't work well
    if (textContent.length < 200) {
      textContent = contentElement.text().replace(/\s+/g, " ").trim();
    }
    
    // Clean up the text
    textContent = textContent
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n+/g, "\n\n")
      .trim();
    
    console.log(`✅ Scraped ${url}: ${textContent.length} characters`);
    
    return { 
      url, 
      status: response.status, 
      title, 
      textContent: textContent.substring(0, 30000) // Increased limit for better context
    };
    
  } catch (error: any) {
    const errorMsg = error?.message || 'Unknown error';
    console.log(`❌ Failed to scrape ${url}: ${errorMsg}`);
    
    return { 
      url, 
      status: error?.response?.status ?? 0, 
      title: undefined, 
      textContent: undefined,
      error: errorMsg
    };
  }
}

