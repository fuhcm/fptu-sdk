import BaseHTTP from "./BaseHTTP";

class CrawlService extends BaseHTTP {
    public getArticles = async (name: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.CRAWL__URL + "/" + name
            );

            return data || [];
        } catch (err) {
            // Catch error
            return null;
        }
    };

    public getArticleDetails = async (name: string, guid: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.CRAWL__URL + "/" + name + "/" + guid
            );

            return data || {};
        } catch (err) {
            // Catch error
            return null;
        }
    };
}

export default new CrawlService();
