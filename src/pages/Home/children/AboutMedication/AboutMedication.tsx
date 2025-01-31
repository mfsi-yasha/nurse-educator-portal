import Containers from "src/components/layout/Containers/Containers";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import ShowError from "src/components/utility/ShowError/ShowError";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import VideoPlayer from "src/components/utility/VideoPlayer/VideoPlayer";
import useGettingStarted from "src/hooks/home/useGettingStarted";

function AboutMedication(
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) {
	const { gettingStartedData, gettingStartedFetchStatus } = useGettingStarted();

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

	return (
		<Containers.ColorContainer
			varient="lessLightGrey"
			{...props}
		>
			<VideoPlayer
				thumbnilURL={gettingStartedData.aboutMedication.thumbnilURL}
				videoURL={gettingStartedData.aboutMedication.videoURL}
			/>
			<SmallHeading
				className="my-3"
				type="type2"
				text={gettingStartedData.aboutMedication.title}
			/>
			<Paragraph
				className="p-0 m-0 mt-3"
				keepItSmall={true}
				text={gettingStartedData.aboutMedication.description}
			/>
		</Containers.ColorContainer>
	);
}

export default AboutMedication;
