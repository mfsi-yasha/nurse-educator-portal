import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import Paragraph from "./Paragraph"; // Your Paragraph component
import styles from "./Paragraph.module.scss"; // Import styles
import { describe, it, expect } from "vitest";

describe("Paragraph Component", () => {
	it("renders the paragraph with the correct text and applies the correct class based on 'keepItSmall' prop", () => {
		// Render the Paragraph component with normal text and without small size
		render(
			<Paragraph
				text="This is a normal paragraph"
				keepItSmall={false}
			/>,
		);

		// Check if the text is rendered
		const paragraphElement = screen.getByText("This is a normal paragraph");
		expect(paragraphElement).toBeInTheDocument();

		// Check that the paragraph does not have the 'small' class
		expect(paragraphElement).not.toHaveClass(styles.small);

		// Render the Paragraph component with small size
		render(
			<Paragraph
				text="This is a small paragraph"
				keepItSmall={true}
			/>,
		);

		// Check if the text is rendered
		const smallParagraph = screen.getByText("This is a small paragraph");
		expect(smallParagraph).toBeInTheDocument();

		// Check that the paragraph has the 'small' class
		expect(smallParagraph).toHaveClass(styles.small);
	});
});
