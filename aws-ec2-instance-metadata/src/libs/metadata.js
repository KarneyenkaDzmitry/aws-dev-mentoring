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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsMetadataClient = void 0;
const http_client_1 = require("./services/http-client");
// curl http://169.254.169.254/latest/dynamic/instance-identity/document | jp region
// curl http://169.254.169.254/latest/meta-data/placement/availability-zone
// metadata_instance_host_url = 169.254.169.254
class AwsMetadataClient {
    constructor(host = "http://169.254.169.254") {
        this.host = host;
        ``;
    }
    fetchAvailabilityZone() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRequestObject()
                .method("GET")
                .appendPath("meta-data")
                .appendPath("placement")
                .appendPath("availability-zone")
                .send();
            return response.body();
        });
    }
    fetchRegion() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRequestObject()
                .method("GET")
                .appendPath("meta-data")
                .appendPath("placement")
                .appendPath("region")
                .send();
            return response.body();
        });
    }
    getRequestObject() {
        return new http_client_1.Request(this.host).appendPath("latest");
    }
}
exports.AwsMetadataClient = AwsMetadataClient;
