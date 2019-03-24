import BaseHTTP from "./BaseHTTP";

class SearchService extends BaseHTTP {
    public getPostedConfess = async (latestID: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.GUEST__GET_APPROVED + "?latest_id=" + latestID
            );

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public searchConfess = async (keyword: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.GUEST__GET_SEARCH + "?q=" + keyword
            );

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default new SearchService();
