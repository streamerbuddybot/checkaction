import * as grpc from "@grpc/grpc-js";
import { ActionRequest, ActionResponse, ActionServiceClient } from "../proto/handleAction";
import handleAction from "../functions/handleAction";
import * as config from "../config.json";

const server = new grpc.Server();
const port = config.checkAction.port;
const host = config.checkAction.host;

async function grpcServer() {
  const serviceImpl = {
    SendAction: async (call: grpc.ServerUnaryCall<ActionRequest, ActionResponse>, callback: grpc.sendUnaryData<ActionResponse>) => {
      const action = call.request.Action;
      const data = call.request.Actiondata;

      if (!data) return callback(null, new ActionResponse({ code: 400, message: "missing request data" }));

      const request: IActionRequest = {
        action: action || "",
        data: {
          channelID: data.channelID || 0,
          channelName: data.channelName || "",
          userID: data.userID || 0,
          username: data.username || "",
          message: data.message || "",
          userinput: data.userinput || "",
        },
      };

      const returnReponse = await handleAction(request);

      callback(null, new ActionResponse({ code: 200, message: returnReponse }));
    },
  };
  server.addService(ActionServiceClient.service, serviceImpl);
  server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    server.start();
    console.log("server running on port", `${host}:${port}`);
  });
}

export default grpcServer;


