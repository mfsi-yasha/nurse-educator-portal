import { useQuery } from "@tanstack/react-query";
import faqApi from "src/apis/features/faq.api";

function useFAQ() {
	const { data: faqData, status: faqFetchStatus } = useQuery({
		queryKey: ["useFAQ"],
		queryFn: faqApi,
	});

	return { faqData, faqFetchStatus };
}

export default useFAQ;
