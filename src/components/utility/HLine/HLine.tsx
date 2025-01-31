import styles from "./HLine.module.scss";

function HLine({
	className,
	...props
}: React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	return (
		<div
			data-testid="HLine-Element"
			className={`${styles.hLine} ${className ?? ""}`}
			{...props}
		/>
	);
}

export default HLine;
