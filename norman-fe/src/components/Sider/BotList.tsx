import { useEffect, useState } from "react";

import { useBots } from "../../services/bots";
import Bot from "../../types/Bot";
import Loader from "../Common/Loader";

import CustomCollapse from "./CustomCollapse";

const BotList = ({
  selectedBot,
  setSelectedBot,
  filter,
}: {
  selectedBot: any;
  setSelectedBot: (bot: Bot) => void;
  filter: string;
}) => {
  const [editingBot, setEditingBot] = useState<Bot>();
  const { data, isError, isLoading } = useBots();
  const [filteredBots, setFilteredBots] = useState<Bot[]>();

  useEffect(() => {
    setFilteredBots(data?.filter((bot: Bot) => bot.name.includes(filter)));
  }, [data, filter]);

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
    return <Loader text="Loading bots..." />;
  }

  return (
    <div>
      {filteredBots &&
        filteredBots.map((bot: Bot) => (
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
