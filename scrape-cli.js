import { TinyScrapper } from './nav-scrapper.js';

const url = process.argv[2];

if (!url) {
  console.error('Please provide a URL: node scrape-cli.js <url>');
  process.exit(1);
}

const scraper = new TinyScrapper(url, 1000);

scraper.on('scrapeStarted', () => console.log(`Started scraping ${url}`));
scraper.on('data', (metadata) => {
  console.log('Metadata:', metadata);
});
scraper.on('error', (err) => {
  console.error('Error:', err);
});
scraper.on('timeout', () => {
  console.warn('Timeout occurred while scraping.');
});

// debounceunc = debounce(onClick,1000)

// function debounce(func,delay) {
//   let timer;
//   return function(...args) {
//     const context = this;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, args)
//     }, delay)
//   }
// }

// fn.apply(obj, []);

// Function.prototype.myApply = function(ctx,args) {
//   const context = this || globalThis;
//   context[fn] = context;
//   const result = args.isArray ? context[fn](...args) : context[fn](args);
//   delete context[fn];
//   return result;
// }

// Imp
// require vs import
// module.exports vs export
// large computation
// threading using libuv os play
// buffer and stream
// events
// proxy vs reverse proxy
// process.env.uv_
// rest vs soap vs grpc
// debounce and throttle
// useMemo and useCallback
// useRef
// React.memo
// next in NodeJs

// let startTime = (new Date()).getTime();
// let endTime = (new Date()).getTime();
// while(endTime<=startTime+5000) {
//   endTime = (new Date()).getTime();
// }
// console.log('Hey')

// Function.prototype.mythrottle = (func,interval) => {
//   let lastTime = 0;
//   return function(...args) {
//     let now = Date.now();
//     if(now - lastTime >=interval) {
//       lastTime = now;
//       func.apply(this, args);
//     }
//   }
// }

// const db = await openDB('MyDB', 1, {
//   upgrade(db) {
//     db.createObjectStore('users')
//   }
// });

// await db.put('users', {name: 'Alice'}, 'user1');