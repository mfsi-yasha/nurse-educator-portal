import "@testing-library/jest-dom/vitest"; // Import for assertions
import { render, screen, fireEvent } from "@testing-library/react"; // Import for render and fireEvent
import ChatWithUs from "./ChatWithUs"; // Import the component
import messageIcon from "src/assets/images/MessagesEmpty.svg"; // Import messageIcon
import { describe, it, expect, vi } from "vitest";

describe("ChatWithUs Component", () => {
	const handleChatMock = vi.fn();
	const mockOperatingHoursStart = "9:00 AM";
	const mockOperatingHoursEnd = "5:00 PM";
	const mockTimezone = "GMT";

	it("renders ChatWithUs component and handles chat button click", () => {
		// Render the ChatWithUs component
		render(
			<ChatWithUs
				operatingHoursStart={mockOperatingHoursStart}
				operatingHoursEnd={mockOperatingHoursEnd}
				timezone={mockTimezone}
				handleChat={handleChatMock}
			/>,
		);

		// Check if the message icon is rendered correctly
		const icon = screen.getByAltText("messageIcon");
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute("src", messageIcon);

		// Check if the text "Questions?" is rendered
		const questionText = screen.getByText("Questions?");
		expect(questionText).toBeInTheDocument();

		// Check if the operating hours are displayed correctly
		const operatingHoursText = screen.getByText(
			`Operating hours: ${mockOperatingHoursStart} - ${mockOperatingHoursEnd} ${mockTimezone}`,
		);
		expect(operatingHoursText).toBeInTheDocument();

		// Check if the "Chat with us" button is rendered
		const chatButton = screen.getByText("Chat with us");
		expect(chatButton).toBeInTheDocument();

		// Simulate a click on the "Chat with us" button
		fireEvent.click(chatButton);

		// Check if the handleChat function was called once
		expect(handleChatMock).toHaveBeenCalledTimes(1);
	});
});
