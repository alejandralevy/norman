import { Collapse } from "antd";
import styled from "styled-components";
import { blue } from "@ant-design/colors";

import Bot from "../types/Bot";

import CollapseButtons from "./CollapseButtons";
import EditBot from "./EditBot";

const CustomCollapse = ({
  bot,
  selectedBot,
  editingBot,
  selectBot,
  editBot,
}: {
  bot: Bot;
  selectedBot?: string;
  editingBot?: string;
  selectBot: () => void;
  editBot: () => void;
}) => {
  return (
    <Collapse
      key={bot.id}
      activeKey={editingBot}
      bordered={false}
      expandIconPosition="end"
      style={{
        borderRadius: 0,
      }}
    >
      <CustomPanel
        key={bot.id}
        collapsible="icon"
        extra={<CollapseButtons edit={() => editBot()} />}
        header={bot.name}
        isSelected={bot.id === selectedBot}
        showArrow={false}
        onClick={() => selectBot()}
      >
        <EditBot bot={bot} />
      </CustomPanel>
    </Collapse>
  );
};

interface CustomPanelProps {
  isSelected: boolean;
}

const CustomPanel = styled(Collapse.Panel)<CustomPanelProps>`
  margin-bottom: 1rem;
  ${(props: CustomPanelProps) => (props.isSelected ? `background: ${blue[9]}` : "")};
  border: none;
  &:hover,
  &:focus {
    background: ${blue[9]};
  }
`;

export default CustomCollapse;
