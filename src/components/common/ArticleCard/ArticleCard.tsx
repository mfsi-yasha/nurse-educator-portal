import Containers from "src/components/layout/Containers/Containers";
import SmallHeading from "src/components/utility/SmallHeading/SmallHeading";
import styles from "./ArticleCard.module.scss";
import goImg from "src/assets/images/Go.svg";

function ArticleCard({
	articleName,
	articleImgURL,
	handleGo,
	...props
}: {
	articleName: string;
	articleImgURL: string;
	handleGo: () => void;
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	return (
		<Containers.ColorContainer
			varient="lessLightGrey"
			{...props}
		>
			<img
				src={articleImgURL}
				alt=""
				width={272.91}
				height={160.26}
				className={`${styles.articleImg}`}
				loading="lazy"
			/>
			<div className="d-flex my-2 my-md-3 px-2 gap-2 justify-content-between align-items-center">
				<SmallHeading
					className="p-0 my-auto"
					type="type3Apis"
					text={articleName}
				/>
				<img
					src={goImg}
					tabIndex={1}
					alt=""
					loading="lazy"
					width={37}
					height={37}
					className={`p-0 ${styles.goImg}`}
				/>
			</div>
		</Containers.ColorContainer>
	);
}

export default ArticleCard;
