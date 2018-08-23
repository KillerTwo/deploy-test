export default class MyConfig{
    static searchUrl = 'http://127.0.0.1:8080/solr/description'
     constructor() {
         console.log(this.searchUrl);
     }
    static getUrl() {
        console.log('调用get方法');
        return this.searchUrl;
    }
}