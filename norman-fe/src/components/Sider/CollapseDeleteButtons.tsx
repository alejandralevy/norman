import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import Bot from "../../types/Bot";
import { useDeleteBot } from "../../services/bots";

const CollapseDeleteButtons = ({ bot, setIsDeleting }: { bot: Bot; setIsDeleting: () => void }) => {
  const deleteBot = useDeleteBot();

  function deleteAction() {
    deleteBot.mutate(bot);
  }

  return (
    <>
      <CheckOutlined
        style={{ fontSize: "16px", marginRight: 8 }}
        onClick={(event) => {
          event.stopPropagation();
          deleteAction();
        }}
      />
      <CloseOutlined
        style={{ fontSize: "16px" }}
        onClick={(event) => {
          event.stopPropagation();
          setIsDeleting();
        }}
      />
    </>
  );
};

export default CollapseDeleteButtons;
