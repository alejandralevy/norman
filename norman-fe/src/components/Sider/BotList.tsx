import { useState } from "react";

import { useBots } from "../../services/bots";
import Bot from "../../types/Bot";
import Loader from "../Common/Loader";

import CustomCollapse from "./CustomCollapse";

const BotList = ({
  selectedBot,
  setSelectedBot,
}: {
  selectedBot: any;
  setSelectedBot: (bot: Bot) => void;
}) => {
  const [editingBot, setEditingBot] = useState<Bot>();
  const [isDeleting, setIsDeleting] = useState<Bot>();
  const { data, isError, isLoading } = useBots();

  function editBot(bot: Bot) {
    if (bot.id !== editingBot?.id) {
      setEditingBot(bot);
      setSelectedBot(bot);
    } else if (bot.id === editingBot?.id) {
      setEditingBot(undefined);
    } else {
      setEditingBot(bot);
    }
  }

  function selectBot(bot: Bot) {
    setSelectedBot(bot);
    if (bot?.id !== editingBot?.id) {
      setEditingBot(undefined);
      setIsDeleting(undefined);
    }
  }

  function onChangeIsDeleting(bot: Bot) {
    if (bot.id === editingBot?.id) {
      setEditingBot(undefined);
    }
    if (bot.id === isDeleting?.id || bot.id !== selectedBot?.id) {
      setIsDeleting(undefined);
    } else {
      setIsDeleting(bot);
    }
  }

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
