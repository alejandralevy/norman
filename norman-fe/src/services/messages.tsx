import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getMessages, newMessage } from "../apis/messages";

const KEY = "Messages";

export const useMutateMessage = (botId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => newMessage(botId), {
    onSuccess: () => {
      queryClient.invalidateQueries([KEY]);
    },
  });
};

export const useMessage = (botId: string) => {
  return useQuery([KEY, botId], () => getMessages(botId));
};
