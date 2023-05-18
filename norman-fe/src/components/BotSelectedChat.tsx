import { Typography } from "antd";
import { styled } from "styled-components";

import Bot from "../types/Bot";
import { useMessage } from "../services/messages";
import Message from "../types/Message";

import MessageBox from "./MessageBox";
import SubmitMessageForm from "./SubmitMessageForm";

const BotSelectedChat = ({ bot }: { bot: Bot }) => {
  const messages = useMessage(bot.id);
  const { Title, Text } = Typography;

  if (messages.isLoading) {
    return <>Error</>;
  }

  if (messages.isError) {
    return <>Error</>;
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
      <MessagesContent>
        {messages.data.length
          ? messages.data.map((message: Message) => {
              return <MessageBox message={message} />;
            })
          : getEmptyMesages()}
      </MessagesContent>
      <SubmitMessageForm bot={bot} />
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
