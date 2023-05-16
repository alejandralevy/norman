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

  return (
    <AppLayout>
      <Sider collapsible trigger={null} width="300">
        <CreateNewChatButton />
        <BotList selectedBot={selectedBot} setSelectedBot={setSelectedBot} />
      </Sider>
      <Layout>
        <ContentChat botName={selectedBot?.name} />
      </Layout>
    </AppLayout>
  );
};

const AppLayout = styled(Layout)`
  height: 100vh;
`;

export default BotsMessages;
