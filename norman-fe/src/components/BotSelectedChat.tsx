import { Button, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

import Bot from "../types/Bot";
import { useMessage, useMutateMessage } from "../services/messages";
import Message from "../types/Message";

const BotSelectedChat = ({ bot }: { bot: Bot }) => {
  const { data, isError, isLoading } = useMessage(bot.id);
  const { mutate } = useMutateMessage(bot.id);

  function submitHandler(message: any) {
    mutate(message);
  }

  if (isLoading) {
    return <>Error</>;
  }

  if (isError) {
    return <>Error</>;
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {data.map((message: Message) => {
        return <MessageBox key={message.id}>{message.text}</MessageBox>;
      })}
      <CustomForm onFinish={submitHandler}>
        <Form.Item
          label="Message"
          name="content"
          rules={[{ required: true, message: "Please input the message!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button htmlType="submit" icon={<SendOutlined />} type="primary">
            Send
          </Button>
        </Form.Item>
      </CustomForm>
    </div>
  );
};

const CustomForm = styled(Form)`
  width: 100%;
  margin-bottom: 0;
  margin-top: auto;
  padding: 0 5rem 0 5rem;
`;

const MessageBox = styled.div`
  color: white;
  margin-top: 1rem;
  padding: 1rem 5rem 1rem 5rem;
  background: gray;
`;

export default BotSelectedChat;
