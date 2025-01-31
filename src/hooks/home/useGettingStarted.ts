import { useQuery } from "@tanstack/react-query";
import gettingStartedApi from "src/apis/home/gettingStarted.api";

function useGettingStarted() {
	const { data: gettingStartedData, status: gettingStartedFetchStatus } =
		useQuery({
			queryKey: ["useGettingStarted"],
			queryFn: gettingStartedApi,
		});

	return { gettingStartedData, gettingStartedFetchStatus };
}

export default useGettingStarted;
