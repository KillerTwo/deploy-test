export default class MyConfig{
    static searchUrl = 'http://10.10.10.226:8001/spring-boot-solr-0.0.1-SNAPSHOT/solr/description'
     constructor() {
         console.log(this.searchUrl);
     }
    static getUrl() {
        console.log('调用get方法');
        return this.searchUrl;
    }
}