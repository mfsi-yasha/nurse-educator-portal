import { useState } from "react";
import Heading from "src/components/utility/Heading/Heading";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import Containers from "src/components/layout/Containers/Containers";
import Nurse from "./children/Nurse/Nurse";
import Dashboard from "./children/Dashboard/Dashboard";
import Tabs from "src/components/utility/Tabs/Tabs";

function Home() {
	const [activeTab, setActiveTab] = useState("dashboard");

	return (
		<div className="pt-5 px-1 px-md-4">
			<Heading
				className="px-2"
				text={"Nurse Educator Portal"}
				isH1={true}
			/>
			<Paragraph
				className="px-2"
				text={"This is a line of text for this program"}
			/>

			<div className="px-2 pb-2">
				<Nurse />
			</div>

			<div className="px-2 pb-2">
				<Containers.ColorContainer className="pb-5 w-100">
					<Tabs
						tabs={[
							{ text: "Dashboard", key: "dashboard" },
							{ text: "Getting started", key: "gettingStarted" },
						]}
						tabClassName="px-3 px-md-4"
						tabInnerClassName="px-1"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<Dashboard />
				</Containers.ColorContainer>
			</div>
		</div>
	);
}

export default Home;
