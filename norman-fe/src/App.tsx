import { Route, Routes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import BotsMessages from "./pages/BotsMessages";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#5F91DC",
            colorPrimaryBg: "#5F91DC",
            colorBgLayout: "#27252a",
            boxShadow: "0 2px 0 #5F91DC",
          },
          components: {
            Layout: {
              colorBgHeader: "#081426",
            },
            Button: {
              colorBgBase: "#5F91DC",
              colorPrimary: "#5F91DC",
              colorPrimaryBg: "#5F91DC",
              colorBorder: "#5F91DC",
              boxShadow: "0 0px 0 #5F91DC",
            },
            Collapse: {
              colorBgContainer: "#4a00fa",
              colorBgLayout: "#4a00fa",
              colorPrimary: "#4a00fa",
              colorBgBase: "#4a00fa",
              colorBgTextHover: "#4a00fa",
            },
          },
        }}
      >
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={BotsMessages} path="/" />
        </Routes>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
