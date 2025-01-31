import styles from "./Paragraph.module.scss";

function Paragraph({
	text,
	keepItSmall = false,
	className,
	...props
}: { text: string; keepItSmall?: boolean } & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>) {
	return (
		<p
			className={`${styles.paragraph} ${keepItSmall ? styles.small : ""} ${className ?? ""}`}
			{...props}
		>
			{text}
		</p>
	);
}

export default Paragraph;
