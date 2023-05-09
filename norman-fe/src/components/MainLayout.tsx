import React from "react";
import { Layout, Sider, Menu } from "antd";

const MainLayout = () => {
  return (
    <Layout>
      <Sider trigger={null} collapsible lapsed>
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
        {/* <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
