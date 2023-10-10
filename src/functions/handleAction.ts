import { spotifyAPI } from "../grpc/spotify";
import { spotifyRequest } from "../proto/SpotifyAPI";
import spotifyService from "../services/spotify";
import checkVariables from "../services/checkVariable";
import { CheckVariableRequest } from "../proto/checkVariable";

export default async function (data: IActionRequest): Promise<string> {
  const action = data.action.split(".")[0];
  const args = data.action.split(".")[1];

  const { channelID, channelName, message, userID, username, userinput } = data.data;

  switch (action) {
    case "spotify":
      const spotifyPayload = new spotifyRequest({ action: args, channelID, message, userID, userinput });
      const SpotifyResponse = await spotifyService(spotifyPayload);

      console.log(message)

      if (SpotifyResponse.status !== 200) {
        return "error";
      }

      
      const checkVariablePayload = new CheckVariableRequest({
        channelID,
        message: SpotifyResponse.responseMessage,
        userID: userID.toString(),
        user: username,
        channel: channelName,
      });

      const checkVariable = await checkVariables(checkVariablePayload);



      if (checkVariable.status !== 200) {
        console.log(checkVariable.toObject());
        return "error";
      }

      return checkVariable.message
  }

  return "success";
}
