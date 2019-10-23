import BaseHTTP from "./BaseHTTP";

class PushService extends BaseHTTP {
    public syncPush = async (id: string) => {
        this.localStorage.generateSenderToken();

        try {
            await this.caller.put(this.endpoints.PUSH__URL, {
                senderID: this.localStorage.getSenderToken(),
                pushID: id
            });

            this.localStorage.syncPush(id);

            return true;
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public getPushID = () => {
        return this.localStorage.getPushID();
    };
}

export default PushService;
