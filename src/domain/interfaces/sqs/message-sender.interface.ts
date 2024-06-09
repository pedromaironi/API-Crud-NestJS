export interface MessageSender {
  sendMessage(message: any): Promise<void>;
}
