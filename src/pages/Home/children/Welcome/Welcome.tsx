import Heading from "src/components/utility/Heading/Heading";
import Paragraph from "src/components/utility/Paragraph/Paragraph";

function Welcome() {
	return (
		<div className="px-1 px-md-3">
			<Heading
				className="mb-3 mb-md-4"
				text={"Welcome Claire"}
			/>
			<div className="row p-0 m-0">
				<Paragraph
					className="col-12 col-md-9 p-0 mb-0"
					keepItSmall={true}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
					}
				/>
			</div>
		</div>
	);
}

export default Welcome;
