import MainLayout from "./components/MainLayout";
import { ConfigProvider, theme } from 'antd';

function App() {
  return <ConfigProvider
  theme={{
    algorithm: theme.darkAlgorithm,
  }}>
  <MainLayout />
</ConfigProvider>;
}

export default App;
