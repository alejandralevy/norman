import { useEffect, useState } from "react";

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
  filter,
}: {
  isDeleting: Bot | undefined;
  editingBot: Bot | undefined;
  editBot: (bot: Bot) => void;
  selectedBot: Bot | undefined;
  selectBot: (bot: Bot) => void;
  onChangeIsDeleting: (bot: Bot) => void;
  filter: string;
}) => {
  const { data, isError, isLoading } = useBots();
  const [filteredBots, setFilteredBots] = useState<Bot[]>();

  useEffect(() => {
    setFilteredBots(data?.filter((bot: Bot) => bot.name.includes(filter)));
  }, [data, filter]);

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
