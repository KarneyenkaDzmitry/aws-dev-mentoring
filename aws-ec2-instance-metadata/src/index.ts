import { AwsMetadataClient } from "./libs/metadata";
const awsMetadataClient = new AwsMetadataClient();

// awsMetadataClient.fetchRegion()
    // .then(region => console.log(`Region: ${region}`))
    // .catch(error => console.log(`Oops...Error: ${error}`));
export default awsMetadataClient;