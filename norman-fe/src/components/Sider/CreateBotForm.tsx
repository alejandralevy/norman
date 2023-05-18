import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Spin } from "antd";
import { styled } from "styled-components";

import { useMutateBots } from "../../services/bots";

const CreateBotForm = ({ closeAction }: { closeAction: () => void }) => {
  const { mutate, isError, isLoading } = useMutateBots();
  const [form] = Form.useForm();

  function submitHandler(newBot: any) {
    mutate(newBot, {
      onSuccess: () => {
        closeAndReset();
      },
    });
  }

  function closeAndReset() {
    form.resetFields();
    closeAction();
  }

  return (
    <>
      <CancelButtonContainer>
        <Button type="text" onClick={closeAndReset}>
          X
        </Button>
      </CancelButtonContainer>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name="basic"
        onFinish={submitHandler}
      >
        <Form.Item
          initialValue={""}
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item initialValue={""} label="Description" name="description">
          <Input />
        </Form.Item>

        <Form.Item label="Model" name="model">
          <Select>
            <Select.Option value="GPT-3.5">GPT-3.5</Select.Option>
            <Select.Option value="GPT-4">GPT-4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <CreateButtonContainer>
            {isLoading ? (
              <Spin />
            ) : (
              <Button htmlType="submit" icon={<PlusOutlined />} type="primary">
                Create new chat
              </Button>
            )}
          </CreateButtonContainer>
        </Form.Item>
      </Form>
    </>
  );
};

const CreateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default CreateBotForm;
