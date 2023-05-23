import { PlusOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import { styled } from "styled-components";
import { useState } from "react";

import Bot from "../../types/Bot";

import CreateBotForm from "./CreateBotForm";

const CreateNewChatButton = ({ selectBot }: { selectBot: (bot: Bot) => void }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Collapse
        key={-1}
        activeKey={isActive ? -1 : 0}
        bordered={false}
        expandIconPosition="end"
        style={{
          borderRadius: 0,
          background: "#000",
        }}
        onChange={(actives) => setIsActive(actives.length > 0)}
      >
        <CustomPanel
          key={-1}
          $isActive={isActive}
          header={
            <Box $isActive={isActive}>
              <Button icon={<PlusOutlined />} type="primary">
                New chat
              </Button>
            </Box>
          }
          showArrow={false}
        >
          <CreateBotForm closeAction={() => setIsActive(false)} setSelectedBot={selectBot} />
        </CustomPanel>
      </Collapse>
    </>
  );
};

interface BoxProps {
  $isActive: boolean;
}

const Box = styled.div<BoxProps>`
  ${(props: BoxProps) => (props.$isActive ? `display: none` : `display: flex`)};
  flex-direction: column;
  justify-content: center;
  padding: 4px;
`;

const CustomPanel = styled(Collapse.Panel)<BoxProps>`
  ${(props: BoxProps) => (props.$isActive ? `background: #141414` : "")};
  padding: 0;
`;

export default CreateNewChatButton;
