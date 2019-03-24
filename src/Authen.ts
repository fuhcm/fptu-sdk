import BaseHTTP from "./BaseHTTP";

class AuthenService extends BaseHTTP {
    public basicLogin = async (email: string, password: string) => {
        try {
            const { data } = await this.caller.post(
                this.endpoints.AUTH__LOGIN,
                { email, password }
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public loginFacebook = async (email: string, token: string) => {
        try {
            const { data } = await this.caller.post(
                this.endpoints.AUTH__LOGIN_FACEBOOK,
                { email, token }
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public saveToken = (token: string, email: string, nickname: string) => {
        this.localStorage.setItem(this.keys.JWT, token);
        this.localStorage.setItem(this.keys.EMAIL, email);
        this.localStorage.setItem(this.keys.NICKNAME, nickname);
    };
}

export default AuthenService;
