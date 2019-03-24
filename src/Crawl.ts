import BaseHTTP from "./BaseHTTP";

class CrawlService extends BaseHTTP {
    public getArticles = async (name: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.CRAWL__URL + "/" + name
            );

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public getArticleDetails = async (name: string, guid: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.CRAWL__URL + "/" + name + "/" + guid
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default new CrawlService();
