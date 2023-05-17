import { styled } from "styled-components";
import Message from "../types/Message";

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  return (
    <MessageContainer key={message.id} message={message}>
      {message.text}
    </MessageContainer>
  );
};

interface MessageBoxProps {
  message: Message;
}

const MessageContainer = styled.div<MessageBoxProps>`
  color: white;
  margin-top: 1rem;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 16px;
  margin: 12px;
  ${(props: MessageBoxProps) =>
    props.message.source === "user"
      ? `background: #141414`
      : "background: #2c2f34"};
`;

export default MessageBox;
