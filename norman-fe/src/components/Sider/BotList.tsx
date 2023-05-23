import { useState } from "react";

import { useBots } from "../../services/bots";
import Bot from "../../types/Bot";
import Loader from "../Common/Loader";

import CustomCollapse from "./CustomCollapse";

const BotList = ({
  selectedBot,
  selectBot,
  editBot,
  editingBot,
  isDeleting,
  onChangeIsDeleting,
}: {
  isDeleting: Bot | undefined;
  editingBot: Bot | undefined;
  editBot: (bot: Bot) => void;
  selectedBot: Bot | undefined;
  selectBot: (bot: Bot) => void;
  onChangeIsDeleting: (bot: Bot) => void;
}) => {
  const { data, isError, isLoading } = useBots();

  if (isError) {
    return <>Error</>;
  }

  if (isLoading) {
    return <Loader text="Loading bots..." />;
  }

  return (
    <div
      style={{
        marginTop: "1rem",
        overflow: "auto",
        height: "100%",
        paddingBottom: "3rem",
      }}
    >
      {data.map((bot: Bot) => (
        <CustomCollapse
          key={bot.id}
          bot={bot}
          editBot={() => editBot(bot)}
          editingBot={editingBot?.id}
          isDeleting={isDeleting?.id === bot.id}
          isSelected={selectedBot?.id === bot.id}
          selectBot={() => selectBot(bot)}
          setIsDeleting={() => onChangeIsDeleting(bot)}
        />
      ))}
    </div>
  );
};

export default BotList;
