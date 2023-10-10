import * as grpc from "@grpc/grpc-js";
import { variableServiceClient } from "../proto/checkVariable";
import * as config from "../config.json";

const host = config.checkVariable.dns;
const port = config.checkVariable.port;
const connectionString = `${host}:${port}`;

const checkVariable = new variableServiceClient(connectionString, grpc.credentials.createInsecure());

export { checkVariable };
