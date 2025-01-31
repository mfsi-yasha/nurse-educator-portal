import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import ShowError from "./ShowError";
import { describe, it, expect } from "vitest";
import styles from "./ShowError.module.scss";

describe("ShowError", () => {
	it("renders children, applies className correctly, and forwards other props", () => {
		// Render the component with text content
		const { rerender } = render(
			<ShowError className="custom-error">This is an error message</ShowError>,
		);

		// Check if the children are rendered correctly
		const errorMessage = screen.getByText("This is an error message");
		expect(errorMessage).toBeInTheDocument();

		// Check if the custom class is applied
		expect(errorMessage).toHaveClass("custom-error");

		// Re-render with additional props like 'id' and 'data-testid'
		rerender(
			<ShowError
				className="custom-error"
				id="error-1"
				data-testid="show-error"
			>
				This is an error message
			</ShowError>,
		);

		// Check if 'id' and 'data-testid' props are forwarded correctly
		expect(errorMessage).toHaveAttribute("id", "error-1");
		expect(errorMessage).toHaveAttribute("data-testid", "show-error");

		// Check that the default error class is applied
		expect(errorMessage).toHaveClass(styles.error);
	});
});
