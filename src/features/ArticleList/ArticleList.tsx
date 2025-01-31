import ArticleCard from "src/components/common/ArticleCard/ArticleCard";
import NoDataFound from "src/components/utility/NoDataFound/NoDataFound";
import ShowError from "src/components/utility/ShowError/ShowError";
import useArticle from "src/hooks/features/useArticle";

function ArticleList(
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) {
	const { articleData, articleFetchStatus } = useArticle();

	if (articleFetchStatus === "error") {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<ShowError className="text-center">
					Error loading content.
					<br />
					Check your network or try again later!
				</ShowError>
			</div>
		);
	}

	if (articleFetchStatus === "pending") {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<div
					className="spinner-border"
					style={{ width: 40, height: 40 }}
				/>
			</div>
		);
	}

	if ((articleData?.length ?? 0) === 0) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100px" }}
			>
				<NoDataFound text="No Article Found" />
			</div>
		);
	}

	return (
		<div {...props}>
			{articleData?.map(articleV => {
				return (
					<ArticleCard
						key={articleV.id}
						className="p-2"
						articleName={articleV.title}
						articleImgURL={articleV.imageURL}
						handleGo={() => {}}
					/>
				);
			})}
		</div>
	);
}

export default ArticleList;
