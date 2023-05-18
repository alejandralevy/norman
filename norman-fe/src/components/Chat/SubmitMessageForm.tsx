import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Button, Form, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

import { useMutateMessage } from "../../services/messages";
import Bot from "../../types/Bot";

interface SubmitMessageFormProps {
  bot: Bot;
}

const SubmitMessageForm: React.FC<SubmitMessageFormProps> = ({ bot }) => {
  const sendMessage = useMutateMessage(bot.id);
  const [form] = Form.useForm();

  function submitHandler(message: any) {
    sendMessage.mutate(message, {
      onSuccess: () => {
        form.resetFields();
      },
    });
  }

  return (
    <CustomForm form={form} onFinish={submitHandler}>
      <Form.Item label="" name="content" style={{ flexGrow: 1, marginBottom: 0 }}>
        <TextArea
          autoSize={{ minRows: 2, maxRows: 4 }}
          placeholder="Write your message"
          size="large"
          onPressEnter={(event) => submitHandler(event.target?.value)}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 0, display: "flex", alignItems: "center" }}>
        {sendMessage.isLoading ? (
          <Button style={{ marginBottom: 0 }} type="primary">
            <Spin />
          </Button>
        ) : (
          <Button
            htmlType="submit"
            icon={<SendOutlined />}
            style={{ marginBottom: 0 }}
            type="link"
          />
        )}
      </Form.Item>
      {sendMessage.isError && <div style={{ color: "red" }}>Something failed</div>}
    </CustomForm>
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

export default SubmitMessageForm;
