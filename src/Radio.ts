import BaseHTTP from "./BaseHTTP";

class RadioService extends BaseHTTP {
    public getRadios = async () => {
        try {
            const { data } = await this.caller.get(this.endpoints.RADIO);

            return data || null;
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public setRadios = async (radios: string) => {
        try {
            const { data } = await this.caller.post(this.endpoints.RADIO, {
                radios
            });

            return data || null;
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default RadioService;
