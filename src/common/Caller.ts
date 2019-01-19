import axios, { AxiosPromise } from "axios";
import objectAssign from "object-assign";
import LocalStorage from "../browser/LocalStorage";
import { AxiosInstance } from "axios";

class Caller {
    public getHeaders(): object {
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

    public request(
        endpoint: string,
        method: string,
        headers: object = {},
        params: object = {},
        body: object = {}
    ): AxiosPromise<void> {
        return axios({
            url: endpoint,
            method: method,
            headers: objectAssign(this.getHeaders(), headers),
            params: objectAssign(params),
            data: body
        });
    }

    public get(
        endpoint: string,
        params: object = {},
        headers: object = {}
    ): AxiosPromise<void> {
        return this.request(endpoint, "GET", headers, params);
    }

    public post(
        endpoint: string,
        body: object = {},
        params: object = {},
        headers: object = {}
    ): AxiosPromise<void> {
        return this.request(endpoint, "POST", headers, params, body);
    }

    public put(
        endpoint: string,
        body: object = {},
        params: object = {},
        headers: object = {}
    ): AxiosPromise<void> {
        return this.request(endpoint, "PUT", headers, params, body);
    }
}

export default new Caller();
