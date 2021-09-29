export class News {
    async getNews(data): Promise<any> {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
   
            // let url = "https://newsapi.org/v2/everything?q=" + data + "&from=2021-09-29&sortBy=popularity&apiKey=b46ba190b4ef4742900477a9b61b17ad";
            let url = "https://newsapi.org/v2/everything?q=" + data + "&from=" + this.getDate() + "&sortBy=popularity&apiKey=b46ba190b4ef4742900477a9b61b17ad";
            console.log(url);
            request.open("GET", url);
            request.onload = resolve;
            request.onerror = reject;
            request.send();
        })
    }

    getDate(): string {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return yyyy + '/' + mm + '/' + dd;
    }
}
