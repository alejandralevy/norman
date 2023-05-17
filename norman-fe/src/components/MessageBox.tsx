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
  padding: 1rem 5rem 1rem 5rem;
  ${(props: MessageBoxProps) =>
    props.message.source === "user"
      ? `background: #0d203d`
      : "background: #364152"};
`;

export default MessageBox;
