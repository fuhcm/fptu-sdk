import axios from "axios";
import objectAssign from "object-assign";
import LocalStorage from "../browser/LocalStorage";

class Caller {
    public getHeaders() {
        if (!LocalStorage.getJWT() || LocalStorage.getJWT() === "") {
            return {
                "Content-Type": "application/json"
            };
        }

        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LocalStorage.getJWT()}`
        };
    }

    public request = (
        endpoint,
        method,
        headers = {},
        params = {},
        body = {}
    ) => {
        return axios({
            url: endpoint,
            method: method,
            headers: objectAssign(this.getHeaders(), headers),
            params: objectAssign(params),
            data: body
        });
    };

    public get = (endpoint, params = {}, headers = {}) => {
        return this.request(endpoint, "GET", headers, params);
    };

    public post = (endpoint, body = {}, params = {}, headers = {}) => {
        return this.request(endpoint, "POST", headers, params, body);
    };

    public put = (endpoint, body = {}, params = {}, headers = {}) => {
        return this.request(endpoint, "PUT", headers, params, body);
    };
}

export default new Caller();
