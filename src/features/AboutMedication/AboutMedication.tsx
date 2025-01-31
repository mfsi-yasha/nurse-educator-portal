import Containers from "src/components/layout/Containers/Containers";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import VideoPlayer from "src/components/utility/VideoPlayer/VideoPlayer";

function AboutMedication(
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) {
	return (
		<Containers.ColorContainer
			varient="lessLightGrey"
			{...props}
		>
			<VideoPlayer
				thumbnilURL={
					"/media/images/depositphotos_282401614-stock-photo-asian-senior-doctor-and-patient.png"
				}
				videoURL={"/media/videos/mov_bbb.mp4"}
			/>
			<SmallHeading
				className="my-3"
				type="type2"
				text={"Learn about your medication"}
			/>
			<Paragraph
				className="p-0 m-0 mt-3"
				keepItSmall={true}
				text={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
				}
			/>
		</Containers.ColorContainer>
	);
}

export default AboutMedication;
