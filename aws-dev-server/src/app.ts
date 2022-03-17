import express, { Request, Response } from "express";
import awsMetadataClient from "aws-ec2-instance-metadata"

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
    res.json({ "Healthy": true }).send();
});

app.get("/api/info", async (req: Request, res: Response) => {
    try {
        const [region, availability_zone]: [string, string] = await  Promise.all([awsMetadataClient.fetchRegion(), awsMetadataClient.fetchAvailabilityZone()])
        res.json({ region, availability_zone }).send();
    } catch (error) {
        console.error(`ERROR: ${error}`)
        res.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`App is running on the port ${port}`);
});