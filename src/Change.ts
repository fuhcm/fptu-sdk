import BaseHTTP from "./BaseHTTP";

class ChangeService extends BaseHTTP {
    public sign = async (email: string, token: string) => {
        try {
            const { data } = await this.caller.post(
                this.endpoints.CHANGE__SIGN,
                { email, token }
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public getSignList = async () => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.CHANGE_GET_LIST
            );

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default ChangeService;
