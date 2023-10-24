import * as grpc from "@grpc/grpc-js";
import { SpotifyServiceClient } from "../proto/SpotifyAPI";
import * as config from "../config.json";
import { minecraftServiceClient } from "../proto/minecraftAPI";

const host = config.minecraft.dns;
const port = config.minecraft.port;
const connectionString = `${host}:${port}`;

const minecraftAPI = new minecraftServiceClient(connectionString, grpc.credentials.createInsecure());

export { minecraftAPI };
