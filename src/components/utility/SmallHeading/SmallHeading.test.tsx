import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import SmallHeading from "./SmallHeading";
import { describe, it, expect } from "vitest";
import styles from "./SmallHeading.module.scss";

describe("SmallHeading", () => {
	it("renders text, applies type classes and className correctly, and forwards other props", () => {
		// Render the component with different props
		const { rerender } = render(
			<SmallHeading
				text="Test Small Heading"
				className="custom-class"
			/>,
		);

		// Check if the text is rendered
		const smallHeading = screen.getByText("Test Small Heading");
		expect(smallHeading).toBeInTheDocument();

		// Check if the custom class is applied
		expect(smallHeading).toHaveClass("custom-class");

		// Check if 'type2' class is NOT applied when 'type' prop is not passed
		expect(smallHeading).not.toHaveClass(styles.type2);
		expect(smallHeading).not.toHaveClass(styles.type3Apis);

		// Re-render with 'type' prop set to 'type2'
		rerender(
			<SmallHeading
				text="Test Small Heading"
				type="type2"
				className="custom-class"
			/>,
		);

		// Check if the 'type2' class is applied when 'type' prop is passed
		expect(smallHeading).toHaveClass(styles.type2);

		// Re-render with 'type' prop set to 'type3Apis'
		rerender(
			<SmallHeading
				text="Test Small Heading"
				type="type3Apis"
				className="custom-class"
			/>,
		);

		// Check if the 'type3Apis' class is applied when 'type' prop is passed
		expect(smallHeading).toHaveClass(styles.type3Apis);

		// Check if other props like id or data-testid are forwarded correctly
		rerender(
			<SmallHeading
				text="Test Small Heading"
				id="test-id"
				data-testid="smallheading"
			/>,
		);
		expect(smallHeading).toHaveAttribute("id", "test-id");
		expect(smallHeading).toHaveAttribute("data-testid", "smallheading");
	});
});
