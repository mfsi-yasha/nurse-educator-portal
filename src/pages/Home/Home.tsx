import { useState } from "react";
import Heading from "src/components/utility/Heading/Heading";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import Containers from "src/components/layout/Containers/Containers";
import Nurse from "./children/Nurse/Nurse";
import Dashboard from "./children/Dashboard/Dashboard";
import Tabs from "src/components/utility/Tabs/Tabs";
import GettingStarted from "./children/GettingStarted/GettingStarted";

/**
 * The main component for the Nurse Educator Portal, which includes a heading, description,
 * a section for Nurse information, and a tabbed navigation system to switch between
 * "Dashboard" and "Getting Started" sections.
 */
function Home() {
	const [activeTab, setActiveTab] = useState("dashboard");

	return (
		<div className="pt-5 px-1 px-md-4">
			{/* Main heading for the page */}
			<Heading
				className="px-2"
				text={"Nurse Educator Portal"}
				isH1={true}
			/>
			{/* Description paragraph */}
			<Paragraph
				className="px-2"
				text={"This is a line of text for this program"}
			/>

			{/* Nurse section */}
			<div className="px-2 pb-2">
				<Nurse />
			</div>

			{/* Tab navigation and content display */}
			<div className="px-2 pb-2">
				<Containers.ColorContainer className="pb-3 w-100">
					{/* Tabs for switching between Dashboard and Getting Started sections */}
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
					{/* Conditional rendering of Dashboard or Getting Started based on activeTab */}
					{activeTab === "dashboard" ? <Dashboard /> : <GettingStarted />}
				</Containers.ColorContainer>
			</div>
		</div>
	);
}

export default Home;
