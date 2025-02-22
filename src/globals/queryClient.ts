import { QueryClient } from "@tanstack/react-query";

export default new QueryClient({
	defaultOptions: {
		queries: { staleTime: 0, gcTime: 0, networkMode: "always" },
	},
});
