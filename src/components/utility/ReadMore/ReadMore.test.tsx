import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import ReadMore from "./ReadMore";
import { describe, it, expect } from "vitest";

describe("ReadMore1", () => {
	it("renders the button with correct text, rotation, and styles", () => {
		// Render component with 'down' rotation and test text
		render(
			<ReadMore
				text="Read More"
				rotate="down"
				className="custom-class"
			/>,
		);

		// Check if the button has the correct text
		const button = screen.getByTestId("botton-read-more");
		expect(button).toHaveTextContent("Read More");

		// Check if the button has the custom className
		expect(button).toHaveClass("custom-class");

		// Check if the rotation style for "down" is correct (should be 0deg)
		const vectorImage = screen.getByAltText("vector");
		expect(vectorImage).toHaveStyle("transform: rotateZ(0deg)");
	});
});
