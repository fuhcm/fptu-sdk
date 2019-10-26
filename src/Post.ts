import BaseHTTP from "./BaseHTTP";

interface IPost {
    title: string;
    category: string;
    thumbnail: string;
    description: string;
    content: string;
}

class PostService extends BaseHTTP {
    public list = async () => {
        try {
            const { data } = await this.caller.get(this.endpoints.POST__LIST);

            return data || [];
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public get = async (id: string) => {
        try {
            const { data } = await this.caller.get(
                this.endpoints.POST__LIST + "/" + id
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public new = async (post: IPost) => {
        try {
            const { data } = await this.caller.post(
                this.endpoints.POST__NEW,
                post
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };

    public update = async (id: string, post: IPost) => {
        try {
            const { data } = await this.caller.put(
                this.endpoints.POST__UPDATE + "/" + id,
                post
            );

            return data || {};
        } catch (err) {
            throw new Error(err.response && err.response.data);
        }
    };
}

export default PostService;
