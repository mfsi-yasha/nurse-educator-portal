import HLine from "src/components/utility/HLine/HLine";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import Buttons from "src/components/utility/Buttons/Buttons";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import useDashboard from "src/hooks/home/useDashboard";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import ShowError from "src/components/utility/ShowError/ShowError";
import { Fragment } from "react/jsx-runtime";

/**
 * A component that displays a list of services fetched from the dashboard.
 * It handles loading, error, and empty data states, and renders the service information.
 */
function Services() {
	// Destructure the dashboard data and fetch status from the custom hook
	const { dashboardData, dashboardFetchStatus } = useDashboard();

	// Display error message when fetching data fails
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

	// Display loading spinner while data is being fetched
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

	// Display a message if no services data is available
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

	// Render each service item in the services list
	return (
		<>
			{dashboardData?.services.map((serviceV, index) => {
				return (
					<Fragment key={serviceV.id}>
						<SmallHeading
							className={index === 0 ? "" : "mt-5 mt-md-3"}
							text={serviceV.title}
						/>
						<div
							className={`${index + 1 === dashboardData.services.length ? "" : "mb-5 mb-md-2"} p-0 m-0 row flex-column flex-md-row justify-content-between`}
						>
							<Paragraph
								className="col-12 col-md-7 p-0"
								keepItSmall={true}
								text={serviceV.description}
							/>
							<Buttons
								className="me-4 my-auto"
								text={
									serviceV.serviceType === "requestConsultation"
										? "Request now"
										: "Set up now"
								}
							/>
						</div>
						{/* Render horizontal line except for the last service */}
						{index + 1 < dashboardData.services.length && (
							<HLine className="d-none d-md-block" />
						)}
					</Fragment>
				);
			})}
		</>
	);
}

export default Services;
