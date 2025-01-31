import styles from "./Buttons.module.scss";

function Buttons({
	text,
	className,
	varient = "redLessCurvy",
	...props
}: {
	text: string;
	varient?: "redLessCurvy" | "whiteCurvy";
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	return (
		<button
			className={`p-0 btn ${styles[varient]} ${className ?? ""}`}
			{...props}
		>
			{text}
		</button>
	);
}

export default Buttons;
