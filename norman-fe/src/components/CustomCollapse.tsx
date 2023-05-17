import { Collapse } from "antd";
import styled from "styled-components";

import Bot from "../types/Bot";

import CollapseButtons from "./CollapseButtons";
import EditBot from "./EditBotForm";

const CustomCollapse = ({
  bot,
  editingBot,
  selectBot,
  editBot,
  isSelected = false,
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
        $isSelected={isSelected}
        collapsible="icon"
        extra={isSelected && <CollapseButtons edit={editBot} />}
        header={bot.name}
        showArrow={false}
        onClick={selectBot}
      >
        <EditBot bot={bot} onCancelEdit={editBot}/>
      </CustomPanel>
    </Collapse>
  );
};

interface CustomPanelProps {
  $isSelected: boolean;
  onClick: () => void;
}

const CustomPanel = styled(Collapse.Panel)<CustomPanelProps>`
  margin-bottom: 1rem;
  ${(props: CustomPanelProps) =>
    props.$isSelected ? `background: #0d203d` : ""};
  border: none;
  &:hover,
  &:focus {
    background: #0d203d};
  }
`;

export default CustomCollapse;
