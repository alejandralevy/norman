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
            colorBgLayout: "#222327",
            boxShadow: "0 2px 0 #5F91DC",
          },
          components: {
            Layout: {
              colorBgHeader: "#000",
            },
            Button: {
              colorBgBase: "#5F91DC",
              colorPrimary: "#5F91DC",
              colorPrimaryBg: "#5F91DC",
              colorBorder: "#5F91DC",
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
