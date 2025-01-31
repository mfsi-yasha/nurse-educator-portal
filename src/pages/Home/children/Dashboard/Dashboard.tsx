import Welcome from "../Welcome/Welcome";
import Services from "../Services/Services";
import NurseCallBooking from "src/features/NurseCallBooking/NurseCallBooking";
import Reminders from "src/features/Reminders/Reminders";
import ChatWithUs from "src/components/common/ChatWithUs/ChatWithUs";
import useDashboard from "src/hooks/home/useDashboard";
import useProfile from "src/hooks/user/useProfile";
import SubHeading from "src/components/utility/SubHeading/SubHeading";

function Dashboard() {
	const { dashboardData } = useDashboard();
	const { profileData } = useProfile();

	return (
		<div className="row p-3 m-0 pb-5 pb-md-3">
			<div className="col-12 col-md-8 p-0">
				<Welcome
					heading={`Welcome ${profileData?.name ?? ""}`}
					subHeading={dashboardData?.description ?? ""}
				/>

				<div className="px-1 px-md-3">
					<SubHeading
						text="Services"
						type="type2"
						className="mt-3 mt-md-5"
					/>
					<Services />
				</div>
			</div>
			<div className="col-12 col-md-4 px-1 p-md-4 mt-5 mt-md-0">
				<ChatWithUs
					className="p-4"
					operatingHoursStart={
						dashboardData?.chatWithUs?.operatingHoursStart ?? ""
					}
					operatingHoursEnd={dashboardData?.chatWithUs?.operatingHoursEnd ?? ""}
					timezone={dashboardData?.chatWithUs?.timezone ?? ""}
					handleChat={() => {}}
				/>
				<div className="mt-3 pt-2">
					<NurseCallBooking />
					<Reminders className="mt-3" />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
