import styles from "./SubHeading.module.scss";

function SubHeading({
	text,
	type,
	className,
	...props
}: { text: string; type?: "type2" } & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>) {
	return (
		<h3
			className={`${styles.subHeading} ${type ? styles[type] : ""} ${className ?? ""}`}
			{...props}
		>
			{text}
		</h3>
	);
}

export default SubHeading;
