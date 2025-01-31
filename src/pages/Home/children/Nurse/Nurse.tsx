import { useState } from "react";
import CustomBtns from "src/components/common/CustomBtns/CustomBtns";
import Containers from "src/components/layout/Containers/Containers";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import ReadMore from "src/components/utility/ReadMore/ReadMore";
import ShowError from "src/components/utility/ShowError/ShowError";
import SubHeading from "src/components/utility/SubHeading/SubHeading";
import FAQList from "src/features/FAQList/FAQList";
import useNurse from "src/hooks/home/useNurse";

/**
 * A component that displays paragraphs of text related to nurse education services.
 * It handles loading, error, and empty states, and allows users to toggle the visibility of additional text.
 */
function AllParagraphs() {
	const { nurseData, nurseFetchStatus } = useNurse();
	const [showMore, setShowMore] = useState(false);

	// Display error message when fetching nurse data fails
	if (nurseFetchStatus === "error") {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "50px" }}
			>
				<ShowError className="text-center">
					Error loading content.
					<br />
					Check your network or try again later!
				</ShowError>
			</div>
		);
	}

	// Display loading spinner while nurse data is being fetched
	if (nurseFetchStatus === "pending") {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "50px" }}
			>
				<div
					className="spinner-border"
					style={{ width: 40, height: 40 }}
				/>
			</div>
		);
	}

	// Display a message if no nurse data is available
	if ((nurseData?.length ?? 0) === 0) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "50px" }}
			>
				<NoDataFound text="No Data Found" />
			</div>
		);
	}

	// Render paragraphs and allow toggling between "Read More" / "Read Less"
	return (
		<>
			<div className={`${showMore ? "" : "mb-3 clipped-text"}`}>
				{nurseData?.map(nurseV => {
					return (
						<Paragraph
							key={nurseV.id}
							keepItSmall={true}
							text={nurseV.paragraph}
						/>
					);
				})}
			</div>
			<ReadMore
				text={showMore ? "Read Less" : "Read More"}
				rotate={showMore ? "up" : "down"}
				onClick={() => {
					setShowMore(v => !v);
				}}
			/>
		</>
	);
}

/**
 * A component that displays the nurse education service page, including the main content and a FAQ section.
 * It shows the "Nurse education service" heading, the paragraphs from the `AllParagraphs` component,
 * and a list of frequently asked questions.
 */
function Nurse() {
	return (
		<div>
			{/* Navigation buttons for switching between nurse and history */}
			<div className="d-flex gap-2 mb-5 mb-md-4">
				<CustomBtns
					isActive={true}
					varient="nurse"
				/>
				<CustomBtns
					isActive={false}
					varient="history"
				/>
			</div>
			{/* Nurse education service content container */}
			<Containers.ColorContainer className="p-3 w-100 mb-4">
				<div className="m-0 p-0 px-1 px-md-3 row justify-content-between">
					{/* Main content section for nurse education */}
					<div className="p-0 col-12 col-md-6">
						<SubHeading
							className="mb-3"
							text="Nurse education service"
						/>
						<AllParagraphs />
					</div>
					{/* FAQ section displayed on larger screens */}
					<div className="p-0 col-4 d-none d-md-flex flex-column gap-1">
						<FAQList />
					</div>
				</div>
			</Containers.ColorContainer>
		</div>
	);
}

export default Nurse;
