import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { useState } from "react";

import Bot from "../types/Bot";
import ContentChat from "../components/ContentChat";
import CreateNewChatButton from "../components/CreateNewChatButton";
import BotList from "../components/BotList";

const BotsMessages = () => {
  const [selectedBot, setSelectedBot] = useState<Bot>();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AppLayout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        width="300"
        onCollapse={(value) => setCollapsed(value)}
      >
        <CreateNewChatButton />
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
