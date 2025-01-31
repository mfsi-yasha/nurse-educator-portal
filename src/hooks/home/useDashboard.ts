import { useQuery } from "@tanstack/react-query";
import dashboardApi from "src/apis/home/dashboard.api";

function useDashboard() {
	const { data: dashboardData, status: dashboardFetchStatus } = useQuery({
		queryKey: ["useDashboard"],
		queryFn: dashboardApi,
	});

	return { dashboardData, dashboardFetchStatus };
}

export default useDashboard;
