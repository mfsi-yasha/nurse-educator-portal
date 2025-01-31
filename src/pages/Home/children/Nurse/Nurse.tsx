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

function AllParagraphs() {
	const { nurseData, nurseFetchStatus } = useNurse();
	const [showMore, setShowMore] = useState(false);

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

function Nurse() {
	return (
		<div>
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
			<Containers.ColorContainer className="p-3 w-100 mb-4">
				<div className="m-0 p-0 px-1 px-md-3 row justify-content-between">
					<div className="p-0 col-12 col-md-6">
						<SubHeading
							className="mb-3"
							text="Nurse education service"
						/>
						<AllParagraphs />
					</div>
					<div className="p-0 col-4 d-none d-md-flex flex-column gap-1">
						<FAQList />
					</div>
				</div>
			</Containers.ColorContainer>
		</div>
	);
}

export default Nurse;
