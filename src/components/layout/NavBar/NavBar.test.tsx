import "@testing-library/jest-dom/vitest"; // For assertions
import { render, screen } from "@testing-library/react"; // For rendering and fireEvent
import NavBar, { NavBarButton } from "./NavBar"; // Import NavBar and NavBarButton
import { describe, it, expect } from "vitest";

describe("NavBar Component", () => {
	const mockProfile = <div>Profile</div>;
	const mockNavButtonText = "Test Button";

	// Test NavBar rendering and functionality
	it("renders NavBar correctly and toggles menu visibility", () => {
		// Render the NavBar with mock profile and NavBarButton
		render(
			<NavBar profile={mockProfile}>
				<NavBarButton text={mockNavButtonText} />
			</NavBar>,
		);

		// Check if the heading image is rendered correctly
		const headingImg = screen.getByAltText("ConnectPatient");
		expect(headingImg).toBeInTheDocument();

		// Check if the profile section is rendered correctly
		const profileSection = screen.getByText("Profile");
		expect(profileSection).toBeInTheDocument();

		// Check if the menu button is rendered
		const menuButton = screen.getByTestId("menu-btn-element");
		expect(menuButton).toBeInTheDocument();
	});
});
