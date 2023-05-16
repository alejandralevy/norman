import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { styled } from "styled-components";

const CreateBotForm = ({ closeAction }: { closeAction: () => void }) => {
  return (
    <>
      <CancelButtonContainer>
        <Button type="text" onClick={closeAction}>
          X
        </Button>
      </CancelButtonContainer>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name="basic"
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="Description">
          <Input />
        </Form.Item>

        <Form.Item label="Model">
          <Select>
            <Select.Option value="GPT-3.5">GPT-3.5</Select.Option>
            <Select.Option value="GPT-4">GPT-4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <CreateButtonContainer>
            <Button htmlType="submit" type="primary" icon={<PlusOutlined />}>
              Create new chat
            </Button>
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
  margin-bottom: 1rem;
`;

export default CreateBotForm;
