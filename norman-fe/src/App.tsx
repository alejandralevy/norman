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
