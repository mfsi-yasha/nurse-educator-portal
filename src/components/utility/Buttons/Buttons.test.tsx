import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import Buttons from "./Buttons"; // Import the Buttons component
import styles from "./Buttons.module.scss"; // Import styles
import { describe, it, expect } from "vitest";

describe("Buttons Component", () => {
	it("renders with the correct classes and text content based on props", () => {
		// Render the Buttons component with the "whiteCurvy" variant
		render(
			<Buttons
				text="Click Me"
				varient="whiteCurvy"
			/>,
		);

		// Select the button element again
		const buttonElementWithVariant = screen.getByRole("button");

		// Check if the button contains the correct text
		expect(buttonElementWithVariant).toHaveTextContent("Click Me");

		// Check that the "whiteCurvy" class is applied
		expect(buttonElementWithVariant).toHaveClass(styles.whiteCurvy);
	});
});
