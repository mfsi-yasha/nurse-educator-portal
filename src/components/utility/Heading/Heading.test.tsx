import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import Heading from "./Heading"; // Import the Heading component
import styles from "./Heading.module.scss"; // Import styles
import { describe, it, expect } from "vitest";

describe("Heading Component", () => {
	it("renders an h1 element when isH1 is true", () => {
		// Render the Heading component with isH1 set to true
		render(
			<Heading
				text="Test Heading"
				isH1={true}
			/>,
		);

		// Select the h1 element rendered by the component
		const headingElement = screen.getByRole("heading", { level: 1 });

		// Check if the rendered element is an h1
		expect(headingElement.tagName).toBe("H1");

		// Check that the correct class is applied
		expect(headingElement).toHaveClass(styles.heading);
		expect(headingElement).toHaveTextContent("Test Heading");
	});

	it("renders an h2 element when isH1 is false (default)", () => {
		// Render the Heading component with isH1 not passed (defaults to false)
		render(<Heading text="Test Heading" />);

		// Select the h2 element rendered by the component
		const headingElement = screen.getByRole("heading", { level: 2 });

		// Check if the rendered element is an h2
		expect(headingElement.tagName).toBe("H2");

		// Check that the correct class is applied
		expect(headingElement).toHaveClass(styles.heading);
		expect(headingElement).toHaveTextContent("Test Heading");
	});
});
