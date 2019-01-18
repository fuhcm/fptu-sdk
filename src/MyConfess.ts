import BaseHTTP from "./BaseHTTP";

class MyConfessService extends BaseHTTP {
    public getMyConfess = async (numLoad: string) => {
        try {
            const { data } = await this.caller.post(
                this.endpoints.GUEST__GET_MY_CONFESS + "?load=" + numLoad,
                {
                    token: this.localStorage.getSenderToken()
                }
            );

            return data || [];
        } catch (err) {
            // Catch error
            return null;
        }
    };
}

export default new MyConfessService();
