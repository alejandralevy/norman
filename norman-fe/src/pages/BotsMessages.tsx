import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { useState } from "react";

import Bot from "../types/Bot";
import ContentChat from "../components/Chat/ChatMessages";
import CreateNewChatButton from "../components/Sider/CreateNewChatButton";
import BotList from "../components/Sider/BotList";

const BotsMessages = () => {
  const [selectedBot, setSelectedBot] = useState<Bot>();

  return (
    <AppLayout hasSider>
      <Sider width="300">
        <CreateNewChatButton setSelectedBot={setSelectedBot} />
        <BotList selectedBot={selectedBot} setSelectedBot={setSelectedBot} />
      </Sider>
      <Layout>
        <ContentChat bot={selectedBot} />
      </Layout>
    </AppLayout>
  );
};

const AppLayout = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`;

export default BotsMessages;
