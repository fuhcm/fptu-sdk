import BaseHTTP from "./BaseHTTP";

class UserService extends BaseHTTP {
    public getUsers = async () => {
        try {
            const { data } = await this.caller.get(this.endpoints.GET__USER);

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default UserService;
