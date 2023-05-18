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
