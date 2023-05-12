import { Layout, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

import ContentChat from "./ContentChat";
import CustomCollapse from "./CustomCollapse";

const MainLayout = () => {
  let [bot, setBot] = useState("Home");

  return (
    <AppLayout>
      <Sider collapsible trigger={null} width="300">
        <Box>
          <Button icon={<PlusOutlined />}>New chat</Button>
        </Box>
        {/* <p style={{ color: "white", textAlign: "center" }}>Your chats list</p> */}
        <CustomCollapse id="1" name="Bot 1" selectBot={() => setBot("Bot 1")} />
        <CustomCollapse id="2" name="Bot 2" selectBot={() => setBot("Bot 2")} />
        <CustomCollapse id="3" name="Bot 3" selectBot={() => setBot("Bot 3")} />
      </Sider>
      <Layout>
        <ContentChat botName={bot} />
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

export default MainLayout;
