import { useQuery } from "@tanstack/react-query";
import userProfileApi from "src/apis/user/userProfile.api";

function useProfile() {
	const { data: profileData, status: profileFetchStatus } = useQuery({
		queryKey: ["useProfile"],
		queryFn: userProfileApi,
	});

	return { profileData, profileFetchStatus };
}

export default useProfile;
