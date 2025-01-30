import styles from "./Containers.module.scss";

function ColorContainer({
	children,
	className,
	varient = "whiteShadow",
	...props
}: {
	children: React.ReactNode;
	varient?: "whiteShadow" | "lightTomato" | "lessLightGrey";
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	return (
		<div
			className={`${styles[varient]} ${className ?? ""}`}
			{...props}
		>
			{children}
		</div>
	);
}

function ContainerWithHeading({
	children,
	className,
	headingText,
	headingClassName,
	...props
}: {
	children: React.ReactNode;
	headingText: string;
	headingClassName?: string;
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	return (
		<div
			className={`${styles.headingContainer} ${className ?? ""}`}
			{...props}
		>
			<div className={`${styles.heading} ${headingClassName ?? ""}`}>
				{headingText}
			</div>
			{children}
		</div>
	);
}

export default { ColorContainer, ContainerWithHeading };
