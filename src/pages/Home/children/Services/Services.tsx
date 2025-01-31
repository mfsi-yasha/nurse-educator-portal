import HLine from "src/components/utility/HLine/HLine";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import Buttons from "src/components/utility/Buttons/Buttons";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import useDashboard from "src/hooks/home/useDashboard";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import ShowError from "src/components/utility/ShowError/ShowError";

function Services() {
	const { dashboardData, dashboardFetchStatus } = useDashboard();

	if (dashboardFetchStatus === "error") {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<ShowError className="text-center">
					Error loading content.
					<br />
					Check your network or try again later!
				</ShowError>
			</div>
		);
	}

	if (dashboardFetchStatus === "pending") {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<div
					className="spinner-border"
					style={{ width: 40, height: 40 }}
				/>
			</div>
		);
	}

	if ((dashboardData?.services?.length ?? 0) === 0) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<NoDataFound text="No Data Found" />
			</div>
		);
	}

	return (
		<>
			<SmallHeading
				text={"Request a consult with one of our qualified nurses"}
			/>
			<div className="mb-5 mb-md-2 p-0 m-0 row flex-column flex-md-row justify-content-between">
				<Paragraph
					className="col-12 col-md-7 p-0"
					keepItSmall={true}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
					}
				/>
				<Buttons
					className="me-4 my-auto"
					text="Request now"
				/>
			</div>
			<HLine className="d-none d-md-block" />
			<SmallHeading
				className="mt-5 mt-md-3"
				text={
					"Set up a reminder so your don’t miss an appointment or treatment"
				}
			/>
			<div className="p-0 m-0 row flex-column flex-md-row justify-content-between">
				<Paragraph
					className="col-12 col-md-7 p-0"
					keepItSmall={true}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
					}
				/>
				<Buttons
					className="me-4 my-auto"
					text="Set up now"
				/>
			</div>
		</>
	);
}

export default Services;
