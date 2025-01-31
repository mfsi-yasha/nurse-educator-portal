import { ChatWithUsI } from "src/apis/home/dashboard.api";
import Containers from "src/components/layout/Containers/Containers";
import Buttons from "src/components/utility/Buttons/Buttons";
import styles from "./ChatWithUs.module.scss";
import messageIcon from "src/assets/images/MessagesEmpty.svg";

function ChatWithUs({
	operatingHoursStart,
	operatingHoursEnd,
	timezone,
	handleChat,
	...props
}: {
	handleChat: () => void;
} & ChatWithUsI &
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>) {
	return (
		<Containers.ColorContainer
			varient="lightTomato"
			{...props}
		>
			<div className={`mb-3 px-1 d-flex gap-2 ${styles.heading}`}>
				<img
					src={messageIcon}
					alt="messageIcon"
					loading="lazy"
					width={30}
					height={30}
				/>
				{`Questions?`}
			</div>
			<div className={`${styles.para} px-1`}>
				<p>{`Ask an expert about your treatment.`}</p>
				<p>
					{`Operating hours: ${operatingHoursStart} - ${operatingHoursEnd} ${timezone}`}
				</p>
			</div>
			<div className="d-flex justify-content-end">
				<Buttons
					text="Chat with us"
					varient="whiteCurvy"
					onClick={handleChat}
				/>
			</div>
		</Containers.ColorContainer>
	);
}

export default ChatWithUs;
