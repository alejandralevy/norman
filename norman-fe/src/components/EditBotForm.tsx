import { Button, Form, Input, Select } from "antd";

import Bot from "../types/Bot";

const EditBotForm = ({ bot }: { bot: Bot }) => {
  return (
    <div>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name="basic"
      >
        <Form.Item
          initialValue={bot.name}
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item initialValue={bot.description} label="Description" name="Description">
          <Input />
        </Form.Item>

        <Form.Item label="Model">
          <Select placeholder={bot.model}>
            <Select.Option value="GPT-3.5">GPT-3.5</Select.Option>
            <Select.Option value="GPT-4">GPT-4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button htmlType="submit" type="primary">
            Save
          </Button>
          <Button htmlType="submit" type="ghost">
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditBotForm;
