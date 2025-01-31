import Containers from "src/components/layout/Containers/Containers";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import ReadMore from "src/components/utility/ReadMore/ReadMore";

function NurseCallBooking(
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) {
	return (
		<div {...props}>
			<Containers.ContainerWithHeading
				className="p-2"
				headingClassName="py-2"
				headingText="Your nurse call booking:"
			>
				<NoDataFound
					className="py-3"
					text="No current booking"
				/>
			</Containers.ContainerWithHeading>
			<ReadMore
				className="mx-2 my-1"
				text="View history"
				rotate="right"
			/>
		</div>
	);
}

export default NurseCallBooking;
