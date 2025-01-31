import ArticleCard from "src/components/common/ArticleCard/ArticleCard";

function ArticleList(
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) {
	return (
		<div {...props}>
			<ArticleCard
				className="p-2"
				articleName={"How to stay in control"}
				articleImgURL={"/media/images/i-can-do-it.png"}
				handleGo={() => {}}
			/>
			<ArticleCard
				className="p-2"
				articleName={"Why Hydration is Important"}
				articleImgURL={"/media/images/skincare.png"}
				handleGo={() => {}}
			/>
			<ArticleCard
				className="p-2"
				articleName={"Avoiding the challenges"}
				articleImgURL={"/media/images/arthircover.png"}
				handleGo={() => {}}
			/>
			<ArticleCard
				className="p-2"
				articleName={"New Year Reflections"}
				articleImgURL={"/media/images/diet.png"}
				handleGo={() => {}}
			/>
		</div>
	);
}

export default ArticleList;
