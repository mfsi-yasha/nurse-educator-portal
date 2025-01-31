import styles from "./FAQButton.module.scss";
import vector from "src/assets/images/RedVector.svg";

function FAQButton({
	text,
	className,
	...props
}: { text: string } & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	return (
		<button
			data-testid="faq-button-element"
			className={`d-flex justify-content-between align-items-center p-0 btn ${styles.faqButton} ${className ?? ""}`}
			{...props}
		>
			<span>{text}</span>
			<img
				src={vector}
				alt="vector"
				loading="lazy"
				width={14}
				height={7}
				style={{
					transform: `rotateZ(-90deg)`,
				}}
			/>
		</button>
	);
}

export default FAQButton;
