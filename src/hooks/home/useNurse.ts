import { useQuery } from "@tanstack/react-query";
import nurseApi from "src/apis/home/nurse.api";

function useNurse() {
	const { data: nurseData, status: nurseFetchStatus } = useQuery({
		queryKey: ["useNurse"],
		queryFn: nurseApi,
	});

	return { nurseData, nurseFetchStatus };
}

export default useNurse;
