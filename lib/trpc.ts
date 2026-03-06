import { leads, subscribers } from "../data";

type MutationOptions = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

function createSubscriberStats() {
  return {
    total: subscribers.length,
    active: subscribers.filter((s) => s.status === "active").length,
    unsubscribed: subscribers.filter((s) => s.status === "unsubscribed").length,
    bounced: subscribers.filter((s) => s.status === "bounced").length,
  };
}

export const trpc = {
  notifications: {
    unreadCount: {
      useQuery: () => ({ data: 0 }),
    },
  },
  leads: {
    list: {
      useQuery: () => ({ data: leads, isLoading: false }),
    },
  },
  subscribers: {
    list: {
      useQuery: () => ({
        data: subscribers,
        isLoading: false,
        refetch: () => Promise.resolve({ data: subscribers }),
      }),
    },
    stats: {
      useQuery: () => ({ data: createSubscriberStats() }),
    },
    create: {
      useMutation: (options?: MutationOptions) => ({
        isPending: false,
        mutate: () => {
          try {
            options?.onSuccess?.();
          } catch (error) {
            const err = error instanceof Error ? error : new Error("Unknown mutation error");
            options?.onError?.(err);
          }
        },
      }),
    },
  },
};
