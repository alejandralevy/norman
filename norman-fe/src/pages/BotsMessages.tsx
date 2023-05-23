import { Grid, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled, { css, keyframes } from "styled-components";
import { useState } from "react";

import Bot from "../types/Bot";
import ContentChat from "../components/Chat/ChatMessages";
import CreateNewChatButton from "../components/Sider/CreateNewChatButton";
import BotList from "../components/Sider/BotList";

const BotsMessages = () => {
  const [selectedBot, setSelectedBot] = useState<Bot>();
  const [collapsed, setCollapse] = useState(false);
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <AppLayout hasSider>
      <AnimatedSider
        collapsible
        breakpoint="md"
        collapsed={collapsed}
        collapsedWidth="45"
        width={breakpoint.md ? "300px" : "100%"}
        onCollapse={setCollapse}
      >
        {!collapsed && (
          <SiderContentWrapper>
            <CreateNewChatButton setSelectedBot={setSelectedBot} />
            <BotList selectedBot={selectedBot} setSelectedBot={setSelectedBot} />
          </SiderContentWrapper>
        )}
      </AnimatedSider>
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

const AnimatedSider = styled(Sider)`
  .ant-layout-sider-children {
    overflow: hidden;
  }

  ${({ collapsed }) =>
    css`
      .ant-layout-sider-children {
        animation: ${collapsed ? "slideOut" : "slideIn"} 0.3s ease-in-out forwards;
        opacity: ${collapsed ? 0 : 1};
        transform: translateX(${collapsed ? "-100%" : "0"});
      }
    `}

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

const SiderContentWrapper = styled.div`
  height: 100%;
`;

export default BotsMessages;
