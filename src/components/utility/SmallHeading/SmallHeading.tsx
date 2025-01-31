import styles from "./SmallHeading.module.scss";

function SmallHeading({
	text,
	type,
	className,
	...props
}: { text: string; type?: "type2" | "type3Apis" } & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>) {
	return (
		<h4
			className={`${styles.smallHeading} ${type ? styles[type] : ""} ${className ?? ""}`}
			{...props}
		>
			{text}
		</h4>
	);
}

export default SmallHeading;
