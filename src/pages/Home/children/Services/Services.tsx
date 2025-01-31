import HLine from "src/components/utility/HLine/HLine";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import Buttons from "src/components/utility/Buttons/Buttons";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import SubHeading from "src/components/utility/SubHeading/SubHeading";

function Services() {
	return (
		<div className="px-1 px-md-3">
			<SubHeading
				text="Services"
				type="type2"
				className="mt-3 mt-md-5"
			/>
			<SmallHeading
				text={"Request a consult with one of our qualified nurses"}
			/>
			<div className="mb-5 mb-md-2 p-0 m-0 row flex-column flex-md-row justify-content-between">
				<Paragraph
					className="col-12 col-md-7 p-0"
					keepItSmall={true}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
					}
				/>
				<Buttons
					className="me-4 my-auto"
					text="Request now"
				/>
			</div>
			<HLine className="d-none d-md-block" />
			<SmallHeading
				className="mt-5 mt-md-3"
				text={
					"Set up a reminder so your don’t miss an appointment or treatment"
				}
			/>
			<div className="p-0 m-0 row flex-column flex-md-row justify-content-between">
				<Paragraph
					className="col-12 col-md-7 p-0"
					keepItSmall={true}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
					}
				/>
				<Buttons
					className="me-4 my-auto"
					text="Set up now"
				/>
			</div>
		</div>
	);
}

export default Services;
