import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import SubHeading from "./SubHeading";
import { describe, it, expect } from "vitest";
import styles from "./SubHeading.module.scss";

describe("SubHeading", () => {
	it("renders text, applies type and className correctly, and forwards other props", () => {
		// Render the component with different props
		const { rerender } = render(
			<SubHeading
				text="Test Heading"
				className="custom-class"
			/>,
		);

		// Check if the text is rendered
		const subHeading = screen.getByText("Test Heading");
		expect(subHeading).toBeInTheDocument();

		// Check if the custom class is applied
		expect(subHeading).toHaveClass("custom-class");

		// Check if 'type2' class is NOT applied when 'type' prop is not passed
		expect(subHeading).not.toHaveClass(styles.type2);

		// Re-render with 'type' prop
		rerender(
			<SubHeading
				text="Test Heading"
				type="type2"
				className="custom-class"
			/>,
		);

		// Check if the 'type2' class is applied when 'type' prop is passed
		expect(subHeading).toHaveClass(styles.type2);

		// Check if other props like id or data-testid are forwarded correctly
		rerender(
			<SubHeading
				text="Test Heading"
				id="test-id"
				data-testid="subheading"
			/>,
		);
		expect(subHeading).toHaveAttribute("id", "test-id");
		expect(subHeading).toHaveAttribute("data-testid", "subheading");
	});
});
