import SubHeading from "src/components/utility/SubHeading/SubHeading";
import Welcome from "../Welcome/Welcome";
import AboutMedication from "src/pages/Home/children/AboutMedication/AboutMedication";
import ArticleList from "src/features/ArticleList/ArticleList";
import useGettingStarted from "src/hooks/home/useGettingStarted";

/**
 * A component that displays the "Getting Started" section of the homepage.
 * It includes a welcome section, an "About your medication" section, and a list of articles
 * that may be of interest to the user.
 */
function GettingStarted() {
	const { gettingStartedData } = useGettingStarted();

	return (
		<div
			data-testid="getting-started-element"
			className="p-3 m-0"
		>
			{/* Welcome section displaying a heading and subheading */}
			<Welcome
				heading="Help getting started"
				subHeading={gettingStartedData?.description ?? ""}
				keepColFull={true}
			/>
			<div className="row m-0 p-0 px-1 px-md-3">
				{/* About Medication section */}
				<div className="col-12 col-md-6 p-0 mt-3 pe-0 pe-md-5">
					<SubHeading
						text="About your medication"
						type="type2"
						className="mt-1 mb-4"
					/>
					<AboutMedication className="p-2 pb-3" />
				</div>
				{/* Articles of interest section */}
				<div className="getting-started-sub-heading-2 col-12 col-md-6 p-0 pb-4 mt-3 ps-0 ps-md-5">
					<SubHeading
						text="Articles that may be of interest"
						type="type2"
						className="mt-1 mb-4 ps-0 ps-md-1"
					/>
					<ArticleList className="getting-started-article-list d-grid column-gap-2 row-gap-5" />
				</div>
			</div>
		</div>
	);
}

export default GettingStarted;
