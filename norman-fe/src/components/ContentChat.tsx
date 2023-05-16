import { Content } from "antd/es/layout/layout";
import NoBotSelected from "./NoBotSelected";

const ContentChat = ({ botName }: { botName: string | undefined }) => {
  return (
    <Content
      style={{
        padding: 24,
        minHeight: 280,
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "blue",
        }}
      >
        {!botName ? <NoBotSelected/> : botName}
      </div>
    </Content>
  );
};

export default ContentChat;
