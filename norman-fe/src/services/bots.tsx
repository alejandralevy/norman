import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { createBot, getBots } from "../apis/bots";

const KEY = "Bots";

export const useMutateBots = () => {
  const queryClient = useQueryClient();

  return useMutation(createBot, {
    onSuccess: () => {
      queryClient.invalidateQueries([KEY]);
    },
  });
};

export const useBots = () => {
  return useQuery([KEY], getBots);
};
