import Heading from "src/components/utility/Heading/Heading";
import Paragraph from "src/components/utility/Paragraph/Paragraph";

function Welcome({
	heading,
	subHeading,
	keepColFull = false,
}: {
	heading: string;
	subHeading: string;
	keepColFull?: boolean;
}) {
	return (
		<div className="px-1 px-md-3">
			<Heading
				className="mb-3 mb-md-4"
				text={heading}
			/>
			<div className="row p-0 m-0">
				<Paragraph
					className={`col-12 ${keepColFull ? "" : "col-md-9"} p-0 mb-0`}
					keepItSmall={true}
					text={subHeading}
				/>
			</div>
		</div>
	);
}

export default Welcome;
