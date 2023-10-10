interface IActionRequest {
  action: string;
  data: {
    channelID: number;
    userID: number;
    userinput: string
    message: string;
    channelName: string;
    username: string;
  };
}