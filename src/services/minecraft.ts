import { minecraftAPI } from "../grpc/minecraft";
import { minecraftRequest, minecraftResponse } from "../proto/minecraftAPI";

export default async function (payload: minecraftRequest): Promise<minecraftResponse> {
  const response = await new Promise<minecraftResponse>((resolve, reject) => {
    minecraftAPI["SendEvent"](new minecraftRequest(payload), (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (!res) {
          reject("no response data");
          return;
        }
        resolve(res);
      }
    });
  });
  return response;
}
