import { PlusOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import { styled } from "styled-components";
import { useState } from "react";
import { blue } from "@ant-design/colors";

import CreateBotForm from "./CreateBotForm";

const CreateNewChatButton = () => {
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
          background: "#00000000",
        }}
        onChange={(actives) => setIsActive(actives.length > 0)}
      >
        <CustomPanel
          key={-1}
          $isActive={isActive}
          header={
            <Box $isActive={isActive}>
              <Button icon={<PlusOutlined />}>New chat</Button>
            </Box>
          }
          showArrow={false}
        >
          <CreateBotForm closeAction={() => setIsActive(false)} />
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
`;

const CustomPanel = styled(Collapse.Panel)<BoxProps>`
  ${(props: BoxProps) => (props.$isActive ? `background: ${blue[8]}` : "")};
`;

export default CreateNewChatButton;
