import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { createBot, deleteBot, getBots } from "../apis/bots";

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
  return useQuery([KEY], getBots, { staleTime: Infinity, cacheTime: Infinity });
};

export const useDeleteBot = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBot, {
    onSuccess: () => {
      queryClient.invalidateQueries([KEY]);
    },
  });
};
