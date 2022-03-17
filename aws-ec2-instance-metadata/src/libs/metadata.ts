import { Request, Response}  from "./services/http-client";
// curl http://169.254.169.254/latest/dynamic/instance-identity/document | jp region
// curl http://169.254.169.254/latest/meta-data/placement/availability-zone
// metadata_instance_host_url = 169.254.169.254
export class AwsMetadataClient {
    constructor(private readonly host: string = "http://169.254.169.254") {``

     }

     public async fetchAvailabilityZone(): Promise<string> {
         const response: Response = await this.getRequestObject()
             .method("GET")
             .appendPath("meta-data")
             .appendPath("placement")
             .appendPath("availability-zone")
             .send();
        return response.body();
    }

    public async fetchRegion(): Promise<string> {
        const response: Response = await this.getRequestObject()
            .method("GET")
            .appendPath("meta-data")
            .appendPath("placement")
            .appendPath("region")
            .send();
        return response.body();
    }

    private getRequestObject() {
        return new Request(this.host).appendPath("latest");
    }

}