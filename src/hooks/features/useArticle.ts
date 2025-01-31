import { useQuery } from "@tanstack/react-query";
import articleApi from "src/apis/features/article.api";

function useArticle() {
	const { data: articleData, status: articleFetchStatus } = useQuery({
		queryKey: ["useArticle"],
		queryFn: articleApi,
	});

	return { articleData, articleFetchStatus };
}

export default useArticle;
