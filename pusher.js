import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_PUB_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});
export const clientPusher = new ClientPusher("058012a1e7fe47fcf384", {
  cluster: "us2",
  forceTLS: true,
});
