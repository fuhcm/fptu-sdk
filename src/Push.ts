import BaseHTTP from "./BaseHTTP";

class PushService extends BaseHTTP {
    public syncPush = async (id: string) => {
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

    public getPushID = () => {
        return this.localStorage.getPushID();
    };
}

export default new PushService();
