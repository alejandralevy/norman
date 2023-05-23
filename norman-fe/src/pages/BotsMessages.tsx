import { Grid, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled, { css } from "styled-components";
import { useState } from "react";

import Bot from "../types/Bot";
import ContentChat from "../components/Chat/ChatMessages";
import CreateNewChatButton from "../components/Sider/CreateNewChatButton";
import BotList from "../components/Sider/BotList";
import FilterInput from "../components/Sider/FilterInput";

const BotsMessages = () => {
  const [selectedBot, setSelectedBot] = useState<Bot>();
  const [filterInput, setFilterInput] = useState("");
  const [collapsed, setCollapse] = useState(false);
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  const onFilter = (e: any) => {
    setFilterInput(e.target?.value);
  };

  return (
    <AppLayout hasSider>
      <AnimatedSider
        width={breakpoint.md ? "300px" : "100%"}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapse}
        breakpoint="md"
        collapsedWidth="45"
      >
        {!collapsed && (
          <SiderContentWrapper>
            <BotsContainer>
              <CreateNewChatButton />
              <BotList
                selectedBot={selectedBot}
                setSelectedBot={setSelectedBot}
                filter={filterInput}
              />
            </BotsContainer>
            <FilterInput value={filterInput} onFilter={onFilter} />
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
    '&: ant-layout-sider-trigger: {
      background-color: red;
    }
  }

  ${({ collapsed }) =>
    css`
      .ant-layout-sider-children {
        animation: ${collapsed ? "slideOut" : "slideIn"} 0.3s ease-in-out
          forwards;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  height: 100%;
`;

const BotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export default BotsMessages;
