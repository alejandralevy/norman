import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Collapse, Form, Input, Select } from "antd";
import styled from "styled-components";

const EditBot = () => {
  return (
    <div>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name="basic"
        style={{ maxWidth: 600 }}
        wrapperCol={{ span: 16 }}
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
            <Select.Option value="demo">GPT-3.5</Select.Option>
            <Select.Option value="demo">GPT-4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" type="primary">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const CustomCollapse = ({
  id,
  name,
  selectBot,
}: {
  id: string;
  name: string;
  selectBot: (bot: string) => void;
}) => {
  return (
    <Collapse
      key={id}
      bordered={false}
      expandIcon={() => <EditOutlined style={{ fontSize: "16px" }} />}
      expandIconPosition="end"
    >
      <CustomPanel
        key={id}
        collapsible="icon"
        extra={<DeleteOutlined />}
        header={name}
        showArrow={true}
        onClick={() => selectBot(name)}
      >
        <EditBot />
      </CustomPanel>
    </Collapse>
  );
};

const CustomPanel = styled(Collapse.Panel)`
  margin-bottom: 1rem;
  border: none;
`;

export default CustomCollapse;
