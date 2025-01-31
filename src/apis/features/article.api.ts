import { axiosJSON, SuccessResponse } from "src/globals/axiosInstances";

export interface ArticleContent {
	id: string;
	title: string;
	imageURL: string;
}

export default async function () {
	const { data: res } = await axiosJSON.get<
		SuccessResponse<Array<ArticleContent>>
	>("/features/article.json");
	if (res.err) {
		throw new Error(res.message ?? "Something went wrong!");
	} else {
		return res.data;
	}
}
