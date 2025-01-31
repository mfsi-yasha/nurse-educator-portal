import "@testing-library/jest-dom/vitest"; // For better assertions
import { render, screen } from "@testing-library/react";
import CustomBtns from "./CustomBtns"; // Path to your CustomBtns component
import { describe, it, expect, vi } from "vitest";
import styles from "./CustomBtns.module.scss";

describe("CustomBtns", () => {
	it("applies the active class when isActive is true", () => {
		render(
			<CustomBtns
				varient="nurse"
				isActive={true}
				onClick={vi.fn()}
			/>,
		);

		// Check if the active class is applied
		const button = screen.getByTestId("custom-button-element");
		expect(button).toHaveClass(styles.active);
	});
});
