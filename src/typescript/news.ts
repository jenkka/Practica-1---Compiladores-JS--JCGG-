export class News {
    async getNews(data): Promise<any> {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            let url = "https://newsapi.org/v2/everything?q=" + data + "&from=2021-09-29&sortBy=popularity&apiKey=b46ba190b4ef4742900477a9b61b17ad";
            
            request.open("GET", url);
            request.onload = resolve;
            request.onerror = reject;
            request.send();
        })
    }
}







// import * as NewsAPI from 'newsapi';
// const newsapi = new NewsAPI('b46ba190b4ef4742900477a9b61b17ad');


// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });


// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });

// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });
