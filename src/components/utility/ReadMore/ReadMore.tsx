import styles from "./ReadMore.module.scss";
import vector from "src/assets/images/RedVector.svg";

function ReadMore({
	text,
	rotate,
	className,
	...props
}: {
	text: string;
	rotate: "down" | "up" | "left" | "right";
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	return (
		<button
			className={`p-0 btn d-inline-flex justify-content-center align-items-center gap-2 ${styles.readMore} ${className ?? ""}`}
			data-testid="botton-read-more"
			{...props}
		>
			<span>{text}</span>
			<img
				src={vector}
				alt="vector"
				loading="lazy"
				width={10}
				height={6}
				style={{
					transform: `rotateZ(${
						rotate === "down"
							? "0deg"
							: rotate === "up"
								? "180deg"
								: rotate === "left"
									? "90deg"
									: "-90deg"
					})`,
				}}
			/>
		</button>
	);
}

export default ReadMore;
