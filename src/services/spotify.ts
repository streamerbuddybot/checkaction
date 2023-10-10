import { spotifyAPI } from "../grpc/spotify";
import { spotifyRequest, spotifyResponse } from "../proto/SpotifyAPI";

export default async function (payload: spotifyRequest): Promise<spotifyResponse> {
  const response = await new Promise<spotifyResponse>((resolve, reject) => {
    spotifyAPI["SendEvent"](new spotifyRequest(payload), (err, res) => {
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
