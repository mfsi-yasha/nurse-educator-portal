import Containers from "src/components/layout/Containers/Containers";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import ShowError from "src/components/utility/ShowError/ShowError";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import VideoPlayer from "src/components/utility/VideoPlayer/VideoPlayer";
import useGettingStarted from "src/hooks/home/useGettingStarted";

/**
 * A component that displays the "About Medication" section, including a video player, title, and description.
 * It handles loading, error, and empty states based on the fetching status of the data.
 */
function AboutMedication(
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) {
	const { gettingStartedData, gettingStartedFetchStatus } = useGettingStarted();

	// Handle error state when fetching data fails
	if (gettingStartedFetchStatus === "error") {
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

	// Handle loading state when data is being fetched
	if (gettingStartedFetchStatus === "pending") {
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

	// Handle case where no data is available
	if (!gettingStartedData?.aboutMedication) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<NoDataFound text="No Data Found" />
			</div>
		);
	}

	// Render the "About Medication" content with video and description
	return (
		<Containers.ColorContainer
			varient="lessLightGrey"
			{...props}
		>
			{/* Video player with thumbnail and video URL */}
			<VideoPlayer
				thumbnilURL={gettingStartedData.aboutMedication.thumbnilURL}
				videoURL={gettingStartedData.aboutMedication.videoURL}
			/>
			{/* Title of the "About Medication" section */}
			<SmallHeading
				className="my-3"
				type="type2"
				text={gettingStartedData.aboutMedication.title}
			/>
			{/* Description paragraph of the "About Medication" section */}
			<Paragraph
				className="p-0 m-0 mt-3"
				keepItSmall={true}
				text={gettingStartedData.aboutMedication.description}
			/>
		</Containers.ColorContainer>
	);
}

export default AboutMedication;
