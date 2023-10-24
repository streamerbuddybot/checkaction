import { spotifyAPI } from "../grpc/spotify";
import { spotifyRequest } from "../proto/SpotifyAPI";
import spotifyService from "../services/spotify";
import minecraftService from "../services/minecraft";
import checkVariables from "../services/checkVariable";
import { CheckVariableRequest } from "../proto/checkVariable";
import { minecraftRequest } from "../proto/minecraftAPI";
import { minecraftAPI } from "../grpc/minecraft";

export default async function (data: IActionRequest): Promise<string> {
  const action = data.action.split(".")[0];
  const args = data.action.split(".")[1];

  const { channelID, channelName, message, userID, username, userinput } = data.data;

  switch (action) {
    case "spotify":
      const spotifyPayload = new spotifyRequest({ action: args, channelID, message, userID, userinput, username });
      const SpotifyResponse = await spotifyService(spotifyPayload);

      console.log(message);

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

      return checkVariable.message;
    case "minecraft":
      const minecraftPayload = new minecraftRequest({
        action: args,
        channelID,
        message,
        userID,
        userinput,
        username,
      });

   

      const minecraftResponse = await minecraftService(minecraftPayload);

      if (minecraftResponse.status !== 200) {
        console.log(minecraftResponse.toObject());
        return "error";
      }

      const minecraftVariables = new CheckVariableRequest({
        channelID,
        channel: channelName,
        message: minecraftResponse.responseMessage,
        userID: userID.toString(),
        user: username,
      });

      const minecraftVariablesResponse = await checkVariables(minecraftVariables);

      console.log(minecraftVariablesResponse.message);

      if (minecraftVariablesResponse.status !== 200) {
        console.log(minecraftVariablesResponse.toObject());
        return "error";
      }

      return minecraftVariablesResponse.message;
  }

  return "function not found";
}
