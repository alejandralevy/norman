import { Button, Form, Input, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

import Bot from "../types/Bot";
import { useMessage, useMutateMessage } from "../services/messages";
import Message from "../types/Message";
import TextArea from "antd/es/input/TextArea";
import MessageBox from "./MessageBox";

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
    <MessagesContainer>
      <MessagesContent>
        {messages.data.map((message: Message) => {
          return <MessageBox message={message} />;
        })}
      </MessagesContent>
      <CustomForm form={form} onFinish={submitHandler}>
        <Form.Item
          label=""
          name="content"
          style={{ flexGrow: 1, marginBottom: 0 }}
        >
          <TextArea
            placeholder="Write your message"
            size="large"
            autoSize={{ minRows: 2, maxRows: 4 }}
            onPressEnter={(event) => submitHandler(event.target?.value)}
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 0, display: "flex", alignItems: "center" }}
        >
          {sendMessage.isLoading ? (
            <Button type="primary" style={{ marginBottom: 0 }}>
              <Spin />
            </Button>
          ) : (
            <Button
              htmlType="submit"
              icon={<SendOutlined />}
              type="link"
              style={{ marginBottom: 0 }}
            />
          )}
        </Form.Item>
        {sendMessage.isError && (
          <div style={{ color: "red" }}>Something failed</div>
        )}
      </CustomForm>
    </MessagesContainer>
  );
};

const CustomForm = styled(Form)`
  width: 100%;
  padding: 4px 32px 32px 32px;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  box-shadow: 0px 0px 32px 32px #222327;
`;

const MessagesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessagesContent = styled.div`
  overflow: scroll;
`;


export default BotSelectedChat;
