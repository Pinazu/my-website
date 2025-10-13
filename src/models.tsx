export type WebSocketData = {
  createdAt: number;
  channelId: string;
  authToken: string;
};

export type MessageData = {
  channelId: string;
  message: string;
  userId: string;
}

export type UserData = {
  id: string
}