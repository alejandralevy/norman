import { Layout, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

import Bot from "../types/Bot";

import ContentChat from "../components/ContentChat";
import CustomCollapse from "../components/CustomCollapse";

const bots: Bot[] = [
  { id: "1", name: "Bot 1", model: "GPT-4" },
  { id: "2", name: "Bot 2", model: "GPT-3.5" },
  { id: "3", name: "Bot 3", model: "GPT-4" },
];

const BotsMessages = () => {
  let [selectedBot, setSelectedBot] = useState<Bot>();
  let [editingBot, setEditingBot] = useState<Bot>();

  function editBot(bot: Bot) {
    debugger;
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
    <AppLayout>
      <Sider collapsible trigger={null} width="300">
        <Box>
          <Button icon={<PlusOutlined />}>New chat</Button>
        </Box>
        {bots.map((bot) => (
          <CustomCollapse
            key={bot.id}
            bot={bot}
            editBot={() => editBot(bot)}
            editingBot={editingBot?.id}
            selectBot={() => selectBot(bot)}
            isSelected={selectedBot?.id === bot.id}
          />
        ))}
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export default BotsMessages;
