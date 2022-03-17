import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import { Response } from "./response";
import {URL, URLSearchParams } from "url";

const client: AxiosInstance= axios.create({
        validateStatus(): boolean {
            return true;
        },
    });

export class Request {
    private options: AxiosRequestConfig = {};

    constructor(host: string) {
        this.options.baseURL = host;
    }

    public body(data: any): Request {
        this.options.data = data;
        return this;
    }

    public method(name: Method): Request {
        this.options.method = name;
        return this;
    }

    public appendPath(path: string | number): Request {
        this.options.baseURL += `/${path}`;
        return this;
    }

    public query(queries?: Record<string, string | readonly string[]>): Request {
        const url = new URL(this.options.baseURL ?? "");
        const params = new URLSearchParams(queries ?? {});
        url.search = params.toString();
        this.options.baseURL = `${url}`;
        return this;
    }

    public headers(headers: AxiosRequestConfig["headers"]): Request {
        this.options.headers = { ...this.options.headers, ...headers };
        return this;
    }

    public async send(): Promise<Response> {
        return new Response(await client(this.options));
    }
}
