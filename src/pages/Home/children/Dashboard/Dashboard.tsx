import Welcome from "../Welcome/Welcome";
import Services from "../Services/Services";
import NurseCallBooking from "src/features/NurseCallBooking/NurseCallBooking";
import Reminders from "src/features/Reminders/Reminders";
import ChatWithUs from "src/components/common/ChatWithUs/ChatWithUs";

function Dashboard() {
	return (
		<div className="row p-3 m-0 pb-5 pb-md-3">
			<div className="col-12 col-md-8 p-0">
				<Welcome
					heading="Welcome Claire"
					subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
				/>
				<Services />
			</div>
			<div className="col-12 col-md-4 px-1 p-md-4 mt-5 mt-md-0">
				<ChatWithUs
					className="p-4"
					operatingHoursStart="9am"
					operatingHoursEnd="5.30pm"
					timezone="Australian Eastern Time"
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
