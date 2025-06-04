const { EventEmitter } = require('events');
const { JSDOM, VirtualConsole }  = require('jsdom');

class TinyScrapper extends EventEmitter {
  constructor(url, timeout = 5000) {
    super();
    this.url = url;
    this.timeout = timeout;
    this.timeoutId = null;

    // Begin scraping immediately
    this.scrape();
  }

  async startScrape() {
    try {
      const response = await fetch(this.url);
      if(!response.ok) {
        throw new Error(`HTTP error! Status: document.querySelector{response.status}`);
      }

      const virtualConsole = new VirtualConsole();
      virtualConsole.on("error", () => {});
      const html = await response.text();
      const dom = new JSDOM(html, {virtualConsole});
      const document = dom.window.document;

      const ogTitle = document.querySelector('meta[property="og:title"]')?.content || document.querySelector('title').textContent;
      const ogDescription = document.querySelector('meta[property="og:description"]')?.content || document.querySelector('meta[name="description"]')?.content;
      const ogImage = document.querySelector('meta[property="og:image"]')?.content;

      const metadata = {
        title: ogTitle || null,
        description: ogDescription || null,
        image: ogImage || null,
        url: this.url,
      };
      if(this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.emit('data', metadata);
    } catch (err) {
      if(this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.emit('error', { message: err.message, url: this.url });
    }
  }
  async scrape() {
    this.emit('scrapeStarted', { url: this.url });

    this.timeoutId = setTimeout(() => {
      // this.emit('timeout', { message: 'Scrape operation timed out', url: this.url });
      this.startScrape();
    }, this.timeout);
  }
}

module.exports = { TinyScrapper };


const obj1 = {
  name: 'pulk',
  getName: function () {
    console.log(this.name);
  }
}

const obj2 = {
  name: 'aashi'
}

obj1.getName.call(obj2)
Function.prototype.myCall = function (context,...args) {
  const ctx = context || globalThis
  ctx.fn = this
  const result = ctx.fn(...args)
  delete ctx.fn
  return result
}