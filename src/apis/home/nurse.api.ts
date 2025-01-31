import { axiosJSON, SuccessResponse } from "src/globals/axiosInstances";

export interface NurseContent {
	id: string;
	paragraph: string;
}

export default async function () {
	const { data: res } =
		await axiosJSON.get<SuccessResponse<Array<NurseContent>>>(
			"/home/nurse.json",
		);
	if (res.err) {
		throw new Error(res.message ?? "Something went wrong!");
	} else {
		return res.data;
	}
}
