export interface MessageReceiver {
  receiveMessages(): Promise<void>;
}
