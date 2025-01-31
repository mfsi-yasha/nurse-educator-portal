import { axiosJSON, SuccessResponse } from "src/globals/axiosInstances";

export interface FAQContent {
	id: string;
	title: string;
}

export default async function () {
	const { data: res } =
		await axiosJSON.get<SuccessResponse<Array<FAQContent>>>(
			"/features/faq.json",
		);
	if (res.err) {
		throw new Error(res.message ?? "Something went wrong!");
	} else {
		return res.data;
	}
}
