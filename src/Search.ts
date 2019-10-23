import BaseHTTP from "./BaseHTTP";

class SearchService extends BaseHTTP {
    public getPostedConfess = async (skip: string) => {
        try {
            const { data } = await this.caller.get(
                `${this.endpoints.GUEST__GET_APPROVED}?skip=${skip}`
            );

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public searchConfess = async (keyword: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.GUEST__GET_SEARCH + "?keyword=" + keyword
            );

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default SearchService;
