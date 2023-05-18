import { Content } from "antd/es/layout/layout";

import Bot from "../../types/Bot";

import NoBotSelected from "./NoBotSelected";
import BotSelectedChat from "./Messages";

const ContentChat = ({ bot }: { bot: Bot | undefined }) => {
  return (
    <Content>
      {!bot ? <NoBotSelected /> : <BotSelectedChat bot={bot} />}
    </Content>
  );
};

export default ContentChat;
