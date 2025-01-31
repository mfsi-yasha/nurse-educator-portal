import "@testing-library/jest-dom/vitest"; // For assertions
import { render, screen } from "@testing-library/react"; // For rendering and screen queries
import NavProfile from "./NavProfile"; // Import NavProfile component
import { describe, it, expect } from "vitest";

describe("NavProfile Component", () => {
	it("renders NavProfile correctly based on different states", () => {
		const mockName = "John Doe";

		// Test first letter of name when no profile image is available
		render(
			<NavProfile
				name={mockName}
				isLoading={false}
				profileImgURL={undefined}
			/>,
		);

		// Check if the first letter "J" is displayed
		const profileInitial = screen.getByText("J");
		expect(profileInitial).toBeInTheDocument();

		// Test empty name (fallback "NA")
		render(
			<NavProfile
				name={""}
				isLoading={false}
				profileImgURL={undefined}
			/>,
		);

		// Check if "NA" is displayed when name is empty
		const fallbackText = screen.getByText("NA");
		expect(fallbackText).toBeInTheDocument();
	});
});
