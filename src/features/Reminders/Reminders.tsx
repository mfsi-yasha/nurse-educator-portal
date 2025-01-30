import Containers from "src/components/layout/Containers/Containers";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";

function Reminders(
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
		</div>
	);
}

export default Reminders;
