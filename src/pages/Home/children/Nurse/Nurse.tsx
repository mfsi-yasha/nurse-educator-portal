import CustomBtns from "src/components/common/CustomBtns/CustomBtns";
import Containers from "src/components/layout/Containers/Containers";
import Paragraph from "src/components/utility/Paragraph/Paragraph";
import ReadMore from "src/components/utility/ReadMore/ReadMore";
import SubHeading from "src/components/utility/SubHeading/SubHeading";
import FAQList from "src/features/FAQList/FAQList";

function Nurse() {
	return (
		<div>
			<div className="d-flex gap-2 mb-5 mb-md-4">
				<CustomBtns
					isActive={true}
					varient="nurse"
				/>
				<CustomBtns
					isActive={false}
					varient="history"
				/>
			</div>
			<Containers.ColorContainer className="p-3 w-100 mb-4">
				<div className="m-0 p-0 px-1 px-md-3 row justify-content-between">
					<div className="p-0 col-12 col-md-6">
						<SubHeading
							className="mb-3"
							text="Nurse education service"
						/>
						<Paragraph
							keepItSmall={true}
							text={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip."
							}
						/>
						<ReadMore
							text="Read More"
							rotate="down"
						/>
					</div>
					<div className="p-0 col-4 d-none d-md-flex flex-column gap-1">
						<FAQList />
					</div>
				</div>
			</Containers.ColorContainer>
		</div>
	);
}

export default Nurse;
