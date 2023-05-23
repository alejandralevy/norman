import { Collapse } from "antd";
import styled from "styled-components";

import Bot from "../../types/Bot";

import CollapseButtons from "./CollapseButtons";
import EditBot from "./EditBotForm";
import CollapseDeleteButtons from "./CollapseDeleteButtons";

const CustomCollapse = ({
  bot,
  editingBot,
  selectBot,
  editBot,
  isSelected = false,
  isDeleting = false,
  setIsDeleting,
}: {
  bot: Bot;
  editingBot?: string;
  selectBot: () => void;
  editBot: () => void;
  isSelected: boolean;
  isDeleting: boolean;
  setIsDeleting: () => void;
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
        extra={
          isSelected &&
          (isDeleting ? (
            <CollapseDeleteButtons bot={bot} setIsDeleting={() => setIsDeleting()} />
          ) : (
            <CollapseButtons edit={editBot} setIsDeleting={() => setIsDeleting()} />
          ))
        }
        header={isDeleting ? `Delete: ${bot.name}?` : bot.name}
        showArrow={false}
        onClick={selectBot}
      >
        <EditBot bot={bot} onCancelEdit={editBot} />
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
  ${(props: CustomPanelProps) => (props.$isSelected ? `background: #141414` : "")};
  border: none;
  &:hover,
  &:focus {
    background: #141414};
  }
`;

export default CustomCollapse;
