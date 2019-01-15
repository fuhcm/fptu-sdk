import BaseHTTP from "./BaseHTTP";

class PushService extends BaseHTTP {
    syncPush = async id => {
        this.localStorage.generateSenderToken();

        try {
            await this.caller.post(this.endpoints.PUSH__URL, {
                sender: this.localStorage.getSenderToken(),
                push_id: id
            });

            this.localStorage.syncPush(id);

            return true;
        } catch (err) {
            // Catch error
            return null;
        }
    };

    getPushID = () => {
        return this.localStorage.getPushID();
    };
}

export default new PushService();
