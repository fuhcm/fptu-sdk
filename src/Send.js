import BaseHTTP from "./BaseHTTP";

class SendService extends BaseHTTP {
    sendConfess = async (content, captcha, pushID) => {
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
            // Catch error
            return null;
        }
    };

    init = () => {
        this.localStorage.generateSenderToken();
    };
}

export default new SendService();
