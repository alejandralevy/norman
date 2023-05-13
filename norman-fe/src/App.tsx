import { Route, Routes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Login from "./pages/Login";
import BotsMessages from "./pages/BotsMessages";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={BotsMessages} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
