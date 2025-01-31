import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FAQButton from "./FAQButton"; // Path to the component

describe("FAQButton", () => {
	it("renders with correct text and rotation", () => {
		const handleClick = vi.fn();
		const text = "FAQ";

		render(
			<FAQButton
				text={text}
				onClick={handleClick}
			/>,
		);

		// Check if the button text is rendered correctly
		const buttonText = screen.getByText(text);
		expect(buttonText).toBeInTheDocument();

		// Check if the button has the data-testid attribute
		const button = screen.getByTestId("faq-button-element");
		expect(button).toBeInTheDocument();
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);

		// Check if the vector image is rendered
		const vectorImage = screen.getByAltText("vector");
		expect(vectorImage).toBeInTheDocument();

		// Check if the image has the correct style (rotated)
		expect(vectorImage).toHaveStyle("transform: rotateZ(-90deg)");
	});
});
