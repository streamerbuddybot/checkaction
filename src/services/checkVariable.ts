import { checkVariable } from "../grpc/checkVariable";
import { CheckVariableResponse, CheckVariableRequest } from "../proto/checkVariable";

export default async function (payload: CheckVariableRequest): Promise<CheckVariableResponse> {
  const response = await new Promise<CheckVariableResponse>((resolve, reject) => {
    checkVariable["checkVariable"](new CheckVariableRequest(payload), (err, res) => {
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