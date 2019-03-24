import BaseHTTP from "./BaseHTTP";

class OverviewService extends BaseHTTP {
    public getOverview = async () => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.GUEST__GET_OVERVIEW
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default OverviewService;
