import { Content } from "antd/es/layout/layout";
import NoBotSelected from "./NoBotSelected";

const ContentChat = ({ botName }: { botName: string | undefined }) => {
  return (
    <Content
      style={{
        minHeight: 280,
      }}
    >
      <div>{!botName ? <NoBotSelected /> : botName}</div>
    </Content>
  );
};

export default ContentChat;
