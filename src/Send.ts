import BaseHTTP from "./BaseHTTP";

class SendService extends BaseHTTP {
    public sendConfess = async (
        content: string,
        captcha: string,
        pushID: string
    ) => {
        this.localStorage.generateSenderToken();

        try {
            await this.caller.post(this.endpoints.GUEST__POST_CONFESS, {
                content,
                sender: this.localStorage.getSenderToken(),
                status: 0,
                captcha: captcha,
                pushid: pushID
            });

            return true;
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public init = () => {
        this.localStorage.generateSenderToken();
    };
}

export default new SendService();
