var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class News {
    getNews(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                // let url = "https://newsapi.org/v2/everything?q=" + data + "&from=2021-09-29&sortBy=popularity&apiKey=b46ba190b4ef4742900477a9b61b17ad";
                let url = "https://newsapi.org/v2/everything?q=" + data + "&from=" + this.getDate() + "&sortBy=popularity&apiKey=b46ba190b4ef4742900477a9b61b17ad";
                request.open("GET", url);
                request.onload = resolve;
                request.onerror = reject;
                request.send();
            });
        });
    }
    getDate() {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '/' + mm + '/' + dd;
    }
}
