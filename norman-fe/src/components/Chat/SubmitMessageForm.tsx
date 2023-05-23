import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { Button, Form } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { styled } from "styled-components";
import Loader from "../Common/Loader";

interface SubmitMessageFormProps {
  sendMessage: any;
  form: any;
}

const SubmitMessageForm: React.FC<SubmitMessageFormProps> = ({
  sendMessage,
  form,
}) => {
  const [message, setMessage] = useState("");
  function submitHandler(message: any) {
    sendMessage.mutate(message.content, {
      onSuccess: () => {
        form.resetFields();
      },
    });
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && e.shiftKey) {
      const updatedMessage = message + "\n";
      setMessage(updatedMessage);
    } else {
      form.submit();
    }
  };

  return (
    <CustomForm form={form} onFinish={submitHandler}>
      <Form.Item
        label=""
        name="content"
        style={{ flexGrow: 1, marginBottom: 0 }}
      >
        <TextArea
          autoSize={{ minRows: 2, maxRows: 4 }}
          disabled={sendMessage.isLoading}
          placeholder="Write your message"
          size="large"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPressEnter={handleKeyDown}
        />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 0, display: "flex", alignItems: "center" }}
      >
        <Button
          htmlType="submit"
          icon={sendMessage.isLoading ? <Loader /> : <SendOutlined />}
          style={{ marginBottom: 0 }}
          type="link"
        />
      </Form.Item>
      {sendMessage.isError && (
        <div style={{ color: "red" }}>Something failed</div>
      )}
    </CustomForm>
  );
};

const CustomForm = styled(Form)`
  width: 100%;
  padding: 4px 32px 16px 32px;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  box-shadow: 0px 0px 32px 32px #222327;
`;

export default SubmitMessageForm;
