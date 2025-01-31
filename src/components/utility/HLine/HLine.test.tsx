import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import HLine from "./HLine"; // Import the HLine component
import styles from "./HLine.module.scss"; // Import styles
import { describe, it, expect } from "vitest";

describe("HLine Component", () => {
	it("applies an additional custom class when passed", () => {
		const customClass = "custom-class";

		// Render the HLine component with a custom class
		render(<HLine className={customClass} />);

		// Select the div element rendered by the HLine component
		const hLine = screen.getByTestId("HLine-Element");

		// Check that the custom class is applied along with the base class
		expect(hLine).toHaveClass(styles.hLine);
		expect(hLine).toHaveClass(customClass);
	});
});
