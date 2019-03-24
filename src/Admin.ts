import BaseHTTP from "./BaseHTTP";

class AdminService extends BaseHTTP {
    public getListConfession = async (numLoad: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.ADMINCP__GET_CONFESS + "?load=" + numLoad
            );

            return data || [];
        } catch (err) {
            if (err.response.status === 401) {
                // Do logout
                this.localStorage.clear();

                return null;
            }
        }
    };

    public approveConfess = async (id: string) => {
        try {
            const { data } = await this.caller.put(
                this.endpoints.ADMINCP__APPROVE_CONFESS,
                { id }
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public rejectConfess = async (id: string, reason: string) => {
        try {
            const { data } = await this.caller.put(
                this.endpoints.ADMINCP__REJECT_CONFESS,
                { id, reason }
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default new AdminService();
