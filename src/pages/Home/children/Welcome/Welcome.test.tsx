import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest"; // Use Vitest's expect
import Welcome from "./Welcome";

describe("Welcome Component", () => {
	it("should render the heading and subheading correctly", () => {
		render(
			<Welcome
				heading="Welcome!"
				subHeading="This is a subheading."
			/>,
		);

		// Using Vitest's expect for assertions
		expect(screen.getByText("Welcome!")).toBeInTheDocument();
		expect(screen.getByText("This is a subheading.")).toBeInTheDocument();
	});

	it("should apply the full column width class to subheading when keepColFull is true", () => {
		render(
			<Welcome
				heading="Welcome!"
				subHeading="This is a full-width subheading."
				keepColFull={true}
			/>,
		);

		expect(screen.getByText("This is a full-width subheading.")).toHaveClass(
			"col-12",
		);
	});

	it("should not apply the full column width class to subheading when keepColFull is false", () => {
		render(
			<Welcome
				heading="Welcome!"
				subHeading="This is a partial-width subheading."
				keepColFull={false}
			/>,
		);

		expect(screen.getByText("This is a partial-width subheading.")).toHaveClass(
			"col-md-9",
		);
	});

	it("should apply the default column width class when keepColFull is not provided", () => {
		render(
			<Welcome
				heading="Welcome!"
				subHeading="This is a default subheading."
			/>,
		);

		expect(screen.getByText("This is a default subheading.")).toHaveClass(
			"col-md-9",
		);
	});
});
