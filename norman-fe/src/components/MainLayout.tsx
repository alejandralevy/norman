import { Layout, Menu, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <AppLayout>
      <Sider trigger={null} collapsible>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "nav 1",
            },
            {
              key: "2",
              label: "nav 2",
            },
            {
              key: "3",
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          <Button>Button</Button>
        </Content>
      </Layout>
    </AppLayout>
  );
};

const AppLayout = styled(Layout)`
  height: 100vh;
`;

export default MainLayout;
