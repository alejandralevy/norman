import { Collapse } from "antd";
import styled from "styled-components";
import { blue } from "@ant-design/colors";

import Bot from "../types/Bot";

import CollapseButtons from "./CollapseButtons";
import EditBot from "./EditBot";

const CustomCollapse = ({
  bot,
  editingBot,
  selectBot,
  editBot,
  isSelected,
}: {
  bot: Bot;
  editingBot?: string;
  selectBot: () => void;
  editBot: () => void;
  isSelected: boolean;
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
        extra={isSelected && <CollapseButtons edit={editBot} />}
        header={bot.name}
        isSelected={isSelected}
        showArrow={false}
        onClick={selectBot}
      >
        <EditBot bot={bot} onCancelEdit={editBot}/>
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
