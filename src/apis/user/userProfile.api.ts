import { axiosJSON, SuccessResponse } from "src/globals/axiosInstances";

export interface UserProfile {
	id: string;
	name: string;
	profileImgURL?: string;
}

export default async function () {
	const { data: res } =
		await axiosJSON.get<SuccessResponse<UserProfile>>("/user/profile.json");
	if (res.err) {
		throw new Error(res.message ?? "Something went wrong!");
	} else {
		return res.data;
	}
}
