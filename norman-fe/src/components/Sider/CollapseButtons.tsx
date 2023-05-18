import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const CollapseButtons = ({ edit }: { edit: () => void }) => {
  return (
    <>
      <DeleteOutlined style={{ fontSize: "16px", marginRight: 8 }} />
      <EditOutlined
        style={{ fontSize: "16px" }}
        onClick={(event) => {
          event.stopPropagation();
          edit();
        }}
      />
    </>
  );
};

export default CollapseButtons;
