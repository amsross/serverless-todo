import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
// Declaring these outside of the function scope makes them static
// Significantly reduce overhead from when I had them inside of the function
const client = new DynamoDBClient({});
export const docClient: DynamoDBClient = DynamoDBDocumentClient.from(client);
