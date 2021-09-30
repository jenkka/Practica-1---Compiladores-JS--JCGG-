import { News } from './news.js';

declare let Handlebars;

const news = new News();

function displayNews() {
    let data = (<HTMLInputElement>document.getElementById('search-bar')).value;
    news.getNews(data).then(e => {
        let response;
        if(e.target.status == 200) {
            response = JSON.parse(e.target.response);
        } else {
            console.log(`Error ${ e.target.status } ${ e.target.statusText }`);
            return;
        }

        console.log(response);
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        document.getElementById('news-container').innerHTML = template({ news: response.articles });
        document.getElementById('news-container').scrollIntoView();
    }).catch(err => {
        console.error("Error: ", err)
    })
}

declare global {
    interface Window { displayNews: Function; }
}

if (typeof window != "undefined") {
    window.displayNews = displayNews;

}