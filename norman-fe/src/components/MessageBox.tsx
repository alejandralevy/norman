import { CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { styled } from "styled-components";
import Message from "../types/Message";
import dracula from "../styles/dracula";

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  const codeStyles: { [key: string]: CSSProperties } = {
    ...dracula,
  };
  return (
    <MessageContainer key={message.id} message={message}>
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={codeStyles as any}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {message.text}
      </ReactMarkdown>
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
