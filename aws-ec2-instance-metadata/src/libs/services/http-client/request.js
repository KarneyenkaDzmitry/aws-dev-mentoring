"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const axios_1 = __importDefault(require("axios"));
const response_1 = require("./response");
const url_1 = require("url");
const client = axios_1.default.create({
    validateStatus() {
        return true;
    },
});
class Request {
    constructor(host) {
        this.options = {};
        this.options.baseURL = host;
    }
    body(data) {
        this.options.data = data;
        return this;
    }
    method(name) {
        this.options.method = name;
        return this;
    }
    appendPath(path) {
        this.options.baseURL += `/${path}`;
        return this;
    }
    query(queries) {
        var _a;
        const url = new url_1.URL((_a = this.options.baseURL) !== null && _a !== void 0 ? _a : "");
        const params = new url_1.URLSearchParams(queries !== null && queries !== void 0 ? queries : {});
        url.search = params.toString();
        this.options.baseURL = `${url}`;
        return this;
    }
    headers(headers) {
        this.options.headers = Object.assign(Object.assign({}, this.options.headers), headers);
        return this;
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            return new response_1.Response(yield client(this.options));
        });
    }
}
exports.Request = Request;
