import "@testing-library/jest-dom/vitest"; // For assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import Containers from "./Containers"; // Import the ColorContainer and ContainerWithHeading components
import { describe, it, expect } from "vitest";

describe("Containers Component", () => {
	it("renders ColorContainer and ContainerWithHeading with the correct classes and children", () => {
		// Test ContainerWithHeading
		render(
			<Containers.ContainerWithHeading headingText="Heading Text">
				<p>ContainerWithHeading Content</p>
			</Containers.ContainerWithHeading>,
		);

		// Check if the ContainerWithHeading has the correct heading text
		expect(screen.getByText("Heading Text")).toBeInTheDocument();

		// Check if the child element (paragraph) is rendered correctly
		expect(
			screen.getByText("ContainerWithHeading Content"),
		).toBeInTheDocument();
	});
});
