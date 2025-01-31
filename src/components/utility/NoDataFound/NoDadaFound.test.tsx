import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import NoDataFound from "./NoDataFound"; // Import the NoDataFound component
import styles from "./NoDataFound.module.scss"; // Import styles
import { describe, expect, it } from "vitest";

describe("NoDataFound Component", () => {
	it("renders the provided text and applies the correct class", () => {
		// Render the NoDataFound component with some text
		render(<NoDataFound text="No data available" />);

		// Check if the provided text is in the document
		const noDataText = screen.getByText("No data available");
		expect(noDataText).toBeInTheDocument();

		// Check if the component has the correct base class
		expect(noDataText).toHaveClass(styles.noDataFound);

		// Test with an additional custom class
		const customClass = "custom-class";
		render(
			<NoDataFound
				text="No data found"
				className={customClass}
			/>,
		);

		const noDataCustom = screen.getByText("No data found");
		// Check that the custom class is also applied
		expect(noDataCustom).toHaveClass(customClass);
	});
});
