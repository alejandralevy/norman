import { Button, Form, Input, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

import Bot from "../types/Bot";
import { useMessage, useMutateMessage } from "../services/messages";
import Message from "../types/Message";
import TextArea from "antd/es/input/TextArea";

const BotSelectedChat = ({ bot }: { bot: Bot }) => {
  const messages = useMessage(bot.id);
  const sendMessage = useMutateMessage(bot.id);
  const [form] = Form.useForm();

  function submitHandler(message: any) {
    sendMessage.mutate(message, {
      onSuccess: () => {
        form.resetFields();
      },
    });
  }

  if (messages.isLoading) {
    return <>Error</>;
  }

  if (messages.isError) {
    return <>Error</>;
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {messages.data.map((message: Message) => {
        return <MessageBox key={message.id}>{message.text}</MessageBox>;
      })}
      <CustomForm form={form} onFinish={submitHandler}>
        <Form.Item label="" name="content" style={{ flexGrow: 1 }}>
          <TextArea
            placeholder="Write your message"
            size="large"
            autoSize={{ minRows: 1, maxRows: 4 }}
            onPressEnter={(event) => submitHandler(event.target?.value)}
          />
        </Form.Item>
        <Form.Item>
          {sendMessage.isLoading ? (
            <Button type="primary">
              <Spin />
            </Button>
          ) : (
            <Button htmlType="submit" icon={<SendOutlined />} type="primary">
              Send
            </Button>
          )}
        </Form.Item>
        {sendMessage.isError && (
          <div style={{ color: "red" }}>Something failed</div>
        )}
      </CustomForm>
    </div>
  );
};

const CustomForm = styled(Form)`
  width: 100%;
  margin-bottom: 0;
  margin-top: auto;
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
`;

const MessageBox = styled.div`
  color: white;
  margin-top: 1rem;
  padding: 1rem 5rem 1rem 5rem;
  background: gray;
`;

export default BotSelectedChat;
