import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen, fireEvent } from "@testing-library/react"; // Import for render and fireEvent
import ArticleCard from "./ArticleCard"; // Import the component
import goImg from "src/assets/images/Go.svg"; // Import go image
import { describe, it, expect, vi } from "vitest";

describe("ArticleCard Component", () => {
	const mockArticleName = "Test Article";
	const mockArticleImgURL = "https://example.com/article.jpg";
	const handleGoMock = vi.fn();

	it("renders the ArticleCard correctly and handles go button click", () => {
		// Render the ArticleCard component
		render(
			<ArticleCard
				articleName={mockArticleName}
				articleImgURL={mockArticleImgURL}
				handleGo={handleGoMock}
			/>,
		);

		// Check if the article image is rendered with the correct source and alt text
		const articleImg = screen.getByAltText("articleImg");
		expect(articleImg).toBeInTheDocument();
		expect(articleImg).toHaveAttribute("src", mockArticleImgURL);

		// Check if the SmallHeading component is rendered with the correct article name
		const headingText = screen.getByText(mockArticleName);
		expect(headingText).toBeInTheDocument();

		// Check if the go image is rendered with the correct source and alt text
		const goImage = screen.getByAltText("goImg");
		expect(goImage).toBeInTheDocument();
		expect(goImage).toHaveAttribute("src", goImg);

		// Simulate click on the go image and check if the handleGo function is called
		fireEvent.click(goImage);
		expect(handleGoMock).toHaveBeenCalledTimes(1);
	});
});
