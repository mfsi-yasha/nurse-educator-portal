import Welcome from "../Welcome/Welcome";
import Services from "../Services/Services";
import NurseCallBooking from "src/features/NurseCallBooking/NurseCallBooking";
import Reminders from "src/features/Reminders/Reminders";
import ChatWithUs from "src/components/common/ChatWithUs/ChatWithUs";
import useDashboard from "src/hooks/home/useDashboard";
import useProfile from "src/hooks/user/useProfile";
import SubHeading from "src/components/utility/SubHeading/SubHeading";

/**
 * A component that displays the main dashboard for the user.
 * It includes a welcome message, services section, nurse call booking, reminders,
 * and chat functionality for support during operating hours.
 */
function Dashboard() {
	const { dashboardData } = useDashboard();
	const { profileData } = useProfile();

	return (
		<div
			data-testid="dashboard-element"
			className="row p-3 m-0 pb-5 pb-md-3"
		>
			{/* Main section for welcome message and services */}
			<div className="col-12 col-md-8 p-0">
				{/* Welcome message with user's name and dashboard description */}
				<Welcome
					heading={`Welcome ${profileData?.name ?? ""}`}
					subHeading={dashboardData?.description ?? ""}
				/>

				{/* Services section with a heading */}
				<div className="px-1 px-md-3">
					<SubHeading
						text="Services"
						type="type2"
						className="mt-3 mt-md-5"
					/>
					{/* Display the list of services */}
					<Services />
				</div>
			</div>

			{/* Right-side section for chat, nurse call booking, and reminders */}
			<div className="col-12 col-md-4 px-1 p-md-4 mt-5 mt-md-0">
				{/* Chat functionality with operating hours */}
				<ChatWithUs
					className="p-4"
					operatingHoursStart={
						dashboardData?.chatWithUs?.operatingHoursStart ?? ""
					}
					operatingHoursEnd={dashboardData?.chatWithUs?.operatingHoursEnd ?? ""}
					timezone={dashboardData?.chatWithUs?.timezone ?? ""}
					handleChat={() => {}}
				/>

				{/* Nurse call booking and reminders section */}
				<div className="mt-3 pt-2">
					<NurseCallBooking />
					{/* Reminders component, displayed below nurse call booking */}
					<Reminders className="mt-3" />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
