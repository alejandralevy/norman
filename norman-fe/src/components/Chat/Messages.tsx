import { Alert, Form, Skeleton, Typography } from "antd";
import { styled } from "styled-components";
import { useEffect, useRef } from "react";
import lodash from "lodash";

import Bot from "../../types/Bot";
import { useMessage, useMutateMessage } from "../../services/messages";
import Message from "../../types/Message";

import MessageBox from "./MessageItem";
import SubmitMessageForm from "./SubmitMessageForm";

const BotSelectedChat = ({ bot }: { bot: Bot }) => {
  const messages = useMessage(bot.id);
  const messagesContainer = useRef<HTMLDivElement>(null);
  const sendMessage = useMutateMessage(bot.id);
  const [form] = Form.useForm();

  const { Title, Text } = Typography;

  useEffect(() => {
    messagesContainer.current?.scrollTo(0, messagesContainer.current?.scrollHeight);
  }, [messages.data, sendMessage.isLoading]);

  if (messages.isLoading) {
    return (
      <MessagesContent>
        <Skeleton active style={{ padding: "1rem 1rem 0rem 1rem" }} />;
        <Skeleton active style={{ padding: "1rem 1rem 0rem 1rem" }} />;
        <Skeleton active style={{ padding: "1rem 1rem 0rem 1rem" }} />;
      </MessagesContent>
    );
  }

  if (messages.isError) {
    return (
      <Alert
        showIcon
        description="There was an error, please retry."
        message="Opps!"
        style={{ margin: "2rem" }}
        type="error"
      />
    );
  }

  const getEmptyMesages = () => {
    return (
      <>
        <Container>
          <MiddleDiv>
            <Title>No messages here</Title>
            <Text>Type a message to start the conversation</Text>
          </MiddleDiv>
        </Container>
      </>
    );
  };

  return (
    <ChatPanel>
      <MessagesContent ref={messagesContainer}>
        {messages.data.length || sendMessage.isLoading
          ? lodash.sortBy(messages.data, "created_at").map((message: Message) => {
              return <MessageBox key={message.id} message={message} />;
            })
          : getEmptyMesages()}
        {sendMessage.isLoading && (
          <>
            <MessageBox
              message={{
                text: sendMessage.variables,
                id: -2,
                source: "user",
              }}
            />
            <MessageBox
              loading
              message={{
                text: "",
                id: -1,
                source: "bot",
              }}
            />
          </>
        )}
      </MessagesContent>
      <SubmitMessageForm form={form} sendMessage={sendMessage} />
    </ChatPanel>
  );
};

const ChatPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessagesContent = styled.div`
  overflow: scroll;
  height: -webkit-fill-available;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  align-items: center;
  height: 100%;
`;

const MiddleDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default BotSelectedChat;
