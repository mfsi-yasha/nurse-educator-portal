import FAQButton from "src/components/common/FAQButton/FAQButton";

function FAQList() {
	return (
		<>
			<FAQButton
				className="py-2"
				text={"Frequently asked questions #01"}
			/>
			<FAQButton
				className="py-2"
				text={"Frequently asked questions #02"}
			/>
			<FAQButton
				className="py-2"
				text={"Frequently asked questions #03"}
			/>
		</>
	);
}

export default FAQList;
