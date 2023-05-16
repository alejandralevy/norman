import { useState } from "react";

import { useBots } from "../services/bots";
import CustomCollapse from "../components/CustomCollapse";
import Bot from "../types/Bot";

const BotList = ({
  selectedBot,
  setSelectedBot,
}: {
  selectedBot: any;
  setSelectedBot: (bot: Bot) => void;
}) => {
  const [editingBot, setEditingBot] = useState<Bot>();

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
    }
  }

  if (isError) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      {data.map((bot: Bot) => (
        <CustomCollapse
          key={bot.id}
          bot={bot}
          editBot={() => editBot(bot)}
          editingBot={editingBot?.id}
          isSelected={selectedBot?.id === bot.id}
          selectBot={() => selectBot(bot)}
        />
      ))}
    </div>
  );
};

export default BotList;
