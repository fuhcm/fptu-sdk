import uuidv4 from "uuid/v4";

export const LOCAL_STORAGE_KEY = {
    JWT: "cfapp_jwt",
    EMAIL: "cfapp_email",
    NICKNAME: "cfapp_nickname",
    SENDER: "cfapp_sendertoken",
    NOTIFICATION: "cfapp_notification_v1",
    PUSH_ID: "cfapp_push_id"
};

class LocalStorageUtils {
    public getItem(key: string, defaultValue: any) {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem(key) || defaultValue;
        }

        return "undefined";
    }

    public setItem(key: string, value: any) {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(key, value);
        }
    }

    public removeItem(key: string) {
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem(key);
        }
    }

    public clear() {
        if (typeof localStorage !== "undefined") {
            localStorage.clear();
        }
    }

    public isAuthenticated() {
        const jwt: string = this.getItem(LOCAL_STORAGE_KEY.JWT, "");
        return jwt && jwt !== "undefined";
    }

    public getJWT() {
        return this.getItem(LOCAL_STORAGE_KEY.JWT, "");
    }

    public getEmail() {
        return this.getItem(LOCAL_STORAGE_KEY.EMAIL, "");
    }

    public getName() {
        const email = this.getItem(LOCAL_STORAGE_KEY.EMAIL, "");

        return email.substring(0, email.lastIndexOf("@"));
    }

    public getNickName() {
        return this.getItem(LOCAL_STORAGE_KEY.NICKNAME, "");
    }

    public generateSenderToken() {
        const token = this.getItem(LOCAL_STORAGE_KEY.SENDER, "");

        if (!token || token === "undefined") {
            const newSenderToken: string = uuidv4();

            this.setItem(LOCAL_STORAGE_KEY.SENDER, newSenderToken);
        }
    }

    public getSenderToken() {
        this.generateSenderToken();

        return this.getItem(LOCAL_STORAGE_KEY.SENDER, "guest");
    }

    public syncPush(id: string) {
        this.setItem(LOCAL_STORAGE_KEY.PUSH_ID, id);
    }

    public getPushID() {
        this.getItem(LOCAL_STORAGE_KEY.PUSH_ID, "");
    }

    public setNotificationLoaded() {
        this.setItem(LOCAL_STORAGE_KEY.NOTIFICATION, true);
    }

    public isNotificationLoaded() {
        const loaded: string = this.getItem(LOCAL_STORAGE_KEY.NOTIFICATION, "");
        return loaded && loaded !== "undefined";
    }
}

export default new LocalStorageUtils();
