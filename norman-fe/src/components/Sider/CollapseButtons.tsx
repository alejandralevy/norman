import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const CollapseButtons = ({
  edit,
  setIsDeleting,
}: {
  edit: () => void;
  setIsDeleting: () => void;
}) => {
  return (
    <>
      <DeleteOutlined
        style={{ fontSize: "16px", marginRight: 8 }}
        onClick={(event) => {
          event.stopPropagation();
          setIsDeleting();
        }}
      />
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
