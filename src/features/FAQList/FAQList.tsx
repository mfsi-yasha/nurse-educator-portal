import FAQButton from "src/components/common/FAQButton/FAQButton";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import ShowError from "src/components/utility/ShowError/ShowError";
import useFAQ from "src/hooks/features/useFAQ";

function FAQList() {
	const { faqData, faqFetchStatus } = useFAQ();

	if (faqFetchStatus === "error") {
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<ShowError className="text-center">
					Error loading content.
					<br />
					Check your network or try again later!
				</ShowError>
			</div>
		);
	}

	if (faqFetchStatus === "pending") {
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<div
					className="spinner-border"
					style={{ width: 40, height: 40 }}
				/>
			</div>
		);
	}

	if ((faqData?.length ?? 0) === 0) {
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<NoDataFound text="No FAQ Found" />
			</div>
		);
	}

	return (
		<>
			{faqData?.map(faqV => {
				return (
					<FAQButton
						key={faqV.id}
						className="py-2"
						text={faqV.title}
					/>
				);
			})}
		</>
	);
}

export default FAQList;
