"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(response) {
        this.response = response;
    }
    body() {
        return this.response.data;
    }
    headers() {
        return this.response.headers;
    }
    status() {
        return this.response.status;
    }
    statusText() {
        return this.response.statusText;
    }
    params() {
        return this.response.config.params;
    }
}
exports.Response = Response;
