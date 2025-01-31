import { axiosJSON, SuccessResponse } from "src/globals/axiosInstances";

export interface AboutMedicationI {
	thumbnilURL: string;
	videoURL: string;
	title: string;
	description: string;
}

export interface GettingStartedContent {
	description: string;
	aboutMedication: AboutMedicationI;
}

export default async function () {
	const { data: res } = await axiosJSON.get<
		SuccessResponse<GettingStartedContent>
	>("/home/gettingStarted.json");
	if (res.err) {
		throw new Error(res.message ?? "Something went wrong!");
	} else {
		return res.data;
	}
}
