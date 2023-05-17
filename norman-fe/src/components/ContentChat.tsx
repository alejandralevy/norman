import { Content } from "antd/es/layout/layout";
import Bot from "../types/Bot";
import NoBotSelected from "./NoBotSelected";

const ContentChat = ({ bot }: { botName: Bot | undefined }) => {
  return (
    <Content
      style={{
        minHeight: 280,
      }}
    >
      <div>{!bot?.botName ? <NoBotSelected /> : bot?.botName}</div>
    </Content>
  );
};

export default ContentChat;
