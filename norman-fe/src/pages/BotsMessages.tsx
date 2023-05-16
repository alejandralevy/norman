import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { useState } from "react";

import Bot from "../types/Bot";
import ContentChat from "../components/ContentChat";
import CustomCollapse from "../components/CustomCollapse";
import CreateNewChatButton from "../components/CreateNewChatButton";

const bots: Bot[] = [
  { id: "1", name: "Bot 1", model: "GPT-4" },
  { id: "2", name: "Bot 2", model: "GPT-3.5" },
  { id: "3", name: "Bot 3", model: "GPT-4" },
];

const BotsMessages = () => {
  let [selectedBot, setSelectedBot] = useState<Bot>();
  let [editingBot, setEditingBot] = useState<Bot>();
  const [collapsed, setCollapsed] = useState(false);

  function editBot(bot: Bot) {
    if (bot.id !== editingBot?.id) {
      setEditingBot(bot);
      setSelectedBot(bot);
    } else if (bot.id === editingBot?.id) {
      setEditingBot(undefined);
    } else {
      setEditingBot(bot);
    }
  }

  function selectBot(bot: Bot) {
    setSelectedBot(bot);
    if (bot?.id !== editingBot?.id) {
      setEditingBot(undefined);
    }
  }

  return (
    <AppLayout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width="300"
      >
        <CreateNewChatButton />
        <BotList>
          {bots.map((bot) => (
            <CustomCollapse
              key={bot.id}
              bot={bot}
              editBot={() => editBot(bot)}
              editingBot={editingBot?.id}
              isSelected={selectedBot?.id === bot.id}
              selectBot={() => selectBot(bot)}
            />
          ))}
        </BotList>
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

const BotList = styled.div`
  margin-top: 1rem;
`;

export default BotsMessages;
