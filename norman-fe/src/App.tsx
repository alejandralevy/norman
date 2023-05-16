import { Route, Routes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Login from "./pages/Login";
import BotsMessages from "./pages/BotsMessages";

function App() {
  return (
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
        <Route path="/login" Component={Login} />
        <Route path="/" Component={BotsMessages} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
